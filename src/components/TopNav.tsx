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
  Popover,
  Stack,
  Toolbar,
  Typography,
  useScrollTrigger,
  Collapse,
  Divider,
} from '@mui/material';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';

type MenuKey = 'about' | 'what' | null;

function useElevate() {
  return useScrollTrigger({ disableHysteresis: true, threshold: 18 });
}

const ACCENT = '#467E30';

const megaMenu = {
  leftTitle: 'GUIDED ADVENTURES',
  leftItems: [
    { label: 'Camping Nights', href: '/adventures#camping' },
    { label: 'Hikes & Treks', href: '/adventures#hikes' },
    { label: 'Cycle Rides', href: '/adventures#cycling' },
    { label: 'Adventure Combo Days', href: '/adventures#combo' },
  ],
  rightTitle: 'GROUPS & SPECIALS',
  rightItems: [
    { label: 'Friends & Family Adventures', href: '/adventures#family' },
    { label: 'Corporate Retreats', href: '/adventures#corporate' },
    { label: 'Youth Programs', href: '/adventures#youth' },
    { label: 'Custom Trips', href: '/contact' },
  ],
} as const;

const aboutMenu = [
  { label: 'About Trailforce', href: '/about' },
  { label: 'Safety & Guides', href: '/about#safety' },
  { label: 'FAQs', href: '/#faq' },
] as const;

