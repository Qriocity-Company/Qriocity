import React from "react";
import { Footer } from "../components/Footer";

const TermsandServices = () => {
  return (
    <div className="mt-[100px] mb-10 text-white px-5 min-h-screen justify-center flex flex-col items-center">
      <div className="my-4 px-10">
        <h1 className="text-3xl">Terms and Conditions</h1>
        <li>
          {" "}
          Overview: By accessing and using our website, you agree to comply with
          our terms and conditions.{" "}
        </li>
        <li>
          Privacy: We collect personal information such as names and email
          addresses for the purpose of providing our services. We do not share
          this information with third parties.
        </li>
        <li>
          Usage: You agree to use our services only for lawful purposes and in a
          way that does not infringe the rights of others.
        </li>
        <li>
          {" "}
          Liability: Our company is not responsible for any damages or losses
          resulting from your use of our services.{" "}
        </li>
        <li>
          Changes: We reserve the right to update these terms and conditions at
          any time. Continued use of our services signifies your acceptance of
          the changes.
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
