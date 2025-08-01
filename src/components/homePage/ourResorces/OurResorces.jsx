"use client";
import Image from "next/image";
import { useState } from "react";

export default function OurResorces() {
  const [activeTab, setActiveTab] = useState("Creative Writing");

  const tabs = [
    "Creative Writing",
    "Software Engineers",
    "AI Engineers",
    "Stem Experts",
  ];

  // Content for each tab
  const tabContents = {
    "Creative Writing": {
      title: "Creative Writers",
      description:
        "Our creative writers possess a deep understanding of language nuances, enabling them to craft clear and consistent annotations, especially for tasks involving sentiment analysis, text summarization, or chatbot development.",
      image: "/ourResorces.png",
    },
    "Software Engineers": {
      title: "Software Engineers",
      description:
        "100+ Experienced Engineers: Leverage our team of highly skilled software engineers, trained specifically for LLM data preparation and training of models like GPT-3, LaMDA 2, and GPT-4.",
      image: "/ourResorces.png",
    },
    "AI Engineers": {
      title: "AI Engineers",
      description:
        "AI engineers bridge the gap between data and your LLM. Our team possess a deep understanding of LLM training needs and can tailor the annotation process to generate data that specifically addresses your AI model's requirements.",
      image: "/ourResorces.png",
    },
    "Stem Experts": {
      title: "STEM Experts",
      description:
        "Our team also includes scientists and engineers with specialised knowledge in relevant fields like biology, physics, or chemistry. This ensures accurate labelling of scientific concepts and data points within your LLM training data",
      image: "/ourResorces.png",
    },
  };

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h4 className="text-pink-500 font-semibold mb-2">OUR RESOURCES</h4>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Resources We Have</h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 md:gap-6 relative">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base rounded-md font-medium transition-colors duration-200 ${
                activeTab === tab
                  ? "bg-pink-500 text-white shadow"
                  : "text-gray-700 hover:bg-pink-100 hover:text-pink-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="mt-8 sm:mt-12 bg-white mx-4 sm:mx-auto sm:max-w-5xl p-6 sm:p-10 shadow rounded border-t-4 border-pink-500 flex flex-col md:flex-row items-center gap-6 sm:gap-10">
        {/* Left Text */}
        <div className="flex-1">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
            {tabContents[activeTab].title}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            {tabContents[activeTab].description}
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 w-full max-w-md">
          <Image
            src={tabContents[activeTab].image}
            width={500}
            height={400}
            alt={`${tabContents[activeTab].title} Illustration`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}