import { useState } from "react";

const faqs = [
  {
    question: "How long does shipping take?",
    answer:
      "We typically deliver within 3–5 business days. You’ll receive real-time tracking updates once your order is shipped.",
  },
  {
    question: "Can I return or exchange items?",
    answer:
      "Yes, we offer easy returns and exchanges within 14 days of delivery. Items must be in original condition.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Absolutely. We ship worldwide. Shipping times and fees may vary depending on your location.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us anytime via our contact page or email. Our support team is always happy to help.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="pb-16 ">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold">
            Frequently Asked <span className="text-[#E8420A] italic">Questions</span>
          </h2>
          <p className="text-gray-600 mt-3 italic">
            Everything you need to know before you shop.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                <span className="text-[#E8420A] text-xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 transition-all duration-300 ${
                  activeIndex === index
                    ? "max-h-40 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}