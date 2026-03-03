"use client";

import { Box } from "@mui/material";
import { motion } from "framer-motion";

const MotionBox = motion(Box as any);

export default function Reveal({ children, delay = 0, ...rest }: any) {
  return (
    <MotionBox
      {...rest}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionBox>
  );
}