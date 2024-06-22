import React, { useEffect } from 'react';

const TermsAndConditions = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl mb-5">Terms and Conditions</h1>
      <h2 className="font-bold text-2xl mt-5">1. Definitions</h2>
      <p>
        - <strong>Service:</strong> The delivery of food and related services provided by FoodAppi.<br />
        - <strong>We</strong>, <strong>Us</strong>, <strong>Our</strong>: Refers to FoodAppi.<br />
        - <strong>You</strong>, <strong>User</strong>, <strong>Customer</strong>: Refers to the individual using our Service.<br />
        - <strong>Restaurant Partner:</strong> A restaurant that has partnered with FoodAppi to provide food for delivery.
      </p>

      <h2 className="font-bold text-2xl mt-5">2. Use of Our Service</h2>
      <p>
        - By using FoodAppi, you confirm that you are at least 18 years old or are accessing the Service under the supervision of a parent or legal guardian.<br />
        - You agree to use our Service only for lawful purposes.<br />
        - You are responsible for maintaining the confidentiality of your account and password.
      </p>

      <h2 className="font-bold text-2xl mt-5">3. Account Registration</h2>
      <p>
        - To place an order, you may need to create an account. You must provide accurate and complete information during the registration process.<br />
        - You are responsible for maintaining the confidentiality of your account details and for all activities that occur under your account.
      </p>

      <h2 className="font-bold text-2xl mt-5">4. Orders and Payment</h2>
      <p>
        - All orders placed through FoodAppi are subject to acceptance and availability.<br />
        - Prices and availability of items are subject to change without notice.<br />
        - We accept various forms of payment, including credit/debit cards and digital wallets. Payment must be made at the time of order.
      </p>

      <h2 className="font-bold text-2xl mt-5">5. Delivery</h2>
      <p>
        - Estimated delivery times are provided for convenience and are not guaranteed.<br />
        - In the event of a delay, we will make reasonable efforts to inform you.<br />
        - Delivery fees and minimum order amounts may apply.
      </p>

      <h2 className="font-bold text-2xl mt-5">6. Cancellation and Refunds</h2>
      <p>
        - Orders can be canceled within a limited time frame specified at the time of order.<br />
        - Refunds are at the discretion of FoodAppi and may be issued for valid reasons such as incorrect or missing items.
      </p>

      <h2 className="font-bold text-2xl mt-5">7. Food Quality and Safety</h2>
      <p>
        - We partner with reputable Restaurant Partners to ensure high-quality food.<br />
        - FoodAppi is not responsible for the quality or safety of the food provided by Restaurant Partners.
      </p>

      <h2 className="font-bold text-2xl mt-5">8. Intellectual Property Rights</h2>
      <p>
        - All content, trademarks, and data on this website and app, including but not limited to software, databases, text, graphics, icons, hyperlinks, private information, designs, and agreements, are the property of or licensed to FoodAppi.
      </p>

      <h2 className="font-bold text-2xl mt-5">9. Limitation of Liability</h2>
      <p>
        - FoodAppi will not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of or inability to use our Service.
      </p>

      <h2 className="font-bold text-2xl mt-5">10. Indemnification</h2>
      <p>
        - You agree to indemnify, defend, and hold harmless FoodAppi, its directors, officers, employees, and affiliates from and against any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your use of the Service.
      </p>

      <h2 className="font-bold text-2xl mt-5">11. Governing Law</h2>
      <p>
        - These terms and conditions are governed by and construed in accordance with the laws of [Your Country/State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your Country/State] for the resolution of any disputes.
      </p>

      <h2 className="font-bold text-2xl mt-5">12. Changes to Terms and Conditions</h2>
      <p>
        - FoodAppi reserves the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website and app. Your continued use of the Service following the posting of changes constitutes your acceptance of those changes.
      </p>

      <h2 className="font-bold text-2xl mt-5">13. Contact Us</h2>
      <p>
        If you have any questions about these Terms and Conditions, please contact us at:<br />
        - **Email:** <a href="mailto:foodappi2023@gmail.com" className="text-blue-500">foodappi2023@gmail.com</a><br />
        - **Phone:** <a href="tel:+8801767013859" className="text-blue-500">+88 01767013859</a>
      </p>
    </div>
  );
};

export default TermsAndConditions;
