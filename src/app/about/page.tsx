"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Menu,
  Users,
  Briefcase,
  Lightbulb,
  Heart,
  MessageCircle,
  Award,
} from "lucide-react";

interface OurStoryProps { }

const OurStory: React.FC<OurStoryProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-near-black text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Our Story: Building the Future of Messaging
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8">
              Text Back was founded with a simple mission: to create a messaging platform that prioritizes efficiency, security, and user experience. Frustrated with the limitations of existing apps, our team of passionate engineers and designers set out to build a better solution for Gen Z.
            </p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8">
              We believe that communication should be seamless and secure. That's why we've invested heavily in encryption technology and user-friendly design. Our goal is to empower users to connect with each other in a safe and productive environment.
            </p>
            <Link href="/careers" className="inline-block bg-electric-blue hover:bg-cyber-green text-white font-semibold py-3 px-6 rounded-2xl transition-colors duration-300">
              Join Our Mission <ArrowRight size={20} className="inline-block ml-2" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
              <Image
                src="https://placehold.co/600x400/0a0a0a/FFFFFF/png?text=Our+Story"
                alt="Our Story"
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface TeamProps { }

const Team: React.FC<TeamProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const teamMembers = [
    { name: "Alice Johnson", role: "CEO", image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Alice" },
    { name: "Bob Williams", role: "CTO", image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Bob" },
    { name: "Charlie Brown", role: "Lead Designer", image: "https://placehold.co/200x200/0a0a0a/FFFFFF/png?text=Charlie" },
  ];

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-purple-700 to-blue-700 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)]">
            A group of passionate individuals dedicated to building the best messaging experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
            >
              <div className="overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface ValuesProps { }

const Values: React.FC<ValuesProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    { icon: Lightbulb, title: "Innovation", description: "We constantly seek new and creative solutions to improve our platform." },
    { icon: Shield, title: "Security", description: "We prioritize the safety and privacy of our users' data." },
    { icon: Heart, title: "User Experience", description: "We are committed to providing a seamless and intuitive messaging experience." },
  ];

  return (
    <section className="py-24 md:py-32 bg-near-black text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)]">
            Guiding principles that shape our work and culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: index * 0.2 }}
            >
              <value.icon size={48} className="text-electric-blue mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface CareersProps { }

const Careers: React.FC<CareersProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-gradient-to-br from-blue-800 to-purple-800 text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Join Our Team
            </h2>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8">
              We're always looking for talented and passionate individuals to join our team. If you're excited about building the future of messaging, we encourage you to apply.
            </p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] mb-8">
              We offer a dynamic and collaborative work environment, competitive salaries, and opportunities for professional growth.
            </p>
            <Link href="/careers" className="inline-block bg-electric-blue hover:bg-cyber-green text-white font-semibold py-3 px-6 rounded-2xl transition-colors duration-300">
              View Open Positions <ArrowRight size={20} className="inline-block ml-2" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}>
              <Image
                src="https://placehold.co/600x400/0a0a0a/FFFFFF/png?text=Careers"
                alt="Careers"
                width={600}
                height={400}
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ImpactProps { }

const Impact: React.FC<ImpactProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 bg-near-black text-white">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(1.75rem,5vw,3.5rem)] font-bold leading-tight mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-[clamp(1rem,2vw,1.25rem)]">
            Making a difference in the way people connect.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <Users size={48} className="text-electric-blue mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Millions of Users</h3>
            <p className="text-gray-300">Connecting people around the world.</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <MessageCircle size={48} className="text-electric-blue mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Billions of Messages</h3>
            <p className="text-gray-300">Facilitating seamless communication.</p>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
          >
            <Award size={48} className="text-electric-blue mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Award-Winning Platform</h3>
            <p className="text-gray-300">Recognized for innovation and user experience.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <section className="relative h-[calc(100vh-80px)] bg-near-black text-white overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080/0a0a0a/00FFCC/png?text=Hero"
        alt="Hero background"
        fill
        className="object-cover absolute z-0"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-orange-500/20 blur-3xl" />
      <div className="absolute inset-0 opacity-5 mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] tracking-tight mb-6 bg-gradient-to-r from-electric-blue via-cyber-green to-pink-500 bg-clip-text text-transparent">
            About Text Back
          </h1>
          <p className="text-[clamp(1.25rem,3vw,1.75rem)] mb-8">
            Learn more about our mission, team, and values.
          </p>
          <Link href="#our-story" className="inline-block bg-electric-blue hover:bg-cyber-green text-white font-semibold py-4 px-8 rounded-2xl transition-colors duration-300">
            Explore <ArrowRight size={24} className="inline-block ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const Page = () => {
  return (
    <div className="bg-near-black">
      <Hero />
      <OurStory />
      <Team />
      <Values />
      <Careers />
      <Impact />
    </div>
  );
};

export default Page;