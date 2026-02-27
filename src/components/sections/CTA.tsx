'use client';

import Link from '@/components/Link';
import Image from 'next/image';

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

import Reveal from '@/components/Reveal';
import { heroImages } from '@/components/data';

export default function CTA() {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', py: { xs: 7, md: 9 } }}>
      <Box sx={{ position: 'absolute', inset: 0 }}>
        <Image
          src={heroImages.camp}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', filter: 'saturate(1.05) contrast(1.05)' }}
        />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,0,0,.90) 0%, rgba(0,0,0,.55) 55%, rgba(0,0,0,.88) 100%)' }} />
      </Box>

      <Container sx={{ position: 'relative' }}>
        <Reveal>
          <Stack
            spacing={2}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 6,
              border: '1px solid rgba(255,255,255,0.10)',
              bgcolor: 'rgba(17, 24, 19, 0.55)',
              backdropFilter: 'blur(14px)',
              maxWidth: 760,
            }}
          >
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 } }}>
              Ready to go outdoors?
            </Typography>
            <Typography sx={{ opacity: 0.78 }}>
              Share your date, group size, and location. We’ll propose the best hike, ride, or camp plan for you.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.2} alignItems={{ xs: 'stretch', sm: 'center' }}>
              <Button component={Link} href="/contact" variant="contained" size="large" endIcon={<NorthEastRoundedIcon />}>
                Get a plan
              </Button>
              <Button component={Link} href="/adventures" variant="outlined" size="large">
                Browse adventures
              </Button>
            </Stack>
          </Stack>
        </Reveal>
      </Container>
    </Box>
  );
}
