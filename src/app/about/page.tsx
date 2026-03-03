'use client';

import { Container, Typography, Box } from '@mui/material';

export default function AboutPage() {
  return (
    <Container sx={{ py: 10 }}>
      <Box sx={{ maxWidth: 900 }}>
        <Typography variant="h3" sx={{ fontWeight: 900, mb: 1.5 }}>
          About Trailforce
        </Typography>

        <Typography sx={{ opacity: 0.78, fontSize: 18, lineHeight: 1.8 }}>
          Trailforce is building a premium adventure experience for camping, hikes, and cycle rides — full website
          content and features will be updated soon.
        </Typography>
      </Box>
    </Container>
  );
}