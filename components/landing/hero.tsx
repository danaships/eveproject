"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Stats } from "./stats/stats";
import { SectionBackground } from "@/components/ui/section-background";
import { gradients } from "@/lib/styles/gradients";

export function Hero() {
  return (
    <SectionBackground className="min-h-[calc(100vh-3.5rem)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="rounded-full bg-violet-500/10 px-4 py-1.5 mb-8"
          >
            <span className="text-sm font-medium text-violet-400">
              New Market Analysis Tools Available
            </span>
          </motion.div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl max-w-4xl mb-6">
            Manage your{" "}
            <span className={gradients.linear.text}>EVE Empire</span>{" "}
            with precision
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground mb-12">
            The most comprehensive management platform for EVE Online corporations and alliances.
            Track assets, manage fleets, and grow your empire with enterprise-grade tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Button size="lg" className="bg-violet-600 hover:bg-violet-700">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-violet-800">
              View Demo
            </Button>
          </div>

          <Stats />
        </motion.div>
      </div>
    </SectionBackground>
  );
}