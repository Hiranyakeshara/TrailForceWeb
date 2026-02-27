'use client';

import Link from '@/components/Link';
import { Box, Container, Divider, Grid, Stack, Typography, Button } from '@mui/material';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import { navLinks } from '@/components/data';

export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 5, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Stack spacing={1}>
              <Typography variant="h6" sx={{ fontWeight: 900 }}>
                Trailforce
              </Typography>
              <Typography sx={{ opacity: 0.72 }}>
                Curated outdoor adventures—camping nights, hikes, and cycle rides—delivered at trusted routes or your
                preferred location.
              </Typography>
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<NorthEastRoundedIcon />}
                sx={{ width: 'fit-content', mt: 1 }}
              >
                Request a plan
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography sx={{ fontWeight: 800, mb: 1 }}>Pages</Typography>
            <Stack spacing={1} sx={{ opacity: 0.85 }}>
              {navLinks.map((l) => (
                <Typography key={l.href} component={Link} href={l.href}>
                  {l.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Typography sx={{ fontWeight: 800, mb: 1 }}>Contact</Typography>
            <Typography sx={{ opacity: 0.75 }}>
              Replace these placeholders with your client’s real details.
              <br />• Email: hello@trailforce.lk
              <br />• Phone: +94 XX XXX XXXX
              <br />• WhatsApp: +94 XX XXX XXXX
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3 }} />

        <Typography variant="caption" sx={{ opacity: 0.65 }}>
          © {new Date().getFullYear()} Trailforce. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
