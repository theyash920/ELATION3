import { useState } from "react";
import TitleHeader from "../components/TitleHeader";

const faqData = [
  {
    question: "What’s “risk-free” about your offer?",
    answer: "We don’t believe in asking for blind trust. Before any retainer, we run FOC pilot rounds so you know exactly what you’re signing up for. On top of that, we back our work with payback guarantees: if you don’t see value, you don’t pay."
  },
  {
    question: "What all can you not offer me?",
    answer: "We’re very clear on our strengths. We don’t handle influencer marketing, studio setup space, offline event management, ad spends of ₹85L+ per month, packaging or POSM production, celebrity partnerships, Amazon ads, or quick commerce growth. That said, we’ve partnered with some of the best outsourced teams for these, so you’ll still get access to top-quality work without the hassle. Or, if you prefer, we’ll step back and let you bring your own vendors while we focus on the quality control."
  },
  { 
    question: "Do you only work on retainers?",
    answer:"Not at all. While many of our clients prefer long-term retainers because they allow strategy and execution to compound over time, we’re flexible. We also work on sprints, consultancy projects, and campaign-based work if that’s what your brand needs. Retainers are great if you want a dedicated team and consistent growth, sprints are perfect for testing, and consultancy works best when you want us to sharpen your in-house team’s output. We’ll help you decide what makes the most sense for your stage."
  },
  {
    question: "How soon can I expect results?",
    answer:"This depends on the service. With performance marketing, you can often see signals within weeks such as lower CPMs, higher CTRs, and leads starting to flow in. With content and brand recall, the growth is steadier and compounds over time. That’s why we recommend a 3–6 month horizon: it gives the system time to build consistency, trust, and recall. The short answer: quick wins in weeks, sustainable brand lift in months."
  },
  {
    question: "Is there a fixed investment?",
    answer:"Not exactly. Our retainers usually range from ₹1,15,000 – ₹4,50,000 per month, billed every 30 days. This fee covers your core services such as strategy, content creation, distribution, ads, and insights. Bigger brands can also discuss longer credit periods if needed. Ad spend, however, is always tied to your revenue and goals. Some brands start lean with a few lakhs a month, while others scale aggressively with higher budgets. We’ll guide you on the right investment, enough to make an impact without stretching you unnecessarily."
  },
  {
    question: "Can you help me even if I’m not ready to collaborate?",
    answer: "Absolutely. We believe in earning goodwill before money. That’s why we’re creating free resources, playbooks, and webinars (coming soon!) to help founders, creators, and professionals who may not be ready to jump into a retainer yet. And if we’re not the right fit for your project at this stage, we’ll connect you with someone who is. Either way, you’ll walk away with clarity, direction, and value."
  },
  {
    question: "Can you work with my in-house team?",
    answer: "Yes, and we love doing it. Many of our clients already have in-house marketing managers or junior teams, and we plug in as the strategic and execution partner. That might mean we handle content creation and ads while your team manages community or PR, or we build systems and train your team to scale them. We’re here to collaborate, not compete. Think of us as an extension of your in-house department with more firepower."
  }
];

const FAQItem = ({ faq, index, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-800 last:border-b-0">
      <button
        onClick={() => onToggle(index)}
        className="w-full py-6 px-6 text-left flex justify-between items-center hover:bg-gray-900/50 transition-colors duration-300 group"
      >
        <h3 className="text-lg md:text-xl font-medium text-white pr-8 group-hover:text-blue-400 transition-colors duration-300">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <span className="text-2xl font-light text-white group-hover:text-blue-400 transition-colors duration-300">
            +
          </span>
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pb-6">
          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            {faq.answer}
          </p>
        </div>
      </div>
    </div> 
  );
};

const Testimonials = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="testimonials" className="flex-center section-padding bg-black">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Frequently Asked Questions"
        />

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gray-950/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openItems[index]}
                onToggle={toggleItem}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-6">
            Still have questions? We're here to help!
          </p>
          <button className="relative inline-flex h-14 md:h-16 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-black transition-all duration-300 hover:scale-105">
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_25%,#FF6B6B_50%,#4ECDC4_75%,#E2CBFF_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-8 py-1 text-base md:text-lg font-semibold text-white backdrop-blur-3xl transition-all duration-300 hover:bg-gray-900">
                  <span className="mr-2">Book a call</span>
                  <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;