import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const PrivacyPolicy = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-slate-200 p-6 flex justify-between items-center z-10">
          <h2 className="text-3xl font-bold text-slate-900">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="text-slate-600 hover:text-slate-900 text-3xl transition-colors leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-8 text-slate-700">
          <div className="prose prose-slate max-w-none">
            <p className="text-sm text-slate-500 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <p className="mb-6">
              At <strong>MaaPranaam</strong>, accessible from{" "}
              <a
                href="https://maapranaam.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                https://maapranaam.co.in
              </a>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by MaaPranaam and how we use it.
            </p>

            <p className="mb-6">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className="mb-8">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in MaaPranaam. This policy is not
              applicable to any information collected offline or via channels
              other than this website. Our Privacy Policy was created with the
              help of the Free Privacy Policy Generator.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Consent
            </h3>
            <p className="mb-8">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Information we collect
            </h3>
            <p className="mb-4">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="mb-4">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="mb-8">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              How we use your information
            </h3>
            <p className="mb-4">
              We use the information we collect in various ways, including to:
            </p>
            <ul className="list-disc list-inside mb-8 space-y-2 ml-4">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>
                Develop new products, services, features, and functionality
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes
              </li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Log Files
            </h3>
            <p className="mb-8">
              MaaPranaam follows a standard procedure of using log files. These
              files log visitors when they visit websites. All hosting companies
              do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date
              and time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Advertising Partners Privacy Policies
            </h3>
            <p className="mb-4">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of MaaPranaam.
            </p>
            <p className="mb-4">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on MaaPranaam,
              which are sent directly to users' browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </p>
            <p className="mb-8">
              Note that MaaPranaam has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Third Party Privacy Policies
            </h3>
            <p className="mb-4">
              MaaPranaam's Privacy Policy does not apply to other advertisers or
              websites. Thus, we are advising you to consult the respective
              Privacy Policies of these third-party ad servers for more detailed
              information. It may include their practices and instructions about
              how to opt-out of certain options.
            </p>
            <p className="mb-8">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h3>
            <p className="mb-4">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>
                Request that a business that collects a consumer's personal data
                disclose the categories and specific pieces of personal data
                that a business has collected about consumers.
              </li>
              <li>
                Request that a business delete any personal data about the
                consumer that a business has collected.
              </li>
              <li>
                Request that a business that sells a consumer's personal data,
                not sell the consumer's personal data.
              </li>
            </ul>
            <p className="mb-8">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              GDPR Data Protection Rights
            </h3>
            <p className="mb-4">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2 ml-4">
              <li>
                <strong>The right to access</strong> – You have the right to
                request copies of your personal data. We may charge you a small
                fee for this service.
              </li>
              <li>
                <strong>The right to rectification</strong> – You have the right
                to request that we correct any information you believe is
                inaccurate. You also have the right to request that we complete
                the information you believe is incomplete.
              </li>
              <li>
                <strong>The right to erasure</strong> – You have the right to
                request that we erase your personal data, under certain
                conditions.
              </li>
              <li>
                <strong>The right to restrict processing</strong> – You have the
                right to request that we restrict the processing of your
                personal data, under certain conditions.
              </li>
              <li>
                <strong>The right to object to processing</strong> – You have
                the right to object to our processing of your personal data,
                under certain conditions.
              </li>
              <li>
                <strong>The right to data portability</strong> – You have the
                right to request that we transfer the data that we have
                collected to another organization, or directly to you, under
                certain conditions.
              </li>
            </ul>
            <p className="mb-8">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>

            <h3 className="text-2xl font-semibold text-slate-900 mt-8 mb-4">
              Children's Information
            </h3>
            <p className="mb-4">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>
            <p className="mb-8">
              MaaPranaam does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do our
              best efforts to promptly remove such information from our records.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 italic">
                Generated using Privacy Policy Generator
              </p>
            </div>
          </div>
        </div>
      </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyPolicy;

