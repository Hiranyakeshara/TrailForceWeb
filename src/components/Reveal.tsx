'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Box, { BoxProps } from '@mui/material/Box';

const MotionBox = motion(Box);

export default function Reveal(props: BoxProps & { delay?: number }) {
  const { children, delay = 0, ...rest } = props;
  return (
    <MotionBox
      {...rest}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionBox>
  );
}
