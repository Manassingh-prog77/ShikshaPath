import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PrivacyAndTerms = () => {
  const privacyRef = useRef(null);
  const termsRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    // Check the URL hash to determine which section to scroll to
    if (location.hash === '#terms' && termsRef.current) {
      termsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (location.hash === '#privacy' && privacyRef.current) {
      privacyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <section ref={privacyRef} className="bg-gray-50 p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          Privacy Policy & Terms and Conditions
        </h2>

        {/* Privacy Policy Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-10">
          <h3 className="text-2xl font-semibold mb-4">Privacy Policy</h3>
          <p className="mb-4">
            At ShikshaPath, we value your privacy. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our platform.
          </p>
          <h4 className="font-semibold mt-4">Information Collection</h4>
          <p className="mb-4">
            We collect personal information from users when they register for an account, interact with our services, or provide feedback. This information may include names, email addresses, phone numbers, and other contact details.
          </p>
          <h4 className="font-semibold mt-4">Use of Information</h4>
          <p className="mb-4">
            The information we collect is used to improve our services, communicate with users, and provide personalized experiences. Specifically, we may use your information to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Provide customer support and respond to inquiries.</li>
            <li>Send newsletters, marketing communications, and promotional offers.</li>
            <li>Analyze usage patterns to enhance our services.</li>
          </ul>
          <h4 className="font-semibold mt-4">Data Protection</h4>
          <p className="mb-4">
            We take appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure server hosting.
          </p>
          <h4 className="font-semibold mt-4">Cookies and Tracking Technologies</h4>
          <p className="mb-4">
            Our platform may use cookies and similar tracking technologies to enhance user experience. You can choose to accept or decline cookies, but declining cookies may prevent you from taking full advantage of the website.
          </p>
          <h4 className="font-semibold mt-4">Third-Party Services</h4>
          <p>
            We may employ third-party service providers to assist us in operating our platform, conducting our business, or servicing you. These third parties may have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
          </p>
          <h4 className="font-semibold mt-4">Changes to This Privacy Policy</h4>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically for the latest information on our privacy practices.
          </p>
        </div>

        {/* Terms and Conditions Section */}
        <div ref={termsRef} className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Terms and Conditions</h3>
          <p className="mb-4">
            By using ShikshaPath, you agree to comply with these Terms and Conditions. Please read them carefully.
          </p>
          <h4 className="font-semibold mt-4">User Responsibilities</h4>
          <p className="mb-4">
            Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account. You agree to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Notify us immediately of any unauthorized use of your account or any other breach of security.</li>
            <li>Ensure that all information you provide to us is accurate and complete.</li>
            <li>Update your account information as necessary to keep it accurate, current, and complete.</li>
          </ul>
          <h4 className="font-semibold mt-4">Prohibited Activities</h4>
          <p className="mb-4">
            Users must not engage in any activities that violate the rights of others, including but not limited to:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Using the platform for illegal purposes.</li>
            <li>Harassing or threatening other users.</li>
            <li>Distributing harmful software or viruses.</li>
            <li>Impersonating any person or entity, or falsely stating or misrepresenting your affiliation with a person or entity.</li>
          </ul>
          <h4 className="font-semibold mt-4">Consequences of Violations</h4>
          <p className="mb-4">
            Any violation of these terms may result in the immediate suspension or termination of your account, legal action, and/or financial penalties. We reserve the right to take any necessary action to protect our rights and those of our users.
          </p>
          <h4 className="font-semibold mt-4">Indemnification</h4>
          <p className="mb-4">
            You agree to indemnify and hold harmless ShikshaPath, its affiliates, and their respective officers, directors, employees, and agents from any claims, losses, liabilities, damages, costs, or expenses (including reasonable attorneys' fees) arising out of or in connection with your use of the platform or your violation of these Terms and Conditions.
          </p>
          <h4 className="font-semibold mt-4">Governing Law</h4>
          <p>
            These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions. Any disputes arising from or related to these Terms shall be resolved in the courts of [Your Jurisdiction].
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyAndTerms;
