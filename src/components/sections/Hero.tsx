'use client';

import * as React from 'react';
import Image from 'next/image';
import Link from '@/components/Link';
import { AnimatePresence, motion } from 'framer-motion';

import { Box, Button, Container, Stack, Typography } from '@mui/material';

const slides = [
  // Forest / lake vibe (similar feel to the reference)
  'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=2400&q=70',
  // Hike ridge
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=70',
  // Cycling trail
  'https://images.unsplash.com/photo-1520975958225-4a5dfc59c0b7?auto=format&fit=crop&w=2400&q=70',
];

const MotionBox = motion(Box);

export default function Hero() {
  const [idx, setIdx] = React.useState(0);

  React.useEffect(() => {
    const t = window.setInterval(() => setIdx((v) => (v + 1) % slides.length), 8000);
    return () => window.clearInterval(t);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '92vh', md: '96vh' },
        display: 'grid',
        placeItems: 'center',
        // Pull under the sticky navbar so the image sits behind it (like your reference)
        mt: { xs: '-64px', md: '-74px' },
        pt: { xs: '64px', md: '74px' },
      }}
    >
      {/* Background slider */}
      <Box sx={{ position: 'absolute', inset: 0 }} aria-hidden>
        <AnimatePresence mode="wait">
          <MotionBox
            key={idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            sx={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={slides[idx]}
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover' }}
            />
          </MotionBox>
        </AnimatePresence>

        {/* Dark overlay (same mood as reference) */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.70) 100%)',
          }}
        />
      </Box>

      {/* Right-side slide dots */}
      <Stack
        spacing={1.2}
        sx={{
          position: 'absolute',
          // Mobile: keep dots away from text (bottom-center + horizontal)
          left: { xs: '50%', sm: 'auto' },
          right: { xs: 'auto', sm: 14, md: 24 },
          bottom: { xs: 160, sm: 'auto' },
          top: { xs: 'auto', sm: '50%' },
          transform: { xs: 'translateX(-50%)', sm: 'translateY(-50%)' },
          flexDirection: { xs: 'row', sm: 'column' },
          zIndex: 3,
        }}
        aria-label="Hero slides"
      >
        {slides.map((_, i) => (
          <Box
            key={i}
            onClick={() => setIdx(i)}
            role="button"
            tabIndex={0}
            sx={{
              width: { xs: 8, sm: 10 },
              height: { xs: 8, sm: 10 },
              borderRadius: 999,
              border: '1px solid rgba(255,255,255,0.85)',
              bgcolor: i === idx ? 'rgba(255,255,255,0.85)' : 'transparent',
              cursor: 'pointer',
              outline: 'none',
              opacity: 0.95,
              '&:hover': { transform: 'scale(1.08)' },
              transition: 'transform 120ms ease',
            }}
          />
        ))}
      </Stack>

      {/* Center content */}
      <Container sx={{ position: 'relative', zIndex: 2 }}>
        <Stack
          spacing={2}
          alignItems="center"
          textAlign="center"
          sx={{
            maxWidth: 980,
            mx: 'auto',
            pb: { xs: 8, md: 10 },
          }}
        >
          <MotionBox
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Typography
              component="h1"
              sx={{
                fontFamily: 'var(--font-oswald), Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 700,
                lineHeight: 1.05,
                color: 'white',
                textShadow: '0 10px 30px rgba(0,0,0,0.55)',
                // Slightly smaller on mobile so it doesn't feel cramped
                fontSize: { xs: 30, sm: 44, md: 68 },
              }}
            >
              Sri Lanka’s adventure base
              <br />
              for camping, hikes & cycle rides
            </Typography>
          </MotionBox>

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: { xs: 15, md: 18 },
              textShadow: '0 8px 22px rgba(0,0,0,0.45)',
              maxWidth: 760,
            }}
          >
            Plan, ride, trek, and camp — guided experiences designed for your group and delivered at trusted routes
            or your preferred location.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} sx={{ pt: 1 }}>
            <Button
              component={Link}
              href="/adventures"
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderColor: 'rgba(255,255,255,0.70)',
                color: 'white',
                px: 3,
                py: 1.2,
                minWidth: { xs: 240, sm: 'auto' },
                fontFamily: 'var(--font-oswald), Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                '&:hover': { borderColor: 'rgba(255,255,255,0.95)', bgcolor: 'rgba(255,255,255,0.10)' },
              }}
            >
              Explore services
            </Button>
            <Button
              component={Link}
              href="/contact"
              variant="outlined"
              sx={{
                borderRadius: 0,
                borderColor: 'rgba(255,255,255,0.70)',
                color: 'white',
                px: 3,
                py: 1.2,
                minWidth: { xs: 240, sm: 'auto' },
                fontFamily: 'var(--font-oswald), Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                '&:hover': { borderColor: 'rgba(255,255,255,0.95)', bgcolor: 'rgba(255,255,255,0.10)' },
              }}
            >
              Request a quote
            </Button>
          </Stack>
        </Stack>
      </Container>

      {/* Bottom wave */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: -1,
          height: { xs: 70, md: 120 },
          zIndex: 2,
          pointerEvents: 'none',
        }}
      >
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
        >
          <path
            fill="#467E30"
            d="M0,256L60,250.7C120,245,240,235,360,218.7C480,203,600,181,720,186.7C840,192,960,224,1080,229.3C1200,235,1320,213,1380,202.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          />
        </svg>
      </Box>
    </Box>
  );
}
