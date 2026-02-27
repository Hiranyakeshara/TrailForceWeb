import { Container, Typography, Stack, Grid, Card, CardContent, Chip } from '@mui/material';
import { adventures } from '@/components/data';

export default function AdventuresPage() {
  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Stack spacing={1} sx={{ mb: 4 }}>
        <Typography variant="h3">Adventures</Typography>
        <Typography sx={{ opacity: 0.78 }}>
          Choose a signature experience—or ask us to tailor a day for your group.
        </Typography>
      </Stack>

      <Grid container spacing={2.5}>
        {adventures.map((a) => (
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
      </Grid>
    </Container>
  );
}
