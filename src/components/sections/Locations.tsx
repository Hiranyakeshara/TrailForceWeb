'use client';

import * as React from 'react';
import Link from '@/components/Link';
import { Box, Button, Chip, Container, Stack, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import PlaceRoundedIcon from '@mui/icons-material/PlaceRounded';
import RouteRoundedIcon from '@mui/icons-material/RouteRounded';
import ScheduleRoundedIcon from '@mui/icons-material/ScheduleRounded';
import TerrainRoundedIcon from '@mui/icons-material/TerrainRounded';

import Reveal from '@/components/Reveal';

const ACCENT_GREEN = '#467E30';
const ACCENT_GOLD = '#FFC107';

type RouteItem = {
  id: string;
  tag: 'Hills' | 'Forest' | 'Coast' | 'Custom';
  title: string;
  location: string;
  desc: string;
  image: string;
  meta: {
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    duration: string; // e.g. 2–3 hrs
    distance: string; // e.g. 18 km
    elevation: string; // e.g. 620 m
  };
};

const ROUTES: RouteItem[] = [
  {
    id: 'knuckles',
    tag: 'Forest',
    title: 'Forest trek + waterfall swim',
    location: 'Knuckles • Riverstone',
    desc: 'Cool shade trails, safe river points, and scenic rest stops — guided pacing included.',
    image:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=70',
    meta: { difficulty: 'Moderate', duration: '3–4 hrs', distance: '10 km', elevation: '480 m' },
  },
  {
    id: 'ella',
    tag: 'Hills',
    title: 'Hill viewpoint sunrise walk',
    location: 'Ella • Ridge route',
    desc: 'Short climbs, big views — perfect for teams and small groups.',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2400&q=70',
    meta: { difficulty: 'Easy', duration: '2–3 hrs', distance: '7 km', elevation: '350 m' },
  },
  {
    id: 'coast-ride',
    tag: 'Coast',
    title: 'Coastal cycle ride + photo stops',
    location: 'Negombo • Bentota',
    desc: 'Flat-to-gentle ride with sunrise/sunset options, safety lead/tail, and hydration breaks.',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2400&q=70',
    meta: { difficulty: 'Easy', duration: '2–3 hrs', distance: '18 km', elevation: '40 m' },
  },
  {
    id: 'kithulgala',
    tag: 'Forest',
    title: 'Rainforest trail + river experience',
    location: 'Kithulgala • Green belt',
    desc: 'A lush guided route with safety briefing and route feasibility checks.',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2400&q=70',
    meta: { difficulty: 'Moderate', duration: '3–5 hrs', distance: '12 km', elevation: '520 m' },
  },
  {
    id: 'custom',
    tag: 'Custom',
    title: 'Your preferred location (we design it)',
    location: 'Anywhere in Sri Lanka',
    desc: 'Share your location + goals — we’ll validate safety, plan the route, and deliver the experience.',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=2400&q=70',
    meta: { difficulty: 'Easy', duration: 'Flexible', distance: 'Flexible', elevation: 'Flexible' },
  },
];

const TAGS: RouteItem['tag'][] = ['Hills', 'Forest', 'Coast', 'Custom'];

export default function WhereWeGo() {
  const [tag, setTag] = React.useState<RouteItem['tag']>('Forest');
  const filtered = React.useMemo(() => ROUTES.filter((r) => r.tag === tag), [tag]);
  const [activeId, setActiveId] = React.useState(filtered[0]?.id ?? ROUTES[0].id);

  // keep active inside filtered list
  React.useEffect(() => {
    if (!filtered.some((r) => r.id === activeId)) {
      setActiveId(filtered[0]?.id ?? ROUTES[0].id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tag]);

  const active = React.useMemo(
    () => ROUTES.find((r) => r.id === activeId) ?? ROUTES[0],
    [activeId]
  );

  return (
    <Box
      id="where"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        py: { xs: 7, md: 10 },
        bgcolor: '#070B08',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        '&:before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(900px 520px at 18% 10%, rgba(70,126,48,0.20) 0%, rgba(70,126,48,0) 55%), radial-gradient(900px 520px at 88% 24%, rgba(255,193,7,0.10) 0%, rgba(255,193,7,0) 55%), linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.82) 60%, rgba(0,0,0,0.90) 100%)',
          opacity: 1,
          zIndex: 0,
        },
        '&:after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          opacity: 0.06,
          zIndex: 0,
          pointerEvents: 'none',
        },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 3.5, md: 5 },
            alignItems: 'start',
          }}
        >
          {/* LEFT: content + selector */}
          <Reveal>
            <Box>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontWeight: 950,
                  fontSize: { xs: 34, md: 46 },
                  letterSpacing: '-0.02em',
                  fontFamily: 'var(--font-oswald), var(--font-montserrat), Inter, sans-serif',
                }}
              >
                Where we go
              </Typography>

              <Typography
                sx={{
                  mt: 1.2,
                  color: 'rgba(255,255,255,0.62)',
                  maxWidth: 720,
                  lineHeight: 1.65,
                  fontSize: { xs: 14.5, md: 16 },
                }}
              >
                Pick a vibe — we’ll handle planning, safety checks, route guidance, and the full experience.
              </Typography>

              {/* Tag selector */}
              <Stack
                direction="row"
                spacing={1}
                sx={{
                  mt: 2.2,
                  flexWrap: 'wrap',
                  rowGap: 1,
                }}
              >
                {TAGS.map((t) => {
                  const on = t === tag;
                  return (
                    <Button
                      key={t}
                      onClick={() => setTag(t)}
                      variant={on ? 'contained' : 'outlined'}
                      sx={{
                        borderRadius: 2, // ✅ less rounded
                        px: 1.6,
                        py: 0.9,
                        fontWeight: 950,
                        textTransform: 'none',
                        borderColor: on ? 'transparent' : 'rgba(255,255,255,0.16)',
                        color: on ? '#0B0F0C' : 'rgba(255,255,255,0.78)',
                        bgcolor: on ? ACCENT_GOLD : 'rgba(255,255,255,0.03)',
                        '&:hover': {
                          bgcolor: on ? 'rgba(255,193,7,0.92)' : 'rgba(255,255,255,0.06)',
                          borderColor: on ? 'transparent' : 'rgba(255,255,255,0.24)',
                        },
                      }}
                    >
                      {t}
                    </Button>
                  );
                })}
              </Stack>

              <Stack direction="row" spacing={1.2} sx={{ mt: 2.2 }}>
                <Button
                  component={Link}
                  href="/locations"
                  variant="outlined"
                  endIcon={<NorthEastRoundedIcon />}
                  sx={{
                    borderRadius: 2,
                    borderColor: 'rgba(70,126,48,0.65)',
                    color: 'rgba(255,255,255,0.86)',
                    px: 2.0,
                    py: 1,
                    fontWeight: 950,
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(70,126,48,0.10)', borderColor: 'rgba(70,126,48,0.95)' },
                  }}
                >
                  Explore locations
                </Button>

                <Button
                  component={Link}
                  href="/contact"
                  variant="contained"
                  sx={{
                    borderRadius: 2,
                    bgcolor: ACCENT_GREEN,
                    px: 2.0,
                    py: 1,
                    fontWeight: 950,
                    textTransform: 'none',
                    '&:hover': { bgcolor: 'rgba(70,126,48,0.92)' },
                  }}
                >
                  Request a plan
                </Button>
              </Stack>

              {/* Compact list of cards (click to update featured) */}
              <Stack spacing={1.2} sx={{ mt: 3 }}>
                {filtered.map((r) => {
                  const on = r.id === activeId;
                  return (
                    <Box
                      key={r.id}
                      onClick={() => setActiveId(r.id)}
                      role="button"
                      tabIndex={0}
                      sx={{
                        p: { xs: 1.6, md: 1.8 },
                        borderRadius: 2, // ✅ less rounded
                        border: on ? '1px solid rgba(255,193,7,0.38)' : '1px solid rgba(255,255,255,0.10)',
                        background: on ? 'rgba(255,193,7,0.06)' : 'rgba(0,0,0,0.26)',
                        backdropFilter: 'blur(10px)',
                        cursor: 'pointer',
                        transition: 'transform 160ms ease, border-color 160ms ease, background 160ms ease',
                        '&:hover': { transform: 'translateY(-2px)', borderColor: 'rgba(255,193,7,0.48)' },
                        outline: 'none',
                        '&:focus-visible': { boxShadow: '0 0 0 4px rgba(255,193,7,0.12)' },
                      }}
                    >
                      <Stack direction="row" spacing={1.2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 36,
                            height: 36,
                            borderRadius: 1.8,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(255,193,7,0.14)',
                            border: '1px solid rgba(255,193,7,0.22)',
                            flex: '0 0 auto',
                            mt: 0.2,
                          }}
                        >
                          <PlaceRoundedIcon sx={{ color: ACCENT_GOLD, fontSize: 20 }} />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography sx={{ color: 'rgba(255,255,255,0.92)', fontWeight: 950, fontSize: 16 }}>
                              {r.title}
                            </Typography>
                            {on && <CheckCircleRoundedIcon sx={{ color: ACCENT_GREEN, fontSize: 18 }} />}
                          </Stack>

                          <Typography sx={{ mt: 0.3, color: 'rgba(255,255,255,0.60)', fontSize: 13.5, lineHeight: 1.5 }}>
                            {r.location}
                          </Typography>

                          <Typography sx={{ mt: 0.6, color: 'rgba(255,255,255,0.52)', fontSize: 13.5, lineHeight: 1.55 }}>
                            {r.desc}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Reveal>

          {/* RIGHT: Featured image card (big visual) */}
          <Reveal>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 2.5, // ✅ modern, not too round
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.10)',
                boxShadow: '0 28px 90px rgba(0,0,0,0.58)',
                minHeight: { xs: 420, md: 520 },
              }}
            >
              {/* image */}
              <Box
                key={active.id}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url('${active.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: 'saturate(1.05)',
                  transform: 'scale(1.04)',
                }}
              />

              {/* overlay */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.62) 55%, rgba(0,0,0,0.86) 100%)',
                }}
              />

              {/* top badges */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  right: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  gap: 1,
                  zIndex: 2,
                }}
              >
                <Chip
                  label={active.tag}
                  size="small"
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.86)',
                    border: '1px solid rgba(255,255,255,0.18)',
                    fontWeight: 900,
                  }}
                />

                <Chip
                  label={active.meta.difficulty}
                  size="small"
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'rgba(255,193,7,0.14)',
                    color: 'rgba(255,255,255,0.90)',
                    border: '1px solid rgba(255,193,7,0.22)',
                    fontWeight: 950,
                  }}
                />
              </Box>

              {/* bottom content */}
              <Box
                sx={{
                  position: 'absolute',
                  left: 16,
                  right: 16,
                  bottom: 16,
                  zIndex: 2,
                  borderRadius: 2,
                  border: '1px solid rgba(255,255,255,0.12)',
                  bgcolor: 'rgba(0,0,0,0.40)',
                  backdropFilter: 'blur(12px)',
                  p: { xs: 1.6, md: 1.8 },
                }}
              >
                <Typography sx={{ color: 'rgba(255,255,255,0.94)', fontWeight: 950, fontSize: { xs: 20, md: 22 } }}>
                  {active.title}
                </Typography>

                <Typography sx={{ mt: 0.5, color: 'rgba(255,255,255,0.70)', fontSize: 14 }}>
                  {active.location}
                </Typography>

                <Stack direction="row" spacing={1.2} sx={{ mt: 1.2, flexWrap: 'wrap', rowGap: 1 }}>
                  <MetaPill icon={<ScheduleRoundedIcon />} label={active.meta.duration} />
                  <MetaPill icon={<RouteRoundedIcon />} label={active.meta.distance} />
                  <MetaPill icon={<TerrainRoundedIcon />} label={active.meta.elevation} />
                </Stack>

                <Stack direction="row" spacing={1.2} sx={{ mt: 1.4 }}>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="contained"
                    size="small"
                    sx={{
                      borderRadius: 2,
                      bgcolor: ACCENT_GREEN,
                      fontWeight: 950,
                      textTransform: 'none',
                      '&:hover': { bgcolor: 'rgba(70,126,48,0.92)' },
                    }}
                  >
                    Request this route
                  </Button>

                  <Button
                    component={Link}
                    href="/locations"
                    variant="outlined"
                    size="small"
                    sx={{
                      borderRadius: 2,
                      borderColor: 'rgba(255,255,255,0.18)',
                      color: 'rgba(255,255,255,0.86)',
                      fontWeight: 950,
                      textTransform: 'none',
                      '&:hover': { borderColor: 'rgba(255,255,255,0.30)', bgcolor: 'rgba(255,255,255,0.06)' },
                    }}
                  >
                    View all
                  </Button>
                </Stack>
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

function MetaPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Stack
      direction="row"
      spacing={0.8}
      alignItems="center"
      sx={{
        px: 1.1,
        py: 0.7,
        borderRadius: 2,
        bgcolor: 'rgba(255,255,255,0.10)',
        border: '1px solid rgba(255,255,255,0.14)',
        color: 'rgba(255,255,255,0.86)',
        fontWeight: 850,
        fontSize: 13,
      }}
    >
      <Box sx={{ opacity: 0.92, '& svg': { fontSize: 18 } }}>{icon}</Box>
      <Box component="span">{label}</Box>
    </Stack>
  );
}