import React from "react";
import { motion } from "framer-motion";
const Faq = () => {
  const questions = [
    {
      id: 1,
      question:
        "How does Jovent ensure the safety of participants during community events?",
      answer:
        "Jovent encourages organizers to follow safety guidelines and local regulations. Participants can review event details and contact organizers with any concerns.",
    },
    {
      id: 2,
      question:
        "Can I collaborate with other organizations or NGOs through Jovent for a larger impact?",
      answer:
        "Yes, Jovent supports collaboration between organizers and NGOs to coordinate efforts and increase community impact.",
    },
    {
      id: 3,
      question:
        "What makes Jovent different from other volunteering or event platforms?",
      answer:
        "Jovent focuses on local social development with tools for event creation, management, and impact tracking, tailored to Bangladesh’s needs.",
    },
    {
      id: 5,
      question:
        "Does Jovent provide any recognition or certificates for active volunteers?",
      answer:
        "Yes, Jovent offers digital certificates and badges for volunteers based on their participation milestones.",
    },
    {
      id: 6,
      question:
        "Can I suggest new features or improvements for the Jovent platform?",
      answer:
        "Definitely! Users can submit suggestions through the contact form or feedback sections.",
    },
    {
      id: 7,
      question: "How does Jovent ensure the authenticity of the events listed?",
      answer:
        "Events are verified through organizer checks, community reporting, and automated reviews to keep listings trustworthy.",
    },
  ];

  return (
    <div>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className="text-3xl feature-title text-center md:text-4xl font-bold mb-6 text-gray-800 dark:text-white"
      >
        Frequently Asked Questions
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className="text-center max-w-4xl mb-8 mx-auto"
      >
        Find answers to unique questions about how Jovent empowers community
        impact, ensures safety, and supports volunteers and organizers. Still
        curious? Reach out to us anytime!
      </motion.p>
      <div className="mb-10 md:mb-14">
        {questions.map((question, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 , delay : `0.${index}` },
            }}
            key={question.id}
            className="collapse mb-2 collapse-plus bg-main/10 backdrop-blur-2xl dark:bg-gray-800  border border-base-300 dark:border-gray-500"
          >
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title dark:text-white font-semibold">
              {question.question}
            </div>
            <div className="collapse-content dark:text-gray-300 text-sm">
              {question.answer}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
