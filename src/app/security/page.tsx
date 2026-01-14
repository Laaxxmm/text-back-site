"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Shield, Lock, Eye, FileText, ArrowRight, ResponsibleDisclosure } from "lucide-react";

interface HeroProps {
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-br from-purple-900/40 to-blue-900/40 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px] z-0" />
      <Image
        src="https://placehold.co/1920x1080/0F172A/6366F1/png?text=Security+Hero"
        alt="Hero background"
        fill
        className="object-cover absolute inset-0 -z-10"
      />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold text-white leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 max-w-3xl">{subtitle}</p>
      </div>
    </section>
  );
};

interface SecuritySectionProps {
  title: string;
  description: string;
  icon: React.FC<any>;
}

const SecuritySection: React.FC<SecuritySectionProps> = ({ title, description, icon: Icon }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className="py-16 md:py-24"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400">{description}</p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-blue-900/50 flex items-center justify-center">
              <Icon size={64} className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface ComplianceSectionProps {
  title: string;
  description: string;
}

const ComplianceSection: React.FC<ComplianceSectionProps> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-900/70 to-black/70"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4 text-center">
          {title}
        </h2>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400 text-center">{description}</p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">ISO 27001</h3>
            <p className="text-sm text-gray-500">Information Security Management</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">GDPR</h3>
            <p className="text-sm text-gray-500">Data Protection</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-white/10">
            <h3 className="text-xl font-semibold text-gray-300 mb-2">CCPA</h3>
            <p className="text-sm text-gray-500">Consumer Privacy</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

interface ResponsibleDisclosureProps {
  title: string;
  description: string;
}

const ResponsibleDisclosure: React.FC<ResponsibleDisclosureProps> = ({ title, description }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.section
      ref={ref}
      className="py-16 md:py-24"
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold text-white leading-tight mb-4">
              {title}
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-400">{description}</p>
          </div>
          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-full bg-blue-900/50 flex items-center justify-center">
              <ResponsibleDisclosure size={64} className="text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-inter">
      <Hero
        title="Unwavering Security for Your Peace of Mind"
        subtitle="We prioritize your privacy and security with end-to-end encryption, robust data protection measures, and transparent compliance practices."
      />
      <SecuritySection
        title="End-to-End Encryption"
        description="Your messages are secured with advanced encryption algorithms, ensuring that only you and the recipient can read them. We use industry-standard protocols to protect your data in transit and at rest."
        icon={Lock}
      />
      <SecuritySection
        title="Data Privacy First"
        description="We are committed to protecting your personal information. We do not sell your data to third parties, and we provide you with full control over your privacy settings."
        icon={Shield}
      />
      <SecuritySection
        title="Advanced Security Protocols"
        description="Our app incorporates multiple layers of security, including biometric authentication, two-factor authentication, and regular security audits. We continuously monitor our systems for potential threats and vulnerabilities."
        icon={Eye}
      />
      <ComplianceSection
        title="Compliance and Certifications"
        description="We adhere to the highest industry standards and regulations to ensure the security and privacy of your data. Our compliance certifications demonstrate our commitment to data protection."
      />
      <ResponsibleDisclosure
        title="Responsible Disclosure Program"
        description="We encourage security researchers to report any vulnerabilities they find in our app. Our responsible disclosure program ensures that we address security issues promptly and transparently."
      />
    </div>
  );
};

export default Page;