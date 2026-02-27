'use client';

import Link from '@/components/Link';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

import Reveal from '@/components/Reveal';
import { locations } from '@/components/data';

export default function Locations() {
  return (
    <Box sx={{ py: { xs: 7, md: 9 }, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <Container>
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={5}>
            <Reveal>
              <Stack spacing={1.2}>
                <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 } }}>
                  Where we go
                </Typography>
                <Typography sx={{ opacity: 0.78 }}>
                  We can host adventures on popular trails—or design an experience at your preferred location
                  after a quick safety and feasibility check.
                </Typography>
                <Button
                  component={Link}
                  href="/locations"
                  variant="outlined"
                  endIcon={<NorthEastRoundedIcon />}
                  sx={{ width: 'fit-content' }}
                >
                  View all locations
                </Button>
              </Stack>
            </Reveal>
          </Grid>

          <Grid item xs={12} md={7}>
            <Grid container spacing={2.2}>
              {locations.slice(0, 4).map((l, i) => (
                <Grid key={l.name} item xs={12} sm={6}>
                  <Reveal delay={i * 0.03}>
                    <Card sx={{ height: '100%' }}>
                      <CardContent>
                        <Stack spacing={1}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <PlaceRoundedIcon color="secondary" />
                            <Typography variant="h6" sx={{ fontWeight: 900 }}>
                              {l.name}
                            </Typography>
                          </Stack>
                          <Typography sx={{ opacity: 0.76 }}>{l.description}</Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Reveal>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
