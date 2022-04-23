import React from "react";
import "./PrivacyPolicy.css";
const PrivacyPolicy = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <div className="text-section">
      <div className="text-container">
        <h1 className="text-center my-3">Privacy policy</h1>
        <ul>
          <li>
            <h2>WHAT DO WE DO WITH YOUR INFORMATION?</h2>
            <p>When you purchase something from our store, as part of the buying and selling process, we collect the personal information you give us such as your name, address, and email address. Email marketing (if applicable): With your permission, we may send you emails about our store, new products, and other updates.</p>
          </li>

          <li>
            <h2>CONSENT</h2>
            <h3>How do you get my consent?</h3>
            <p>When you provide us with personal information to complete a transaction, verify your credit card, place an order, arrange for a delivery or return a purchase, we imply that you consent to our collecting it and using it for that specific reason only. </p>
          </li>

          <li>
            <h2>DISCLOSURE</h2>
            <p>We may disclose your personal information if we are required by law to do so or if you violate our Terms of Service.</p>
          </li>

          <li>
            <h2>STRIPE</h2>
            <p>We use stripe as a third party application for payment gateway. They store your data on a secure server behind a firewall. For more refer privacy & policy of strip <a href="https://stripe.com/en-in/privacy">https://stripe.com/en-in/privacy</a> </p>
          </li>

          <li>
            <h2>SECURITY</h2>
            <p>To protect your personal information, we take reasonable precautions and follow industry best practices to make sure it is not inappropriately lost, misused, accessed, disclosed, altered or destroyed.
              <br /> If you provide us with your credit card information, the information is encrypted using secure socket layer technology (SSL) and stored with AES-256 encryption. Although no method of transmission over the Internet or electronic storage is 100% secure, we follow all PCI-DSS requirements and implement additional generally accepted industry standards.
            </p>
          </li>

          <li>
            <h2>COOKIES</h2>
            <p>We totally give choice to user to store cookies as a pop-up which if accepted are totally safe & encrypted.
            </p>
          </li>

          <li>
            <h2>AGE OF CONSENT</h2>
            <p>By using this site, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
          </li>

          <li>
            <h2>CHANGES TO THIS PRIVACY POLICY</h2>
            <p>We reserve the right to modify this privacy policy at any time, so please review it frequently. Changes and clarifications will take effect immediately upon their posting on the website. If we make material changes to this policy, we will notify you here that it has been updated, so that you are aware of what information we collect, how we use it, and under what circumstances, if any, we use and/or disclose it.
              <br /> If our store is acquired or merged with another company, your information may be transferred to the new owners so that we may continue to sell products to you.
            </p>
          </li>

          <li>
            <h2>CONTACT INFORMATION</h2>
            <p>If you would like to: access, correct, amend or delete any personal information we have about you, register a complaint, or simply want more information contact our Privacy Compliance Officer at <a href="mailto:neonfit13@gmail.com">neonfit13@gmail.com </a>
            </p>
          </li>
        </ul>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
