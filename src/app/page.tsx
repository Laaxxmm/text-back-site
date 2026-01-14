"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Mail,
  User,
  Users,
  Shield,
  MessageCircle,
  Zap,
  ArrowRight,
  Star,
} from "lucide-react";

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

function HeroSection({ title, subtitle }: HeroSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative h-[calc(100vh-80px)] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080/0a0a0a/00E5FF/png?text=Hero"
          alt="Hero background"
          fill
          className="object-cover"
          style={{ y }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,90,254,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(61,90,254,0.03)_1px,transparent_1px)] bg-[length:60px_60px]" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <motion.h1
            className="text-white text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-gray-300 text-[clamp(1rem,2vw,1.25rem)] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Get Started
              <ArrowRight size={20} className="ml-2" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 30, }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-500/10 to-orange-500/10 blur-xl" />
      <div className="relative z-10">
        <div className="text-blue-400 mb-2">
          <Icon size={32} />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
}

function FeaturesGrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-4">
            Premium Features
          </h2>
          <p className="text-gray-400 text-[clamp(1rem,2vw,1.25rem)]">
            Experience the power of Text back with these exclusive features.
          </p>
        </div>

        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          <FeatureCard
            title="End-to-End Encryption"
            description="Keep your conversations private and secure with advanced encryption technology."
            icon={Shield}
          />
          <FeatureCard
            title="Instant Messaging"
            description="Send and receive messages instantly with our optimized network."
            icon={MessageCircle}
          />
          <FeatureCard
            title="Lightning Fast"
            description="Experience unparalleled speed and efficiency with our cutting-edge technology."
            icon={Zap}
          />
        </motion.div>
      </div>
    </section>
  );
}

interface SecuritySectionProps {
  title: string;
  description: string;
}

function SecuritySection({ title, description }: SecuritySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <motion.div
            ref={ref}
            className="overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isInView ? 1 : 0,
              x: isInView ? 0 : -50, }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src="https://placehold.co/600x400/0a0a0a/3B82F6/png?text=Security"
              alt="Security"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              x: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-white text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-4">
              {title}
            </h2>
            <p className="text-gray-400 text-[clamp(1rem,2vw,1.25rem)]">{description}</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300">
                <Check size={20} className="text-green-500 mr-2" />
                Advanced Encryption Standard (AES)
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="text-green-500 mr-2" />
                Two-Factor Authentication (2FA)
              </li>
              <li className="flex items-center text-gray-300">
                <Check size={20} className="text-green-500 mr-2" />
                Regular Security Audits
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
  image: string;
}

function Testimonial({ name, title, quote, image }: TestimonialProps) {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 w-96 flex-shrink-0">
      <div className="flex items-center mb-4">
        <Image
          src={image}
          alt={name}
          width={60}
          height={60}
          className="rounded-full mr-4"
        />
        <div>
          <h4 className="text-white font-semibold">{name}</h4>
          <p className="text-gray-400 text-sm">{title}</p>
        </div>
      </div>
      <p className="text-gray-300 italic">{quote}</p>
    </div>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alice Johnson",
      title: "Software Engineer",
      quote:
        "Text back has revolutionized the way I communicate with my team. It's fast, secure, and incredibly user-friendly.",
      image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Alice",
    },
    {
      name: "Bob Williams",
      title: "Product Manager",
      quote:
        "I love the simplicity and efficiency of Text back. It's the perfect messaging app for Gen Z professionals.",
      image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Bob",
    },
    {
      name: "Charlie Brown",
      title: "Marketing Specialist",
      quote:
        "The end-to-end encryption gives me peace of mind knowing that my conversations are always private and secure.",
      image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Charlie",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-white text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-4">
            What Our Users Say
          </h2>
          <p className="text-gray-400 text-[clamp(1rem,2vw,1.25rem)]">
            Read testimonials from satisfied Text back users.
          </p>
        </div>
        <motion.div
          className="flex overflow-x-auto gap-8 py-4"
          initial={{ x: 0 }}
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 30,
            repeat: Infinity,
            ease: "linear", }}
        >
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.h2
            className="text-white text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight tracking-tight mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            className="text-gray-400 text-[clamp(1rem,2vw,1.25rem)] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            Download Text back today and experience the future of messaging.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0,
              y: isInView ? 0 : 50, }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
            >
              Download Now
              <ArrowRight size={20} className="ml-2" strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div className="bg-black text-white font-inter">
      <HeroSection
        title="Text back: The Future of Messaging"
        subtitle="Experience instant, secure, and private communication with our innovative messaging app."
      />
      <FeaturesGrid />
      <SecuritySection
        title="Uncompromising Security"
        description="Your privacy is our top priority. We use advanced security measures to protect your conversations."
      />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}