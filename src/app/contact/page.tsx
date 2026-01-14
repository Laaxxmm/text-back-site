"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Mail,
  User,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Share2,
} from "lucide-react";

interface ContactFormProps { }

const ContactForm: React.FC<ContactFormProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted", { name, email, message });
  };

  return (
    <motion.div
      className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 md:p-12"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
        Send us a message
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-gray-800 text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Message
          </button>
        </div>
      </form>
    </motion.div>
  );
};

interface ContactInfoProps { }

const ContactInfo: React.FC<ContactInfoProps> = () => {
  return (
    <motion.div
      className="space-y-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Email</h3>
        <div className="flex items-center space-x-2 text-gray-300">
          <Mail size={20} className="text-blue-500" />
          <a href="mailto:support@textback.com" className="hover:text-blue-400 transition-colors">
            support@textback.com
          </a>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Phone</h3>
        <div className="flex items-center space-x-2 text-gray-300">
          <Phone size={20} className="text-blue-500" />
          <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">
            +1 (555) 123-4567
          </a>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Address</h3>
        <div className="flex items-center space-x-2 text-gray-300">
          <MapPin size={20} className="text-blue-500" />
          <p>
            123 Tech Street
            <br />
            Innovation City, CA 91234
          </p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
        <h3 className="text-lg font-semibold mb-2 text-white">Social Media</h3>
        <div className="flex items-center space-x-4">
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Share2 size={20} className="text-gray-300" />
          </a>
          <a href="#" className="hover:text-blue-400 transition-colors">
            <Globe size={20} className="text-gray-300" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

interface ContactHeroProps { }

const ContactHero: React.FC<ContactHeroProps> = () => {
  return (
    <div className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight text-white mb-4">
          Contact Us
        </h1>
        <p className="text-[clamp(1rem,2vw,1.25rem)] text-gray-300 max-w-3xl">
          We're here to help! Reach out to us with any questions, feedback, or inquiries.
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <ContactHero />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32" ref={container}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Page;