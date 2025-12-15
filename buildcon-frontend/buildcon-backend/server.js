require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const transporter = require("./config/mailer");

const app = express();
const PORT = process.env.PORT || 5000;

/* =========================
   CORS
========================= */
app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* =========================
   BODY PARSER
========================= */
app.use(express.json());

/* =========================
   UPLOADS FOLDER
========================= */
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

/* =========================
   MULTER CONFIG (RESUME)
========================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  if (allowed.includes(file.mimetype)) return cb(null, true);
  return cb(new Error("Only PDF/DOC/DOCX allowed"), false);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 20 * 1024 * 1024 }, // 5MB
});

/* =========================
   SMTP VERIFY (ON START)
========================= */
(async () => {
  try {
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️ EMAIL_USER / EMAIL_PASS missing in .env");
      return;
    }
    await transporter.verify();
    console.log("✅ SMTP transporter verified successfully");
  } catch (err) {
    console.log("❌ SMTP verify failed:", err?.message || err);
  }
})();

/* =========================
   HEALTH CHECK
========================= */
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "BuildCon backend is running" });
});

/* =========================
   CONTACT FORM API (JSON)
========================= */
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, property, message } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !property) {
    return res.status(400).json({
      success: false,
      message: "Missing required fields",
    });
  }

  const adminEmail = process.env.ADMIN_EMAIL;
  if (!adminEmail) {
    return res.status(500).json({
      success: false,
      message: "ADMIN_EMAIL missing in .env",
    });
  }

  try {
    // ✅ 1) INSTANT RESPONSE (UI fast: 1–2 sec)
    res.json({ success: true, message: "Enquiry received. Emails will be sent shortly." });

    // ✅ 2) BACKGROUND: Send emails (don't block response)
    transporter
      .sendMail({
        from: `"BuildCon Realty" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Thank you for contacting BuildCon",
        html: `
          <h3>Dear ${firstName},</h3>
          <p>Thank you for contacting <b>BuildCon Realty</b>.</p>
          <p>Our team will reach out to you shortly.</p>
          <br/>
          <p><b>Regards</b><br/>BuildCon Team</p>
        `,
      })
      .catch((err) => console.error("User mail failed:", err));

    transporter
      .sendMail({
        from: `"BuildCon Website" <${process.env.EMAIL_USER}>`,
        to: adminEmail,
        subject: "New Website Enquiry",
        html: `
          <h3>New Enquiry Received</h3>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Property:</b> ${property}</p>
          <p><b>Message:</b> ${message || "-"}</p>
        `,
      })
      .catch((err) => console.error("Admin mail failed:", err));
  } catch (error) {
    // ⚠️ If headers already sent, we can’t res.status(500) here
    console.error("Contact API Error:", error);
    if (!res.headersSent) {
      return res.status(500).json({ success: false, message: "Email failed" });
    }
  }
});

/* =========================
   CAREER FORM API (MULTIPART)
========================= */
app.post("/api/career", upload.single("resume"), async (req, res) => {
  try {
    const { name, email, phone, experience, coverLetter } = req.body;
    const resume = req.file;

    if (!name || !email || !phone || !experience || !resume) {
      return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    // ✅ 1) IMMEDIATE RESPONSE (2-3 sec)
    res.json({
      success: true,
      message: "Application received. We will email you shortly.",
    });

    // ✅ 2) Background email sending (don’t block UI)
    const adminEmail = process.env.ADMIN_EMAIL;

    transporter.sendMail({
      from: `"BuildCon Careers" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: "New Career Application",
      html: `
        <h3>New Career Application</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Experience:</b> ${experience}</p>
        <p><b>Cover Letter:</b> ${coverLetter || "-"}</p>
      `,
      attachments: [{ filename: resume.originalname, path: resume.path }],
    }).catch((err) => console.error("Admin mail failed:", err));

    transporter.sendMail({
      from: `"BuildCon HR" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Application Received – BuildCon",
      html: `
        <p>Dear ${name},</p>
        <p>Thank you for applying at <b>BuildCon</b>.</p>
        <p>We have received your application and our HR team will review it.</p>
        <br/>
        <p>Best Regards,<br/>BuildCon HR Team</p>
      `,
    }).catch((err) => console.error("User mail failed:", err));

  } catch (error) {
    console.error("Career Error:", error);
    return res.status(500).json({ success: false, message: "Career submission failed" });
  }
});


/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log(`🚀 BuildCon Backend running on http://localhost:${PORT}`);
});
