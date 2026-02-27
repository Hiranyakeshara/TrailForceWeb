import { Box, Container, Typography, Stack, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const values = [
  'Safety-first planning and qualified guides',
  'Small-group experiences with real attention',
  'Leave-no-trace mindset and local respect',
  'Great gear, clear briefings, and good vibes',
];

export default function AboutPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Grid container spacing={3} alignItems="stretch">
        <Grid item xs={12} md={7}>
          <Stack spacing={2}>
            <Typography variant="h3">About Trailforce</Typography>
            <Typography sx={{ opacity: 0.78, fontSize: 18 }}>
              Trailforce designs outdoor adventures for individuals, families, and teams—camping nights,
              hikes, and cycle rides—delivered at trusted routes or at your chosen locations.
            </Typography>
            <Typography sx={{ opacity: 0.78 }}>
              We focus on simple, memorable experiences: well-planned routes, safety briefings, and a
              smooth “show up and go” flow. From sunrise rides to overnight camps, we make it easy to
              get outside.
            </Typography>

            <Box id="safety" />
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 900 }}>
              Safety & Guides
            </Typography>
            <Typography sx={{ opacity: 0.78 }}>
              Every trip includes a clear plan, safety briefing, and guide coordination (lead/tail where needed).
              We match routes to your group’s experience level and keep timing, meeting points, and rest stops
              simple and predictable.
            </Typography>
          </Stack>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1.5 }}>
                What we stand for
              </Typography>
              <List dense>
                {values.map((v) => (
                  <ListItem key={v} disableGutters>
                    <ListItemIcon sx={{ minWidth: 34 }}>
                      <CheckCircleRoundedIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText primary={v} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
