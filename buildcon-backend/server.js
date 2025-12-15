require("dotenv").config();
const express = require("express");
const cors = require("cors");
const transporter = require("./config/mailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

/* =========================
   SMTP VERIFY (Startup)
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
    console.log("❌ SMTP verify failed:", err?.code || err?.message || err);
  }
})();

/* =========================
   HEALTH CHECK
========================= */
app.get("/api/health", (req, res) => {
  res.json({ ok: true, message: "BuildCon backend is running" });
});

/* =========================
   CONTACT FORM API
========================= */
app.post("/api/contact", async (req, res) => {
  const { firstName, lastName, email, phone, property, message } = req.body || {};

  if (!firstName || !lastName || !email || !phone || !property) {
    return res.status(400).json({
      success: false,
      message: "Missing fields",
      missing: {
        firstName: !firstName,
        lastName: !lastName,
        email: !email,
        phone: !phone,
        property: !property,
      },
    });
  }

  try {
    const adminEmail = process.env.ADMIN_EMAIL;
    if (!adminEmail) {
      return res.status(500).json({
        success: false,
        message: "ADMIN_EMAIL missing in .env",
      });
    }

    const safePhone = String(phone || "").trim();
    const safeEmail = String(email || "").trim();

    /* ---------- USER EMAIL ---------- */
    await transporter.sendMail({
      from: `"BuildCon Realty" <${process.env.EMAIL_USER}>`,
      to: safeEmail,
      subject: "Thank you for contacting BuildCon",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Dear ${firstName},</h2>
          <p>Thank you for reaching out to <b>BuildCon Realty</b>.</p>
          <p>Our team will contact you within 24 hours.</p>
          <hr/>
          <p><b>Your Details:</b></p>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Phone:</b> ${safePhone}</p>
          <p><b>Property:</b> ${property}</p>
          <p><b>Message:</b> ${message ? message : "-"}</p>
          <br/>
          <p>Warm regards,<br/><b>BuildCon Team</b></p>
        </div>
      `,
    });

    /* ---------- ADMIN EMAIL ---------- */
    await transporter.sendMail({
      from: `"BuildCon Website" <${process.env.EMAIL_USER}>`,
      to: adminEmail,
      subject: "New Website Enquiry",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Enquiry Received</h2>
          <p><b>Name:</b> ${firstName} ${lastName}</p>
          <p><b>Email:</b> ${safeEmail}</p>
          <p><b>Phone:</b> ${safePhone}</p>
          <p><b>Property:</b> ${property}</p>
          <p><b>Message:</b> ${message ? message : "-"}</p>
        </div>
      `,
    });

    return res.json({ success: true, message: "Emails sent successfully" });
  } catch (error) {
    console.error("Email Error:", error);

    return res.status(500).json({
      success: false,
      message: "Email failed",
      errorCode: error?.code || null,
      errorResponse: error?.response || null,
      errorMessage: error?.message || String(error),
    });
  }
});

/* =========================
   SERVER START
========================= */
app.listen(PORT, () => {
  console.log(`🚀 BuildCon Backend running on http://localhost:${PORT}`);
});
