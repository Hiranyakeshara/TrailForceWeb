'use client';

import * as React from 'react';
import Link from '@/components/Link';

import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from '@mui/material';

import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

import Reveal from '@/components/Reveal';

const ACCENT_GREEN = '#467E30';
const ACCENT_GOLD = '#FFC107';

type Spot = {
  id: string;
  title: string;
  desc: string;
  note: string;
  // marker position in SVG viewBox (0..300 x 0..520)
  x: number;
  y: number;
};

const SPOTS: Spot[] = [
  {
    id: 'hill',
    title: 'Hill Country Trails',
    desc: 'Cool weather routes with viewpoints, tea country scenery, and ridge walks.',
    note: 'Nuwara Eliya • Ella • Haputale',
    x: 170,
    y: 230,
  },
  {
    id: 'coast',
    title: 'Coastal Ride Routes',
    desc: 'Flat-to-gentle rides with sunrise/sunset options and photo stops.',
    note: 'Negombo • Bentota • Galle',
    x: 145,
    y: 395,
  },
  {
    id: 'forest',
    title: 'Forest & Waterfall Areas',
    desc: 'Guided treks through greenery with careful pacing and safe resting points.',
    note: 'Kithulgala • Knuckles',
    x: 205,
    y: 270,
  },
  {
    id: 'custom',
    title: 'Your Preferred Location',
    desc: 'Tell us your goals—we’ll validate safety and design the plan.',
    note: 'Anywhere in Sri Lanka',
    x: 130,
    y: 455,
  },
];

export default function WhereWeGo() {
  const [active, setActive] = React.useState<string>(SPOTS[0].id);

  return (
    <Box
      id="where"
      sx={{
        py: { xs: 7, md: 10 },
        bgcolor: '#070B08',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <Container>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.05fr 0.95fr' },
            gap: { xs: 4, md: 5 },
            alignItems: 'start',
          }}
        >
          {/* LEFT: content */}
          <Reveal>
            <Box>
              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.92)',
                  fontWeight: 950,
                  fontSize: { xs: 34, md: 44 },
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
                We can host adventures on popular trails—or design an experience at your preferred
                location after a quick safety and feasibility check.
              </Typography>

              <Stack direction="row" spacing={1.2} sx={{ mt: 2.2 }}>
                <Button
                  component={Link}
                  href="/locations"
                  variant="outlined"
                  endIcon={<NorthEastRoundedIcon />}
                  sx={{
                    borderRadius: 999,
                    borderColor: 'rgba(70,126,48,0.55)',
                    color: ACCENT_GREEN,
                    px: 2.2,
                    py: 1,
                    fontWeight: 900,
                    textTransform: 'none',
                    '&:hover': {
                      borderColor: 'rgba(70,126,48,0.85)',
                      bgcolor: 'rgba(70,126,48,0.08)',
                    },
                  }}
                >
                  View all locations
                </Button>
              </Stack>

              {/* LIST */}
              <Stack spacing={1.8} sx={{ mt: 3.2 }}>
                {SPOTS.map((s) => {
                  const isOn = active === s.id;
                  return (
                    <Box
                      key={s.id}
                      onMouseEnter={() => setActive(s.id)}
                      onFocus={() => setActive(s.id)}
                      tabIndex={0}
                      role="button"
                      sx={{
                        p: { xs: 2, md: 2.2 },
                        borderRadius: 3, // ✅ reduced corners (theme match)
                        border: '1px solid rgba(255,255,255,0.09)',
                        background:
                          isOn
                            ? 'linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.025) 100%)'
                            : 'linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.018) 100%)',
                        boxShadow: isOn
                          ? '0 22px 60px rgba(0,0,0,0.55)'
                          : '0 14px 40px rgba(0,0,0,0.42)',
                        transition: 'transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease',
                        cursor: 'pointer',
                        outline: 'none',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          borderColor: 'rgba(70,126,48,0.45)',
                        },
                        '&:focus-visible': {
                          borderColor: 'rgba(255,193,7,0.55)',
                          boxShadow: '0 0 0 4px rgba(255,193,7,0.10)',
                        },
                      }}
                    >
                      <Stack direction="row" spacing={1.2} alignItems="flex-start">
                        <Box
                          sx={{
                            width: 34,
                            height: 34,
                            borderRadius: 2,
                            display: 'grid',
                            placeItems: 'center',
                            bgcolor: 'rgba(255,193,7,0.14)',
                            border: '1px solid rgba(255,193,7,0.22)',
                            flex: '0 0 auto',
                            mt: 0.2,
                          }}
                        >
                          <LocationOnRoundedIcon sx={{ color: ACCENT_GOLD, fontSize: 20 }} />
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Typography
                              sx={{
                                color: 'rgba(255,255,255,0.92)',
                                fontWeight: 950,
                                fontSize: { xs: 18, md: 20 },
                                letterSpacing: '-0.01em',
                              }}
                            >
                              {s.title}
                            </Typography>

                            {isOn && (
                              <CheckCircleRoundedIcon sx={{ color: ACCENT_GREEN, fontSize: 18, opacity: 0.95 }} />
                            )}
                          </Stack>

                          <Typography
                            sx={{
                              mt: 0.7,
                              color: 'rgba(255,255,255,0.62)',
                              lineHeight: 1.6,
                              fontSize: { xs: 13.8, md: 14.8 },
                            }}
                          >
                            {s.desc}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 0.9,
                              color: 'rgba(255,255,255,0.48)',
                              fontSize: 13,
                            }}
                          >
                            {s.note}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Reveal>

          {/* RIGHT: Sri Lanka map */}
          <Reveal>
            <Box
              sx={{
                position: 'relative',
                borderRadius: 4,
                border: '1px solid rgba(255,255,255,0.08)',
                background:
                  'radial-gradient(900px 520px at 30% 10%, rgba(70,126,48,0.18) 0%, rgba(70,126,48,0) 55%), radial-gradient(900px 520px at 85% 30%, rgba(255,193,7,0.14) 0%, rgba(255,193,7,0) 55%), linear-gradient(180deg, rgba(255,255,255,0.035) 0%, rgba(255,255,255,0.015) 100%)',
                boxShadow: '0 26px 80px rgba(0,0,0,0.55)',
                overflow: 'hidden',
                minHeight: { xs: 420, md: 520 },
              }}
            >
              {/* glow corners */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  background:
                    'radial-gradient(420px 240px at 20% 10%, rgba(70,126,48,0.14) 0%, rgba(70,126,48,0) 60%)',
                }}
              />

              <Box
                sx={{
                  position: 'absolute',
                  top: 14,
                  left: 16,
                  right: 16,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  zIndex: 2,
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.86)',
                    fontWeight: 950,
                    letterSpacing: '0.02em',
                    fontSize: 13,
                    textTransform: 'uppercase',
                  }}
                >
                  Sri Lanka map
                </Typography>

                <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: 13 }}>
                  Hover a card to highlight
                </Typography>
              </Box>

              {/* SVG Map */}
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'grid',
                  placeItems: 'center',
                  pt: 2,
                }}
              >
                <SriLankaMap active={active} onPick={setActive} />
              </Box>
            </Box>
          </Reveal>
        </Box>
      </Container>
    </Box>
  );
}

