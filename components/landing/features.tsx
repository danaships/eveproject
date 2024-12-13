"use client";

import { motion } from "framer-motion";
import { Shield, Users, Activity, Globe, Lock, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "EVE SSO authentication and role-based access control for your entire organization"
  },
  {
    icon: Users,
    title: "Multi-Character Support",
    description: "Manage multiple characters and corporations from a single dashboard"
  },
  {
    icon: Activity,
    title: "Real-time Analytics",
    description: "Live market data, fleet tracking, and performance metrics at your fingertips"
  },
  {
    icon: Globe,
    title: "Alliance Tools",
    description: "Coordinate operations across multiple corporations with ease"
  },
  {
    icon: Lock,
    title: "Asset Security",
    description: "Track and secure your corporation's assets with advanced monitoring"
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Never miss important events with real-time notifications and alerts"
  }
];

export function Features() {
  return (
    <section className="relative w-full py-32 overflow-hidden">
      <div className="absolute inset-0 hero-gradient opacity-50" />
      
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4 gradient-text"
          >
            Everything You Need to Succeed
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Built by EVE players for EVE players, our platform provides all the tools you need to manage your corporation effectively.
          </motion.p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="feature-card p-6 rounded-xl"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-violet-500/10">
                  <Icon className="h-6 w-6 text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}