'use client';

import * as React from 'react';
import Link from '@/components/Link';

import {
  Box,
  Button,
  Chip,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from '@mui/material';

import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';

import Reveal from '@/components/Reveal';

type Category = 'Hiking' | 'Camping' | 'Cycling' | 'Groups';

type CardItem = {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  rating: number;
  people: number;
  // If image is missing => info-style card (like the beige card in your reference)
  image?: string;
  stats?: { duration: string; distance: string; elevation: string };
  href: string;
};

const ACCENT_GREEN = '#467E30';
const ACCENT_ORANGE = '#FF6A00';

const CARDS: CardItem[] = [
  // Hiking
  {
    id: 'h1',
    category: 'Hiking',
    title: 'Hikes & Treks',
    subtitle: 'Sunrise hikes, waterfall routes, and scenic ridge walks—paced for your group.',
    difficulty: 'Easy',
    rating: 4.6,
    people: 222,
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#hikes',
  },
  {
    id: 'h2',
    category: 'Hiking',
    title: 'Custom Day Trips',
    subtitle: 'Mix activities in one day—ride + hike, camp + trek, or a relaxed nature day.',
    difficulty: 'Easy',
    rating: 4.8,
    people: 122,
    stats: { duration: '01:20', distance: '3.0 km', elevation: '250 m' },
    href: '/contact',
  },
  {
    id: 'h3',
    category: 'Hiking',
    title: 'Gear & Support',
    subtitle: 'Helmets, lights, basic first aid, and optional rentals—depending on package.',
    difficulty: 'Easy',
    rating: 5.0,
    people: 111,
    image:
      'https://images.unsplash.com/photo-1526481280695-3c687fd5432c?auto=format&fit=crop&w=1600&q=80',
    href: '/contact',
  },
  {
    id: 'h4',
    category: 'Hiking',
    title: 'Camping Nights',
    subtitle: 'Setup support, campfire-friendly meals, and a smooth overnight plan.',
    difficulty: 'Easy',
    rating: 4.0,
    people: 19,
    image:
      'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#camping',
  },

  // Camping
  {
    id: 'c1',
    category: 'Camping',
    title: 'Camping Nights',
    subtitle: 'Setup support, campfire-friendly meals, and a smooth overnight plan.',
    difficulty: 'Easy',
    rating: 4.7,
    people: 94,
    image:
      'https://images.unsplash.com/photo-1508873699372-7aeab60b44e4?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#camping',
  },
  {
    id: 'c2',
    category: 'Camping',
    title: 'Custom Day Trips',
    subtitle: 'Mix activities in one day—ride + hike, camp + trek, or a relaxed nature day.',
    difficulty: 'Easy',
    rating: 4.5,
    people: 61,
    stats: { duration: 'Overnight', distance: '—', elevation: '—' },
    href: '/contact',
  },
  {
    id: 'c3',
    category: 'Camping',
    title: 'Gear & Support',
    subtitle: 'Helmets, lights, basic first aid, and optional rentals—depending on package.',
    difficulty: 'Easy',
    rating: 4.9,
    people: 38,
    image:
      'https://images.unsplash.com/photo-1475483768296-6163e08872a1?auto=format&fit=crop&w=1600&q=80',
    href: '/contact',
  },
  {
    id: 'c4',
    category: 'Camping',
    title: 'Hikes & Treks',
    subtitle: 'Add a short trek before sunset—guided and paced for your group.',
    difficulty: 'Moderate',
    rating: 4.6,
    people: 47,
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#hikes',
  },

  // Cycling
  {
    id: 'b1',
    category: 'Cycling',
    title: 'Cycle Rides',
    subtitle: 'Guided rides with route planning, safety lead/tail, and optional e-bikes.',
    difficulty: 'Easy',
    rating: 4.6,
    people: 57,
    image:
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#cycling',
  },
  {
    id: 'b2',
    category: 'Cycling',
    title: 'Custom Day Trips',
    subtitle: 'Morning ride + coffee stop, or mixed ride + short trek.',
    difficulty: 'Easy',
    rating: 4.4,
    people: 31,
    stats: { duration: '01:10', distance: '12 km', elevation: '120 m' },
    href: '/contact',
  },
  {
    id: 'b3',
    category: 'Cycling',
    title: 'Gear & Support',
    subtitle: 'Helmets, lights, first aid, and optional rentals—depending on package.',
    difficulty: 'Moderate',
    rating: 4.8,
    people: 42,
    image:
      'https://images.unsplash.com/photo-1520975693411-b87c7a2fa1b5?auto=format&fit=crop&w=1600&q=80',
    href: '/contact',
  },
  {
    id: 'b4',
    category: 'Cycling',
    title: 'Hikes & Treks',
    subtitle: 'Add a short nature walk to your ride for a complete day-out.',
    difficulty: 'Easy',
    rating: 4.5,
    people: 28,
    image:
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#hikes',
  },

  // Groups
  {
    id: 'g1',
    category: 'Groups',
    title: 'Corporate Retreats',
    subtitle: 'Team challenges, outdoor bonding, and light leadership activities.',
    difficulty: 'Easy',
    rating: 4.7,
    people: 86,
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#corporate',
  },
  {
    id: 'g2',
    category: 'Groups',
    title: 'Custom Day Trips',
    subtitle: 'Tailored to your group size, pace, and preferred location.',
    difficulty: 'Easy',
    rating: 4.6,
    people: 64,
    stats: { duration: 'Half-day', distance: '—', elevation: '—' },
    href: '/contact',
  },
  {
    id: 'g3',
    category: 'Groups',
    title: 'Camping Nights',
    subtitle: 'Group camp setup + meals + optional hike or ride add-on.',
    difficulty: 'Easy',
    rating: 4.8,
    people: 52,
    image:
      'https://images.unsplash.com/photo-1494475673543-6a6a27143fc8?auto=format&fit=crop&w=1600&q=80',
    href: '/adventures#camping',
  },
  {
    id: 'g4',
    category: 'Groups',
    title: 'Gear & Support',
    subtitle: 'Safety briefing, support crew, essentials, and optional rentals.',
    difficulty: 'Easy',
    rating: 4.5,
    people: 40,
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80',
    href: '/contact',
  },
];

function fmt(n: number) {
  return n.toFixed(1);
}

export default function Services() {
  const [category, setCategory] = React.useState<Category>('Hiking');
  const [menuAnchor, setMenuAnchor] = React.useState<null | HTMLElement>(null);
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);

  const items = React.useMemo(
    () => CARDS.filter((c) => c.category === category),
    [category]
  );

  const scrollByCards = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.min(520, el.clientWidth * 0.62) * dir;
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: '#F6F4EF',
        color: '#101110',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)',
      }}
    >
      <Container>
        <Reveal>
          <Stack
            direction="row"
            alignItems="flex-start"
            justifyContent="space-between"
            spacing={2}
            sx={{ mb: { xs: 3, md: 4 } }}
          >
            <Box>
              <Stack direction="row" spacing={1.2} alignItems="center">
                <Button
                  onClick={(e) => setMenuAnchor(e.currentTarget)}
                  endIcon={<KeyboardArrowDownRoundedIcon />}
                  sx={{
                    px: 0,
                    minWidth: 'auto',
                    color: ACCENT_GREEN, // theme match
                    fontWeight: 900,
                    fontSize: { xs: 26, md: 42 },
                    letterSpacing: '-0.5px',
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'transparent', opacity: 0.9 },
                  }}
                >
                  {category}
                </Button>

                <Box
                  sx={{
                    width: 46,
                    height: 46,
                    borderRadius: 3,
                    display: 'grid',
                    placeItems: 'center',
                    bgcolor: 'rgba(70,126,48,0.10)',
                    border: '1px solid rgba(70,126,48,0.20)',
                  }}
                >
                  <LandscapeRoundedIcon sx={{ color: ACCENT_GREEN }} />
                </Box>
              </Stack>

              <Menu
                anchorEl={menuAnchor}
                open={Boolean(menuAnchor)}
                onClose={() => setMenuAnchor(null)}
                PaperProps={{
                  sx: {
                    mt: 1,
                    borderRadius: 2,
                    border: '1px solid rgba(0,0,0,0.10)',
                    boxShadow: '0 18px 50px rgba(0,0,0,0.18)',
                  },
                }}
              >
                {(['Hiking', 'Camping', 'Cycling', 'Groups'] as Category[]).map((c) => (
                  <MenuItem
                    key={c}
                    onClick={() => {
                      setCategory(c);
                      setMenuAnchor(null);
                      requestAnimationFrame(() => {
                        scrollerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                      });
                    }}
                  >
                    {c}
                  </MenuItem>
                ))}
              </Menu>

              <Typography
                sx={{
                  fontSize: { xs: 38, md: 64 },
                  fontWeight: 950,
                  lineHeight: 1.02,
                  letterSpacing: '-1.2px',
                  mt: 0.3,
                }}
              >
                routes near you
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  maxWidth: 760,
                  color: 'rgba(0,0,0,0.62)',
                  fontSize: { xs: 15, md: 17 },
                }}
              >
                Real-looking previews with reserved image space—swap these image URLs with your own photos anytime.
              </Typography>
            </Box>

            {/* arrows (desktop) */}
            <Stack direction="row" spacing={1} sx={{ mt: { xs: 0.5, md: 1.8 }, display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                onClick={() => scrollByCards(-1)}
                aria-label="Previous"
                sx={{
                  width: 46,
                  height: 46,
                  bgcolor: 'white',
                  border: '1px solid rgba(0,0,0,0.10)',
                  boxShadow: '0 12px 26px rgba(0,0,0,0.10)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.92)' },
                }}
              >
                <ArrowBackIosNewRoundedIcon fontSize="small" />
              </IconButton>
              <IconButton
                onClick={() => scrollByCards(1)}
                aria-label="Next"
                sx={{
                  width: 46,
                  height: 46,
                  bgcolor: 'white',
                  border: '1px solid rgba(0,0,0,0.10)',
                  boxShadow: '0 12px 26px rgba(0,0,0,0.10)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.92)' },
                }}
              >
                <ArrowForwardIosRoundedIcon fontSize="small" />
              </IconButton>
            </Stack>
          </Stack>
        </Reveal>

        {/* carousel */}
        <Box
          ref={scrollerRef}
          sx={{
            display: 'flex',
            gap: { xs: 2, md: 2.4 },
            overflowX: 'auto',
            pb: 1.5,
            scrollSnapType: 'x mandatory',
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': { height: 0 },
          }}
        >
          {items.map((r) => {
            const isInfo = !r.image;
            const cardW = { xs: 280, sm: 320, md: 360 };

            return (
              <Box
                key={r.id}
                component={Link}
                href={r.href}
                sx={{
                  textDecoration: 'none',
                  color: 'inherit',
                  minWidth: cardW,
                  width: cardW,
                  height: { xs: 360, md: 390 },
                  borderRadius: 6, // similar roundness to reference
                  overflow: 'hidden',
                  position: 'relative',
                  scrollSnapAlign: 'start',
                  border: '1px solid rgba(0,0,0,0.10)',
                  boxShadow: '0 18px 60px rgba(0,0,0,0.10)',
                  bgcolor: isInfo ? '#E7E2D7' : '#111',
                  transition: 'transform 180ms ease, box-shadow 180ms ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 24px 70px rgba(0,0,0,0.14)',
                  },
                }}
              >
                {/* image / reserved image space */}
                {!isInfo ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `url(${r.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.02)',
                      filter: 'saturate(1.06)',
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'radial-gradient(1200px 380px at 30% 10%, rgba(70,126,48,0.18) 0%, rgba(70,126,48,0) 45%), radial-gradient(900px 460px at 80% 30%, rgba(255,106,0,0.16) 0%, rgba(255,106,0,0) 55%)',
                    }}
                  />
                )}

                {!isInfo && (
                  <Box
                    sx={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0.22) 38%, rgba(0,0,0,0.74) 100%)',
                    }}
                  />
                )}

                {/* top meta */}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{
                    position: 'absolute',
                    top: 14,
                    left: 14,
                    right: 14,
                    zIndex: 2,
                  }}
                >
                  <Chip
                    label={r.difficulty}
                    size="small"
                    sx={{
                      height: 24,
                      fontWeight: 900,
                      borderRadius: 999,
                      bgcolor: isInfo ? 'rgba(0,0,0,0.12)' : 'rgba(255,255,255,0.18)',
                      color: isInfo ? '#1a1a1a' : 'white',
                      border: isInfo ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.20)',
                      backdropFilter: 'blur(8px)',
                    }}
                  />

                  <Stack direction="row" spacing={1.2} alignItems="center" sx={{ color: isInfo ? '#1a1a1a' : 'white' }}>
                    <Stack direction="row" spacing={0.5} alignItems="center">
                      <StarRoundedIcon sx={{ fontSize: 18, color: isInfo ? ACCENT_ORANGE : '#fff' }} />
                      <Typography sx={{ fontWeight: 950, fontSize: 14 }}>{fmt(r.rating)}</Typography>
                    </Stack>
                    <Stack direction="row" spacing={0.5} alignItems="center" sx={{ opacity: 0.92 }}>
                      <GroupRoundedIcon sx={{ fontSize: 18 }} />
                      <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{r.people}</Typography>
                    </Stack>
                  </Stack>
                </Stack>

                {/* bottom content */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 16,
                    right: 16,
                    bottom: 16,
                    zIndex: 2,
                    color: isInfo ? '#101110' : 'white',
                  }}
                >
                  {isInfo && r.stats && (
                    <Stack direction="row" spacing={2} sx={{ mb: 1.4, color: 'rgba(0,0,0,0.70)' }}>
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <AccessTimeRoundedIcon sx={{ fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{r.stats.duration}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <RouteRoundedIcon sx={{ fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{r.stats.distance}</Typography>
                      </Stack>
                      <Stack direction="row" spacing={0.8} alignItems="center">
                        <TrendingUpRoundedIcon sx={{ fontSize: 18 }} />
                        <Typography sx={{ fontWeight: 900, fontSize: 14 }}>{r.stats.elevation}</Typography>
                      </Stack>
                    </Stack>
                  )}

                  <Typography
                    sx={{
                      fontWeight: 950,
                      fontSize: { xs: 22, md: 28 },
                      lineHeight: 1.12,
                      letterSpacing: '-0.4px',
                      textShadow: !isInfo ? '0 12px 22px rgba(0,0,0,0.35)' : 'none',
                      mb: 0.9,
                    }}
                  >
                    {r.title}
                  </Typography>

                  <Typography
                    sx={{
                      opacity: isInfo ? 0.72 : 0.88,
                      fontSize: 14,
                      lineHeight: 1.4,
                      mb: 1.2,
                    }}
                  >
                    {r.subtitle}
                  </Typography>

                  <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Typography sx={{ fontWeight: 900, fontSize: 13, opacity: isInfo ? 0.75 : 0.9 }}>
                      Navigate
                    </Typography>

                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 999,
                        display: 'grid',
                        placeItems: 'center',
                        bgcolor: isInfo ? 'rgba(0,0,0,0.08)' : 'rgba(0,0,0,0.30)',
                        border: isInfo ? '1px solid rgba(0,0,0,0.10)' : '1px solid rgba(255,255,255,0.14)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <NorthEastRoundedIcon sx={{ color: isInfo ? ACCENT_ORANGE : 'white' }} />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* mobile hint */}
        <Typography
          sx={{
            mt: 1.2,
            display: { xs: 'block', md: 'none' },
            color: 'rgba(0,0,0,0.52)',
            fontSize: 13,
            fontWeight: 700,
          }}
        >
          Swipe to explore →
        </Typography>
      </Container>
    </Box>
  );
}