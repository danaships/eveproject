"use client";

import { motion } from "framer-motion";
import { CorporationAvatars } from "./corporation-avatars";
import { Counter } from "./counter";
import { gradients } from "@/lib/styles/gradients";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative w-full max-w-2xl mx-auto"
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        <CorporationAvatars />
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <h3 className={cn("text-4xl font-bold mb-2", gradients.linear.text)}>
            <Counter end={2000} suffix="+" /> 
          </h3>
          <div className="flex items-center justify-center space-x-2">
            <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
            <p className="text-muted-foreground">Active Corporations</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}