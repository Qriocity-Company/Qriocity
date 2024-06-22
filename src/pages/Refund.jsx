import React from "react";
import { Footer } from "../components/Footer";

const Refund = () => {
  return (
    <div className="mt-[100px] mb-10 text-white px-5 min-h-screen justify-center flex flex-col items-center">
      <div className="my-4 px-10">
        <h1 className="text-3xl">Refund and Cancellation policy</h1>
        <b>Overview</b>
        <li>
          At Qriocity Ventures Private Limited, customer satisfaction is our
          priority. However, we have established a No Refund and no Cancellation
          Policy for all our products to ensure clarity and fairness in our
          transactions.
        </li>
        <b>Scope</b>
        <li>
          {" "}
          This policy applies to all purchases of all our products made through
          Qriocity Ventures Private Limited and our affiliated platforms.
        </li>
        <b> No Refunds & Cancellation</b>
        <li>
          {" "}
          Once a purchase is completed, we do not offer refunds, returns,
          cancellations or exchanges for any reason
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

export default Refund;
