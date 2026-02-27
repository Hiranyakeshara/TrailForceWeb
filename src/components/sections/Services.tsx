'use client';

import type { ReactNode } from 'react';

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';

import DirectionsBikeRoundedIcon from '@mui/icons-material/DirectionsBikeRounded';
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import LocalFireDepartmentRoundedIcon from '@mui/icons-material/LocalFireDepartmentRounded';
import ExtensionRoundedIcon from '@mui/icons-material/ExtensionRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';

import Reveal from '@/components/Reveal';
import { services } from '@/components/data';

const iconMap: Record<string, ReactNode> = {
  camp: <LocalFireDepartmentRoundedIcon />,
  hike: <LandscapeRoundedIcon />,
  bike: <DirectionsBikeRoundedIcon />,
  custom: <ExtensionRoundedIcon />,
  team: <GroupsRoundedIcon />,
  gear: <HandymanRoundedIcon />,
};

export default function Services() {
  return (
    <Box sx={{ py: { xs: 7, md: 9 } }}>
      <Container>
        <Reveal>
          <Stack spacing={1} sx={{ mb: 4 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 30, md: 44 } }}>
              Pick your vibe
            </Typography>
            <Typography sx={{ opacity: 0.78, maxWidth: 720 }}>
              A clean, modern experience—select a package, share your location, and we handle the plan.
            </Typography>
          </Stack>
        </Reveal>

        <Grid container spacing={2.5}>
          {services.map((s, i) => (
            <Grid key={s.title} item xs={12} sm={6} md={4}>
              <Reveal delay={i * 0.03}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Stack spacing={1.1}>
                      <Box
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: 999,
                          bgcolor: 'rgba(255,179,0,0.15)',
                          display: 'grid',
                          placeItems: 'center',
                          color: 'secondary.main',
                        }}
                      >
                        {iconMap[s.icon]}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 900 }}>
                        {s.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.76 }}>{s.desc}</Typography>
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
