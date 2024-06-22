import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="p-5 md:p-10 lg:p-20">
      <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
      <p className="mb-4">
        FoodAppi is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our food delivery service.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">1. Information We Collect</h2>
      <h3 className="text-xl font-semibold mb-2">Personal Information:</h3>
      <p className="mb-4">
        When you register on our app, place an order, or contact us, we may collect personal information such as your name, email address, phone number, delivery address, and payment details.
      </p>
      <h3 className="text-xl font-semibold mb-2">Usage Data:</h3>
      <p className="mb-4">
        We collect information about how you interact with our service, including your browsing history, the pages you visit, your order history, and your preferences.
      </p>
      <h3 className="text-xl font-semibold mb-2">Device Information:</h3>
      <p className="mb-4">
        We may collect information about the device you use to access our service, including the device type, operating system, unique device identifiers, and network information.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">2. How We Use Your Information</h2>
      <h3 className="text-xl font-semibold mb-2">To Provide and Maintain Our Service:</h3>
      <p className="mb-4">
        We use your personal information to process your orders, manage your account, and provide customer support.
      </p>
      <h3 className="text-xl font-semibold mb-2">To Improve Our Service:</h3>
      <p className="mb-4">
        We analyze usage data to improve our app, customize your experience, and develop new features.
      </p>
      <h3 className="text-xl font-semibold mb-2">To Communicate with You:</h3>
      <p className="mb-4">
        We may send you updates, promotional offers, and other information related to your orders and our services.
      </p>
      <h3 className="text-xl font-semibold mb-2">For Security and Fraud Prevention:</h3>
      <p className="mb-4">
        We use your information to detect and prevent fraudulent activities and ensure the security of our services.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">3. Sharing Your Information</h2>
      <h3 className="text-xl font-semibold mb-2">With Restaurant Partners:</h3>
      <p className="mb-4">
        We share your order details, including your name and delivery address, with our restaurant partners to fulfill your orders.
      </p>
      <h3 className="text-xl font-semibold mb-2">With Service Providers:</h3>
      <p className="mb-4">
        We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, and marketing assistance.
      </p>
      <h3 className="text-xl font-semibold mb-2">For Legal Purposes:</h3>
      <p className="mb-4">
        We may disclose your information if required by law or in response to valid requests by public authorities.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">4. Your Privacy Rights</h2>
      <h3 className="text-xl font-semibold mb-2">Access and Update:</h3>
      <p className="mb-4">
        You have the right to access and update your personal information at any time through your account settings.
      </p>
      <h3 className="text-xl font-semibold mb-2">Opt-Out:</h3>
      <p className="mb-4">
        You can opt-out of receiving promotional communications from us by following the unsubscribe instructions in the emails or contacting us directly.
      </p>
      <h3 className="text-xl font-semibold mb-2">Data Deletion:</h3>
      <p className="mb-4">
        You can request the deletion of your personal information by contacting us. We will process your request in accordance with applicable laws.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">5. Security of Your Information</h2>
      <p className="mb-4">
        We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, use, or disclosure.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">6. Data Retention</h2>
      <p className="mb-4">
        We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">7. Changes to This Privacy Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website and app. Your continued use of our services after the changes have been made will constitute your acceptance of the changes.
      </p>
      
      <h2 className="text-2xl font-semibold my-4">8. Contact Us</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at:
      </p>
      <p className="mb-4">
        <strong>Email:</strong> foodappi2023@gmail.com<br />
        <strong>Phone:</strong> +88 01767013859
      </p>
    </div>
  );
};

export default PrivacyPolicy;
