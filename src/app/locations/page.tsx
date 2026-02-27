import { Container, Typography, Stack, Grid, Card, CardContent, Button } from '@mui/material';
import Link from '@/components/Link';
import { locations } from '@/components/data';

export default function LocationsPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3">Locations</Typography>
        <Typography sx={{ opacity: 0.78 }}>
          We run adventures at popular trails—and we can also come to your preferred location.
        </Typography>
      </Stack>

      <Grid container spacing={2.5}>
        {locations.map((l) => (
          <Grid key={l.name} item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent>
                <Stack spacing={1.2}>
                  <Typography variant="h6">{l.name}</Typography>
                  <Typography sx={{ opacity: 0.75 }}>{l.description}</Typography>
                  <Stack direction="row" spacing={1}>
                    <Button component={Link} href="/contact" variant="contained">
                      Request this location
                    </Button>
                    <Button component={Link} href="/adventures" variant="outlined">
                      View adventures
                    </Button>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
