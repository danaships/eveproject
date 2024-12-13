"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { gradients } from "@/lib/styles/gradients";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    avatarFallback: string;
  };
  index: number;
}

export function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Card className={cn("h-full", gradients.overlay.card)}>
        <CardContent className="pt-6">
          <div className="relative">
            <span className="text-6xl text-violet-500/20 absolute -top-4 -left-4">"</span>
            <p className="relative z-10 text-muted-foreground">{testimonial.quote}</p>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-4 pt-4">
          <Avatar>
            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
            <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{testimonial.author}</p>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}