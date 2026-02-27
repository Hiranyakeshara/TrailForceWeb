'use client';

import * as React from 'react';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';

import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

import { navLinks } from '@/components/data';

function useElevate() {
  return useScrollTrigger({ disableHysteresis: true, threshold: 18 });
}

export default function TopNav() {
  const [open, setOpen] = React.useState(false);
  const elevated = useElevate();
  const pathname = usePathname();

  const isHome = pathname === '/';

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: isHome && !elevated ? 'transparent' : 'rgba(9, 12, 10, 0.72)',
          backdropFilter: isHome && !elevated ? 'none' : 'blur(14px)',
          borderBottom: isHome && !elevated ? '1px solid rgba(255,255,255,0.06)' : undefined,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 74 } }}>
            <Stack direction="row" spacing={1.2} alignItems="center" sx={{ flexGrow: 1 }}>
              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: 999,
                  bgcolor: 'primary.main',
                  boxShadow: '0 10px 30px rgba(76, 175, 80, 0.30)',
                }}
              />
              <Stack spacing={0}>
                <Typography variant="subtitle1" sx={{ fontWeight: 900, lineHeight: 1 }}>
                  Trailforce
                </Typography>
                <Typography variant="caption" sx={{ opacity: 0.72, lineHeight: 1 }}>
                  Adventure • Camp • Hike • Ride
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {navLinks.map((l) => (
                <Button
                  key={l.href}
                  component={Link}
                  href={l.href}
                  color="inherit"
                  sx={{
                    opacity: pathname === l.href ? 1 : 0.82,
                    fontWeight: pathname === l.href ? 800 : 700,
                  }}
                >
                  {l.label}
                </Button>
              ))}
              <Button
                component={Link}
                href="/contact"
                variant="contained"
                endIcon={<NorthEastRoundedIcon />}
                sx={{ ml: 1 }}
              >
                Book now
              </Button>
            </Stack>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: 'inline-flex', md: 'none' } }}
              aria-label="Open menu"
            >
              <MenuRoundedIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 900, mb: 1 }}>
            Trailforce
          </Typography>
          <List>
            {navLinks.map((l) => (
              <ListItemButton
                key={l.href}
                component={Link}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                <ListItemText primary={l.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            fullWidth
            component={Link}
            href="/contact"
            variant="contained"
            onClick={() => setOpen(false)}
          >
            Book now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
