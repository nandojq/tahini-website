"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
};

export default function HeroSection() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center text-center px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-accent-terra font-semibold">
            INDIE · FUNK · JAZZ
          </span>
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="font-heading text-6xl sm:text-7xl md:text-8xl font-semibold leading-none tracking-tight text-foreground"
        >
          Tahini
          <br />
          <span className="text-accent-terra">Tuesday</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="text-lg sm:text-xl text-foreground/60 max-w-lg"
        >
          The Brussels band that turns lazy
          <br />
          afternoons into danceable nights
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <Link
            href="/shows"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-accent-terra hover:bg-accent-terra/80 text-background"
            )}
          >
            See Upcoming Shows
          </Link>
          <Link
            href="/music"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-accent-warm"
            )}
          >
            Listen Now
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
