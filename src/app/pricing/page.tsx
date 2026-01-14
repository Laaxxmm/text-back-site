"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Menu, X, Users, Shield, MessageCircle, Briefcase } from "lucide-react";

interface FreePlanProps {
  title: string;
  description: string;
  features: string[];
}

const FreePlan: React.FC<FreePlanProps> = ({ title, description, features }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-200">
            <Check size={20} className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

interface PremiumPlanProps {
  title: string;
  price: number;
  description: string;
  features: string[];
}

const PremiumPlan: React.FC<PremiumPlanProps> = ({ title, price, description, features }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-purple-700 to-blue-700 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10 text-white"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h3 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-200 mb-6">{description}</p>
      <div className="text-4xl font-bold mb-4">${price}/month</div>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check size={20} className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

interface EnterprisePlanProps {
  title: string;
  description: string;
  features: string[];
}

const EnterprisePlan: React.FC<EnterprisePlanProps> = ({ title, description, features }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 lg:p-10"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <h3 className="text-xl md:text-2xl font-semibold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-200">
            <Check size={20} className="text-green-500 mr-2" />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

interface ComparisonTableProps { }

const ComparisonTable: React.FC<ComparisonTableProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <table className="min-w-full divide-y divide-gray-700 rounded-2xl overflow-hidden">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Feature</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Free</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Premium</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider">Enterprise</th>
          </tr>
        </thead>
        <tbody className="bg-gray-900 divide-y divide-gray-700">
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Messages per month</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">100</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">1,000</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">Unlimited</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Team members</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">1</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">5</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200">Unlimited</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Advanced security</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><X size={20} className="text-red-500 mx-auto" /></td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><Check size={20} className="text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><Check size={20} className="text-green-500 mx-auto" /></td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">Priority support</td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><X size={20} className="text-red-500 mx-auto" /></td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><Check size={20} className="text-green-500 mx-auto" /></td>
            <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-200"><Check size={20} className="text-green-500 mx-auto" /></td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

interface FAQProps { }

const FAQ: React.FC<FAQProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "What is Text Back?",
      answer: "Text Back is a premium messaging app designed for efficient and secure communication, especially for Gen Z."
    },
    {
      question: "How secure is Text Back?",
      answer: "We use end-to-end encryption and advanced security protocols to ensure your messages are always private."
    },
    {
      question: "Can I use Text Back for business?",
      answer: "Yes, our Enterprise plan is tailored for business use with features like team collaboration and priority support."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards and PayPal."
    }
  ];

  return (
    <motion.div
      ref={ref}
      className="space-y-4"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      {faqData.map((item, index) => (
        <div key={index} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <button
            className="flex items-center justify-between w-full p-4 md:p-5 text-left text-gray-200 hover:text-white transition-colors duration-300"
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <span className="font-medium">{item.question}</span>
            <ArrowRight size={20} className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-90 text-blue-500' : ''}`} />
          </button>
          <div className={`p-4 md:p-5 text-gray-300 ${activeIndex === index ? 'block' : 'hidden'}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </motion.div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-inter">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <section className="mb-16">
          <div className="text-center">
            <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Transparent Pricing
            </h1>
            <p className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)]">
              Choose the plan that fits your needs. No hidden fees.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <FreePlan
            title="Free"
            description="Perfect for individuals getting started."
            features={[
              "Up to 100 messages per month",
              "1 team member",
              "Basic security features",
            ]}
          />
          <PremiumPlan
            title="Premium"
            price={9.99}
            description="Ideal for small teams and growing businesses."
            features={[
              "Up to 1,000 messages per month",
              "Up to 5 team members",
              "Advanced security features",
              "Priority support",
            ]}
          />
          <EnterprisePlan
            title="Enterprise"
            description="For large organizations needing custom solutions."
            features={[
              "Unlimited messages",
              "Unlimited team members",
              "Advanced security features",
              "Priority support",
              "Dedicated account manager",
            ]}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-8 text-center">
            Compare Plans
          </h2>
          <ComparisonTable />
        </section>

        <section>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </section>
      </div>
    </div>
  );
};

export default Page;