export default function TopNav() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [openMobileWhat, setOpenMobileWhat] = React.useState(false);
  const [openMobileAbout, setOpenMobileAbout] = React.useState(false);

  const elevated = useElevate();
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [activeMenu, setActiveMenu] = React.useState<MenuKey>(null);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const closeTimer = React.useRef<number | null>(null);

  const openPopover = Boolean(anchorEl) && Boolean(activeMenu);

  const scheduleClose = React.useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => {
      setActiveMenu(null);
      setAnchorEl(null);
    }, 420); // slightly longer so it feels smoother
  }, []);

  const cancelClose = React.useCallback(() => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }, []);

  const handleToggleMenu = (key: Exclude<MenuKey, null>) => (e: React.MouseEvent<HTMLElement>) => {
    cancelClose();
    if (activeMenu === key) {
      setActiveMenu(null);
      setAnchorEl(null);
      return;
    }
    setActiveMenu(key);
    setAnchorEl(e.currentTarget);
  };

  const handleCloseNow = () => {
    cancelClose();
    setActiveMenu(null);
    setAnchorEl(null);
  };

  const navBtnSx = {
    color: 'rgba(255,255,255,0.92)',
    fontFamily: 'var(--font-oswald), var(--font-montserrat), Inter, sans-serif',
    letterSpacing: '0.10em',
    fontWeight: 650,
    fontSize: 12.5,
    px: 1.35,
    py: 1.15,
    minWidth: 'auto',
    textTransform: 'uppercase' as const,
    position: 'relative' as const,
    transition: 'color 160ms ease',
    '&:hover': { color: 'rgba(255,255,255,0.98)' },
    '&:after': {
      content: '""',
      position: 'absolute',
      left: 12,
      right: 12,
      bottom: 7,
      height: 2,
      bgcolor: 'rgba(70,126,48,0.92)', // small change vs reference: green underline
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 180ms ease',
    },
    '&:hover:after': { transform: 'scaleX(1)' },
  };

  const isActiveExact = (href: string) => pathname === href;
  const isStartsWith = (href: string) => pathname.startsWith(href);

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          top: 0,
          bgcolor: isHome && !elevated ? 'transparent' : 'rgba(0,0,0,0.56)',
          backgroundImage:
            isHome && !elevated
              ? 'none'
              : 'linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.52) 60%, rgba(0,0,0,0.62) 100%)',
          backdropFilter: isHome && !elevated ? 'none' : 'blur(10px)',
          borderBottom:
            isHome && !elevated
              ? '1px solid rgba(255,255,255,0.10)'
              : '1px solid rgba(255,255,255,0.06)',
          // subtle difference vs the sample: small accent line
          boxShadow: 'none',
        }}
      >
        <Box
          sx={{
            height: 2,
            bgcolor: isHome && !elevated ? 'transparent' : 'rgba(70,126,48,0.65)',
          }}
        />
        <Container>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 64, md: 74 },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Left: Brand */}
            <Stack
              direction="row"
              spacing={1.2}
              alignItems="center"
              sx={{ minWidth: { xs: 'auto', md: 220 } }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 28,
                  borderRadius: 0.75,
                  bgcolor: 'transparent',
                  border: '2px solid rgba(255,255,255,0.75)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(135deg, ${ACCENT} 0%, rgba(70,126,48,0) 60%)`,
                    opacity: 0.9,
                  }}
                />
              </Box>
              <Box>
                <Stack direction="row" spacing={0.8} alignItems="center">
                  <Typography
                    sx={{
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-oswald), var(--font-montserrat), Inter, sans-serif',
                      lineHeight: 1,
                    }}
                  >
                    Trailforce
                  </Typography>
                  <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'rgba(70,126,48,0.9)' }} />
                </Stack>
                <Typography variant="caption" sx={{ opacity: 0.82, lineHeight: 1 }}>
                  Camp • Hike • Cycle
                </Typography>
              </Box>
            </Stack>

            {/* Center: Desktop Nav */}
            <Stack
              direction="row"
              spacing={0.25}
              alignItems="center"
              sx={{
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                justifyContent: 'center',
              }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <Button
                component={Link}
                href="/"
                color="inherit"
                sx={{
                  ...navBtnSx,
                  opacity: isActiveExact('/') ? 1 : 0.92,
                  '&:after': {
                    ...navBtnSx['&:after'],
                    transform: isActiveExact('/') ? 'scaleX(1)' : 'scaleX(0)',
                  },
                }}
              >
                Home
              </Button>

              {/* Click-only dropdown trigger */}
              <Button
                color="inherit"
                aria-haspopup="menu"
                aria-expanded={activeMenu === 'about' ? 'true' : 'false'}
                onClick={handleToggleMenu('about')}
                endIcon={
                  <KeyboardArrowDownRoundedIcon
                    sx={{
                      ml: -0.2,
                      transition: '180ms',
                      transform: activeMenu === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                }
                sx={{
                  ...navBtnSx,
                  opacity: isStartsWith('/about') ? 1 : 0.92,
                  '&:after': {
                    ...navBtnSx['&:after'],
                    transform: isStartsWith('/about') ? 'scaleX(1)' : 'scaleX(0)',
                  },
                  '& .MuiButton-endIcon': { ml: 0.15 },
                }}
              >
                About Us
              </Button>

              {/* Click-only dropdown trigger */}
              <Button
                color="inherit"
                aria-haspopup="menu"
                aria-expanded={activeMenu === 'what' ? 'true' : 'false'}
                onClick={handleToggleMenu('what')}
                endIcon={
                  <KeyboardArrowDownRoundedIcon
                    sx={{
                      ml: -0.2,
                      transition: '180ms',
                      transform: activeMenu === 'what' ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                }
                sx={{
                  ...navBtnSx,
                  opacity: isStartsWith('/adventures') ? 1 : 0.92,
                  '&:after': {
                    ...navBtnSx['&:after'],
                    transform: isStartsWith('/adventures') ? 'scaleX(1)' : 'scaleX(0)',
                  },
                  '& .MuiButton-endIcon': { ml: 0.15 },
                }}
              >
                What We Do
              </Button>

              <Button
                component={Link}
                href="/adventures"
                color="inherit"
                sx={{
                  ...navBtnSx,
                  opacity: isStartsWith('/adventures') ? 1 : 0.92,
                }}
              >
                Activities
              </Button>

              <Button
                component={Link}
                href="/locations"
                color="inherit"
                sx={{
                  ...navBtnSx,
                  opacity: isStartsWith('/locations') ? 1 : 0.92,
                  '&:after': {
                    ...navBtnSx['&:after'],
                    transform: isStartsWith('/locations') ? 'scaleX(1)' : 'scaleX(0)',
                  },
                }}
              >
                Location & Facilities
              </Button>
            </Stack>

            {/* Right: CTA + Mobile Menu */}
            <Stack
              direction="row"
              spacing={1}
              alignItems="center"
              sx={{ minWidth: { xs: 'auto', md: 220 }, justifyContent: 'flex-end' }}
            >
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                endIcon={<NorthEastRoundedIcon />}
                sx={{
                  display: { xs: 'none', md: 'inline-flex' },
                  borderRadius: 0,
                  borderColor: 'rgba(70,126,48,0.85)',
                  color: 'white',
                  fontFamily: 'var(--font-oswald), var(--font-montserrat), Inter, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.10em',
                  px: 2.1,
                  '&:hover': {
                    borderColor: 'rgba(70,126,48,1)',
                    bgcolor: 'rgba(70,126,48,0.18)',
                  },
                }}
              >
                Contact
              </Button>

              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{ display: { xs: 'inline-flex', md: 'none' }, color: 'white' }}
                aria-label="Open menu"
              >
                <MenuRoundedIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Desktop dropdown */}
      <Popover
        open={openPopover}
        anchorEl={anchorEl}
        onClose={handleCloseNow}
        disableRestoreFocus
        disableScrollLock
        transitionDuration={220}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        PaperProps={{
          onMouseEnter: cancelClose,
          onMouseLeave: scheduleClose,
          sx: {
            mt: 0.8,

            // ✅ keep dropdown compact (not full width)
            width: activeMenu === 'about' ? 360 : 'min(760px, calc(100vw - 64px))',
            maxWidth: activeMenu === 'about' ? 360 : 'min(760px, calc(100vw - 64px))',

            position: 'relative',

            // hover bridge so cursor can travel without closing
            '&:before': {
              content: '""',
              position: 'absolute',
              top: -14,
              left: 0,
              right: 0,
              height: 14,
            },

            borderRadius: 0,
            border: '1px solid rgba(0,0,0,0.10)',
            bgcolor: '#fff',
            color: '#1b1b1b',
            boxShadow: '0 18px 50px rgba(0,0,0,0.35)',
            overflow: 'hidden',
          },
        }}
      >
        {activeMenu === 'about' ? (
          <Box sx={{ width: 1, p: 2.2 }}>
            <Typography
              sx={{
                color: ACCENT,
                fontFamily: 'var(--font-oswald), Inter, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                fontWeight: 800,
                mb: 1,
              }}
            >
              About
            </Typography>
            <Stack spacing={0.6}>
              {aboutMenu.map((item) => (
                <Typography
                  key={item.href}
                  component={Link}
                  href={item.href}
                  onClick={handleCloseNow}
                  sx={{
                    color: ACCENT,
                    fontSize: 14,
                    lineHeight: 1.65,
                    '&:hover': { textDecoration: 'underline' },
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Stack>
          </Box>
        ) : (
          <Box sx={{ width: 1, p: 2.4 }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 5,
                rowGap: 2,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: ACCENT,
                    fontFamily: 'var(--font-oswald), Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {megaMenu.leftTitle}
                </Typography>
                <Stack spacing={0.6}>
                  {megaMenu.leftItems.map((item) => (
                    <Typography
                      key={item.href}
                      component={Link}
                      href={item.href}
                      onClick={handleCloseNow}
                      sx={{
                        color: ACCENT,
                        fontSize: 14,
                        lineHeight: 1.65,
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              <Box>
                <Typography
                  sx={{
                    color: ACCENT,
                    fontFamily: 'var(--font-oswald), Inter, sans-serif',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    fontWeight: 800,
                    mb: 1,
                  }}
                >
                  {megaMenu.rightTitle}
                </Typography>
                <Stack spacing={0.6}>
                  {megaMenu.rightItems.map((item) => (
                    <Typography
                      key={item.href}
                      component={Link}
                      href={item.href}
                      onClick={handleCloseNow}
                      sx={{
                        color: ACCENT,
                        fontSize: 14,
                        lineHeight: 1.65,
                        '&:hover': { textDecoration: 'underline' },
                      }}
                    >
                      {item.label}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Box>
        )}
      </Popover>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 300, p: 2 }}>
          <Typography sx={{ fontWeight: 900, mb: 1 }}>Trailforce</Typography>
          <Divider sx={{ mb: 1 }} />
          <List>
            <ListItemButton component={Link} href="/" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Home" />
            </ListItemButton>

            <ListItemButton onClick={() => setOpenMobileAbout((v) => !v)}>
              <ListItemText primary="About Us" />
              <KeyboardArrowDownRoundedIcon
                sx={{ transform: openMobileAbout ? 'rotate(180deg)' : 'rotate(0deg)', transition: '180ms' }}
              />
            </ListItemButton>
            <Collapse in={openMobileAbout} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {aboutMenu.map((i) => (
                  <ListItemButton
                    key={i.href}
                    component={Link}
                    href={i.href}
                    sx={{ pl: 4 }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton onClick={() => setOpenMobileWhat((v) => !v)}>
              <ListItemText primary="What We Do" />
              <KeyboardArrowDownRoundedIcon
                sx={{ transform: openMobileWhat ? 'rotate(180deg)' : 'rotate(0deg)', transition: '180ms' }}
              />
            </ListItemButton>
            <Collapse in={openMobileWhat} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {[...megaMenu.leftItems, ...megaMenu.rightItems].map((i) => (
                  <ListItemButton
                    key={i.href + i.label}
                    component={Link}
                    href={i.href}
                    sx={{ pl: 4 }}
                    onClick={() => setDrawerOpen(false)}
                  >
                    <ListItemText primary={i.label} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>

            <ListItemButton component={Link} href="/adventures" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Activities" />
            </ListItemButton>
            <ListItemButton component={Link} href="/locations" onClick={() => setDrawerOpen(false)}>
              <ListItemText primary="Location & Facilities" />
            </ListItemButton>
          </List>

          <Button
            fullWidth
            component={Link}
            href="/contact"
            variant="contained"
            onClick={() => setDrawerOpen(false)}
            sx={{ mt: 1.5, bgcolor: ACCENT, '&:hover': { bgcolor: 'rgba(70,126,48,0.92)' } }}
          >
            Contact
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
