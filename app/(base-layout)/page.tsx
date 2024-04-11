"use client"
import React from "react";
import Hero from "./_components/hero/Hero";
import WhyUs from "./_components/whyUs/WhyUs";
import GetCode from "./_components/getCode/GetCode";
import { Body, H1 } from "../toefl-score-reporting-voucher-code/formatting";
import QA from "../toefl-score-reporting-voucher-code/QA";

const dataQA = [
  {
    question: "How do I get free application guidance for TOEFL?",
    answer: "Simply join our WhatsApp group! We offer free, step-by-step assistance to help you with your application process."
  },
  {
    question: "How do I get the TOEFL discount code",
    answer: "It's very straight forward. In the youtube video you will get working voucher codes."
  },
  {
    question: "What support can I expect after joining the WhatsApp group?",
    answer: "Our community provides continuous support for your academic needs, from application tips to study resources for TOEFL preparation."
  },
  {
    question: "Are the TOEFL voucher codes really free?",
    answer: "Yes, our TOEFL voucher codes are provided for free as part of our commitment to your educational journey."
  },
]
const page = () => {
  return (
    <div className="">
      <Hero />
      <WhyUs />
      <GetCode />
      <Body>
        <H1>FAQ</H1>
        {dataQA.map((data, i) =>
          <div key={i}>
            <QA
              question={data.question}
              answer={data.answer}
            />
          </div>
        )}
      </Body>
    </div>
  );
};

export default page;
