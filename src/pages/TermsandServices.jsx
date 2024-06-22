import React from "react";
import { Footer } from "../components/Footer";

const TermsandServices = () => {
  return (
    <div className="mt-[100px] mb-10 text-white px-5 min-h-screen justify-center flex flex-col items-center">
      <div className="my-4 px-10">
        <h1 className="text-3xl"> Terms Of Services</h1>
        <b>Overview</b>
        <li>
          Welcome to Qriocity.in (the "Website"). At Qriocity, we are committed
          to protecting your privacy and providing a safe online experience for
          all our users. This Privacy Policy outlines how we collect, use,
          share, and safeguard your personal information.
        </li>
        <li>
          {" "}
          By accessing or using our Website, you agree to the terms of this
          Privacy Policy.{" "}
        </li>
        <li>
          If you do not agree with the terms outlined herein, please refrain
          from using our services
        </li>
        <li>
          Information We Collect Personal Information: We collect personal
          information such as names, email addresses, and contact details when
          provided voluntarily by users during the registration process, course
          enrollment, or project submission.
        </li>
        <b>Usage Information:</b>
        <li>
          {" "}
          We gather non-personal information related to user interactions with
          our Website, including IP addresses, browser types, and device
          information. This information is collected to enhance the user
          experience and improve our services.{" "}
        </li>
        <li>
          How We Use Your Information Personalization: We use collected
          information to personalize user experiences, tailor content, and
          provide relevant recommendations for courses and projects.
        </li>
        <b>Communication:</b>
        <li>
          {" "}
          We may use your contact information to send important updates,
          newsletters, and promotional materials related to our services. You
          can opt-out of these communications at any time.{" "}
        </li>
        <b>Analytics:</b>
        <li>
          We analyze user behavior to improve our Website's functionality,
          content, and user interface, providing a more seamless and efficient
          experience. Information Sharing We do not sell, trade, or rent your
          personal information to third parties. However, we may share
          aggregated and anonymized data for statistical analysis and business
          purposes.
        </li>{" "}
        <li>
          ecurity Measures We employ industry-standard security measures to
          protect your information from unauthorized access, disclosure,
          alteration, and destruction.
        </li>{" "}
        <b>Your Choices Access and Correction:</b>
        <li>
          {" "}
          You can access and update your personal information in your account
          settings. If you need assistance, contact our support team.{" "}
        </li>
        <b>Opt-Out:</b>{" "}
        <li>
          You can opt-out of promotional communications by following the
          unsubscribe instructions in the emails you receive. Changes to this
          Privacy Policy We reserve the right to update this Privacy Policy as
          needed.
        </li>
        <li>
          We encourage you to review this page periodically for any changes.
          Your continued use of the Website signifies your acceptance of these
          changes.
        </li>
        <li>
          Contact Us If you have any questions, concerns, or requests regarding
          this Privacy Policy, please contact us at
          [responses.qriocity@gmail.com].
        </li>
      </div>
      <Footer />
    </div>
  );
};

export default TermsandServices;
