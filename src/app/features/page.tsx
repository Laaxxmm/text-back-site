"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, User, Shield, Lock, MessageCircle, Zap, Settings, Layout, Smartphone, Globe, ArrowRight } from "lucide-react";

interface AdvancedMessagingProps { }

const AdvancedMessaging: React.FC<AdvancedMessagingProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Advanced Messaging for Seamless Communication
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Experience messaging like never before with Text Back. Our advanced features ensure efficient, secure, and engaging conversations.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Real-time message delivery</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Rich media sharing (images, videos, files)</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Group chats with up to 500 members</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Message reactions and mentions</span>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/3D5AFE/png?text=Advanced+Messaging"
              alt="Advanced Messaging"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface PrivacyFeaturesProps { }

const PrivacyFeatures: React.FC<PrivacyFeaturesProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/10B981/png?text=Privacy+Features"
              alt="Privacy Features"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Uncompromising Privacy and Security
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Your privacy is our top priority. Text Back employs state-of-the-art security measures to protect your data and conversations.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Shield size={20} className="text-blue-500 mr-2" />
              <span className="text-gray-300">End-to-end encryption for all messages</span>
            </li>
            <li className="flex items-center">
              <Lock size={20} className="text-blue-500 mr-2" />
              <span className="text-gray-300">Two-factor authentication for enhanced security</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Self-destructing messages for added privacy</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Anonymous usage - no phone number required</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface CustomizationProps { }

const Customization: React.FC<CustomizationProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Personalize Your Experience
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Make Text Back your own with a wide range of customization options. Tailor the app to fit your unique style and preferences.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Settings size={20} className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Customizable themes and color schemes</span>
            </li>
            <li className="flex items-center">
              <Layout size={20} className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Adjustable font sizes and styles</span>
            </li>
            <li className="flex items-center">
              <MessageCircle size={20} className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Personalized notification sounds</span>
            </li>
            <li className="flex items-center">
              <Zap size={20} className="text-yellow-500 mr-2" />
              <span className="text-gray-300">Custom emoji packs</span>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/FF4081/png?text=Customization"
              alt="Customization"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface IntegrationProps { }

const Integration: React.FC<IntegrationProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/00E5FF/png?text=Integration"
              alt="Integration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Seamless Integration with Your Favorite Apps
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Stay connected and productive with Text Back's integration capabilities. Connect with the tools you use every day for a streamlined workflow.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Smartphone size={20} className="text-cyan-500 mr-2" />
              <span className="text-gray-300">Integration with calendar apps (Google Calendar, Outlook Calendar)</span>
            </li>
            <li className="flex items-center">
              <Globe size={20} className="text-cyan-500 mr-2" />
              <span className="text-gray-300">Integration with social media platforms (Twitter, Instagram)</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Integration with task management tools (Trello, Asana)</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">API access for custom integrations</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

interface AccessibilityProps { }

const Accessibility: React.FC<AccessibilityProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="py-24 md:py-32 container"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Accessibility for Everyone
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Text Back is committed to providing an inclusive experience for all users. Our accessibility features ensure that everyone can stay connected.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Screen reader compatibility</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Keyboard navigation support</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">Adjustable text contrast</span>
            </li>
            <li className="flex items-center">
              <Check size={20} className="text-green-500 mr-2" />
              <span className="text-gray-300">VoiceOver support</span>
            </li>
          </ul>
        </div>
        <div className="overflow-hidden rounded-2xl shadow-2xl shadow-black/10">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
            <Image
              src="https://placehold.co/600x400/0a0a0a/FFFFFF/png?text=Accessibility"
              alt="Accessibility"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=Hero"
        alt="Hero background"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="container relative z-10 text-center">
        <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-bold leading-[0.9] tracking-tight mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
          Experience the Future of Messaging
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Text Back is the next-generation messaging app designed for Gen Z. Enjoy seamless communication, uncompromising privacy, and unparalleled customization.
        </p>
        <Link href="#" className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
          Get Started <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Hero />
      <AdvancedMessaging />
      <PrivacyFeatures />
      <Customization />
      <Integration />
      <Accessibility />
    </div>
  );
};

export default Page;