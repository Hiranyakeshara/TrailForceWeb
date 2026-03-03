'use client';

import { adventures } from '@/components/data';
import { Box, Container, Typography, Stack, Grid, Card, CardContent, Chip, Divider } from '@mui/material';

const scrollAnchorSx = { scrollMarginTop: { xs: 84, md: 94 } };

const byTag = (tag: string) => adventures.filter((a) => a.tags.some((t) => t.toLowerCase().includes(tag.toLowerCase())));

const sections = [
  { id: 'camping', title: 'Camping Nights', items: byTag('camp') },
  { id: 'hikes', title: 'Hikes & Treks', items: [...byTag('hike'), ...byTag('trek')] },
  { id: 'cycling', title: 'Cycle Rides', items: byTag('cycle') },
  { id: 'combo', title: 'Adventure Combos', items: byTag('combo') },
  { id: 'corporate', title: 'Corporate Days', items: byTag('corporate') },
] as const;

export default function AdventuresPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3">Adventures</Typography>
        <Typography sx={{ opacity: 0.78 }}>
          Choose a signature experience—or ask us to tailor a day for your group.
        </Typography>
      </Stack>

      <Stack spacing={5}>
        {sections.map((s) => (
          <Box key={s.id} id={s.id} sx={scrollAnchorSx}>
            <Stack spacing={1.2} sx={{ mb: 2 }}>
              <Typography variant="h5" sx={{ fontWeight: 900 }}>
                {s.title}
              </Typography>
              <Divider sx={{ opacity: 0.25 }} />
            </Stack>

            <Grid container spacing={2.5}>
              {s.items.map((a) => (
                <Grid key={a.title} item xs={12} sm={6} md={4}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={1.2}>
                        <Typography variant="h6">{a.title}</Typography>
                        <Typography sx={{ opacity: 0.75 }}>{a.summary}</Typography>
                        <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
                          {a.tags.map((t) => (
                            <Chip key={t} size="small" label={t} />
                          ))}
                        </Stack>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}

              {s.items.length === 0 ? (
                <Grid item xs={12}>
                  <Typography sx={{ opacity: 0.75 }}>
                    Tell us what you’re planning and we’ll recommend a route + schedule.
                  </Typography>
                </Grid>
              ) : null}
            </Grid>
          </Box>
        ))}

        {/* Extra anchors used by the mega-menu */}
        <Box id="family" sx={scrollAnchorSx} />
        <Box id="youth" sx={scrollAnchorSx} />
      </Stack>
    </Container>
  );
}
