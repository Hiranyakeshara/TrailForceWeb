'use client';

import Link from '@/components/Link';
import Image from 'next/image';
import { motion } from 'framer-motion';

import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';

import { stats, heroImages } from '@/components/data';

const MotionBox = motion(Box);

export default function Hero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: { xs: '86vh', md: '92vh' },
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      {/* Background image */}
      <MotionBox
        aria-hidden
        initial={{ scale: 1.06 }}
        animate={{ scale: 1.0 }}
        transition={{ duration: 10, ease: 'easeOut' }}
        sx={{ position: 'absolute', inset: 0 }}
      >
        <Image
          src={heroImages.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'saturate(1.05) contrast(1.05)' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'var(--hero-overlay)' }} />
      </MotionBox>

      <Container sx={{ position: 'relative', py: { xs: 8, md: 10 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Stack spacing={2.2}>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip icon={<PlaceRoundedIcon />} label="Your location, your adventure" />
                <Chip icon={<VerifiedUserRoundedIcon />} label="Safety-first planning" color="secondary" />
              </Stack>

              <MotionBox
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              >
                <Typography variant="h1" sx={{ fontSize: { xs: 40, md: 64 }, lineHeight: 1.0 }}>
                  Adventure experiences,
                  <br />
                  delivered anywhere.
                </Typography>
              </MotionBox>

              <Typography sx={{ opacity: 0.82, fontSize: { xs: 16, md: 18 }, maxWidth: 620 }}>
                Trailforce offers guided <b>camping</b>, <b>hikes</b>, and <b>cycle rides</b> for individuals,
                families, and teams—at trusted routes or your preferred location.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems={{ xs: 'stretch', sm: 'center' }}>
                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  size="large"
                  endIcon={<NorthEastRoundedIcon />}
                >
                  Plan my adventure
                </Button>
                <Button component={Link} href="/adventures" variant="outlined" size="large">
                  Explore packages
                </Button>
              </Stack>

              <Grid container spacing={1.6} sx={{ mt: 1 }}>
                {stats.map((s) => (
                  <Grid key={s.label} item xs={12} sm={4}>
                    <Box
                      sx={{
                        p: 2,
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.10)',
                        bgcolor: 'rgba(0,0,0,0.25)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <Typography sx={{ fontWeight: 900, fontSize: 22 }}>{s.kpi}</Typography>
                      <Typography variant="body2" sx={{ opacity: 0.75 }}>
                        {s.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                p: 3,
                borderRadius: 6,
                bgcolor: 'rgba(17, 24, 19, 0.55)',
                border: '1px solid rgba(255,255,255,0.10)',
                backdropFilter: 'blur(14px)',
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
                What you get
              </Typography>
              <Typography sx={{ opacity: 0.78 }}>
                • Route planning + difficulty match
                <br />• Guide lead/tail & safety briefing
                <br />• Optional gear support (package-based)
                <br />• Clear timing + meeting points
                <br />• Photos-friendly stops
              </Typography>

              <Typography variant="h6" sx={{ fontWeight: 900, mt: 3, mb: 1 }}>
                Perfect for
              </Typography>
              <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                <Chip label="Friends" />
                <Chip label="Families" />
                <Chip label="Couples" />
                <Chip label="Corporate teams" color="secondary" />
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
