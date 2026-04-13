import { faqs } from "../constants/faqData";
import { useState } from "react";

const FAQCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white/10 border border-white/10 rounded-2xl overflow-hidden transition-all duration-300"
        >
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full p-6 text-left flex items-center justify-between group"
            aria-expanded={activeIndex === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
          >
            <span
              className={`text-lg font-semibold transition-colors duration-300 ${activeIndex === index ? faq.color : "text-white"}`}
            >
              {faq.question}
            </span>
            <span
              className={`text-2xl transition-transform duration-300 ${activeIndex === index ? "rotate-180 text-white" : "text-gray-500 rotate-0"}`}
              aria-hidden="true"
            >
              {activeIndex === index ? "−" : "+"}
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            className={`transition-all duration-300 ease-in-out overflow-hidden ${activeIndex === index ? "max-h-[300px] opacity-100 p-6 pt-0" : "max-h-0 opacity-0"}`}
          >
            <div className="h-[1px] bg-white/10 mb-6" aria-hidden="true"></div>
            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQCard;
