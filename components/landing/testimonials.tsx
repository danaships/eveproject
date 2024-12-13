"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SectionBackground } from "@/components/ui/section-background";
import { gradients } from "@/lib/styles/gradients";
import { cn } from "@/lib/utils";
import { TestimonialCard } from "./testimonials/testimonial-card";

const testimonials = [
  {
    quote: "This platform has revolutionized how we manage our corporation. The automation tools alone have saved us countless hours.",
    author: "Sarah Blake",
    role: "Alliance Leader, Brave Collective",
    avatar: "https://images.evetech.net/corporations/98388312/logo?size=64",
    avatarFallback: "SB"
  },
  {
    quote: "The best investment we've made for our corporation. The security features and asset tracking are absolutely essential.",
    author: "Marcus Chen",
    role: "CEO, Pandemic Horde",
    avatar: "https://images.evetech.net/corporations/98640150/logo?size=64",
    avatarFallback: "MC"
  },
  {
    quote: "Finally, a management platform that understands the complexities of running a large alliance. Incredible support team too!",
    author: "Elena Rodriguez",
    role: "Director, Goonswarm Federation",
    avatar: "https://images.evetech.net/corporations/98134538/logo?size=64",
    avatarFallback: "ER"
  }
];

export function Testimonials() {
  return (
    <SectionBackground gradient="secondary" className="py-32">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-3xl font-bold mb-4", gradients.linear.text)}>
            Trusted by Top Alliances
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of successful corporations who have transformed their operations with our platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={i} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </SectionBackground>
  );
}