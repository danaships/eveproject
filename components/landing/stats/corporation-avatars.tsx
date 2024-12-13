"use client";

import { motion } from "framer-motion";
import { FEATURED_CORPORATIONS } from "@/lib/constants/featured-corps";
import { cn } from "@/lib/utils";
import { gradients } from "@/lib/styles/gradients";

export function CorporationAvatars() {
  return (
    <div className="flex -space-x-4">
      {FEATURED_CORPORATIONS.slice(0, 4).map((corp, i) => (
        <motion.div
          key={corp.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="relative first:ml-0"
        >
          <div 
            className="relative h-16 w-16 rounded-full ring-4 ring-background transform hover:scale-110 transition-transform duration-200 hover:z-10"
          >
            <div 
              className="absolute inset-0 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.evetech.net/corporations/${corp.id}/logo?size=128)`,
              }}
            />
            <div className={cn("absolute inset-0 rounded-full opacity-40", gradients.overlay.card)} />
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative flex items-center justify-center h-16 w-16 rounded-full bg-violet-500/10 ring-4 ring-background hover:scale-110 transition-transform duration-200"
      >
        <span className="text-sm font-semibold text-violet-400">+1.9k</span>
      </motion.div>
    </div>
  );
}