/** Stylized Sri Lanka silhouette + markers (no external assets) */
function SriLankaMap({
  active,
  onPick,
}: {
  active: string;
  onPick: (id: string) => void;
}) {
  // simple pulse animation
  const pulse = {
    '@keyframes tfPulse': {
      '0%': { transform: 'scale(1)', opacity: 0.35 },
      '70%': { transform: 'scale(2.1)', opacity: 0 },
      '100%': { transform: 'scale(2.1)', opacity: 0 },
    },
  } as const;

  return (
    <Box sx={{ width: 'min(420px, 92%)', ...pulse }}>
      <svg viewBox="0 0 300 520" width="100%" height="100%" style={{ display: 'block' }}>
        {/* silhouette (stylized) */}
        <defs>
          <linearGradient id="tfFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <linearGradient id="tfStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(70,126,48,0.55)" />
            <stop offset="100%" stopColor="rgba(255,193,7,0.28)" />
          </linearGradient>
        </defs>

        <path
          d="
            M160 18
            C198 26, 226 48, 238 78
            C248 104, 240 130, 252 156
            C267 188, 287 224, 268 260
            C254 286, 245 306, 246 334
            C247 368, 252 390, 239 418
            C223 452, 200 474, 172 494
            C150 510, 130 506, 118 488
            C103 466, 94 448, 78 426
            C60 400, 44 374, 48 340
            C52 302, 70 278, 72 250
            C74 220, 56 190, 72 160
            C86 132, 82 106, 96 80
            C114 46, 128 26, 160 18
            Z
          "
          fill="url(#tfFill)"
          stroke="url(#tfStroke)"
          strokeWidth="2"
        />

        {/* subtle inner shadow */}
        <path
          d="
            M160 34
            C192 40, 212 58, 221 82
            C229 104, 223 124, 232 148
            C244 180, 260 214, 246 244
            C235 266, 228 286, 229 312
            C230 342, 234 362, 224 386
            C211 416, 192 436, 168 454
            C150 468, 136 464, 126 448
            C114 430, 106 416, 94 396
            C80 372, 68 348, 71 318
            C74 284, 88 264, 89 238
            C90 210, 76 182, 87 156
            C97 132, 94 110, 106 88
            C120 60, 132 42, 160 34
            Z
          "
          fill="rgba(0,0,0,0.20)"
          opacity="0.18"
        />

        {/* markers */}
        {SPOTS.map((s) => {
          const isOn = active === s.id;
          return (
            <g
              key={s.id}
              onMouseEnter={() => onPick(s.id)}
              onClick={() => onPick(s.id)}
              style={{ cursor: 'pointer' }}
            >
              {/* pulse ring */}
              {isOn && (
                <circle
                  cx={s.x}
                  cy={s.y}
                  r="10"
                  fill="rgba(255,193,7,0.18)"
                  style={{ transformOrigin: `${s.x}px ${s.y}px`, animation: 'tfPulse 1.4s ease-out infinite' }}
                />
              )}
              <circle
                cx={s.x}
                cy={s.y}
                r={isOn ? 7.5 : 6}
                fill={isOn ? ACCENT_GOLD : 'rgba(255,193,7,0.75)'}
                stroke={isOn ? 'rgba(0,0,0,0.35)' : 'rgba(0,0,0,0.25)'}
                strokeWidth="2"
              />
              <circle cx={s.x} cy={s.y} r="2.2" fill="rgba(0,0,0,0.35)" />
            </g>
          );
        })}
      </svg>

      {/* legend */}
      <Stack direction="row" spacing={1} sx={{ mt: 1.2, justifyContent: 'center', opacity: 0.85 }}>
        <Box sx={{ width: 10, height: 10, borderRadius: 999, bgcolor: ACCENT_GOLD }} />
        <Typography sx={{ color: 'rgba(255,255,255,0.62)', fontSize: 12.5 }}>
          Hotspots • curated routes
        </Typography>
      </Stack>
    </Box>
  );
}