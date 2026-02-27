'use client';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

import Reveal from '@/components/Reveal';
import { testimonials } from '@/components/data';

export default function Testimonials() {
  return (
    <Box sx={{ py: { xs: 7, md: 9 } }}>
      <Container>
        <Reveal>
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 } }}>
              People love the flow
            </Typography>
            <Typography sx={{ opacity: 0.78, maxWidth: 720 }}>
              Clear meeting points, good pacing, and a safe plan—so everyone can actually enjoy the outdoors.
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={2.5}>
          {testimonials.map((t, i) => (
            <Grid key={t.name} item xs={12} md={4}>
              <Reveal delay={i * 0.03}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.2}>
                      <FormatQuoteRoundedIcon sx={{ opacity: 0.6 }} />
                      <Typography sx={{ opacity: 0.8 }}>"{t.quote}"</Typography>
                      <Box sx={{ pt: 1 }}>
                        <Typography sx={{ fontWeight: 900 }}>{t.name}</Typography>
                        <Typography variant="body2" sx={{ opacity: 0.7 }}>
                          {t.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
