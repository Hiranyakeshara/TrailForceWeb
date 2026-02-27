'use client';

import * as React from 'react';
import { Container, Typography, Stack, Grid, TextField, Button, Alert, Card, CardContent } from '@mui/material';

export default function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error('Request failed');
      setStatus('sent');
      e.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <Container sx={{ py: { xs: 8, md: 10 } }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Stack spacing={1.2} sx={{ mb: 2 }}>
            <Typography variant="h3">Contact</Typography>
            <Typography sx={{ opacity: 0.78 }}>
              Tell us what you want to do (camp, hike, or ride), where, and your group size. We’ll reply with a plan.
            </Typography>
          </Stack>

          <Card>
            <CardContent>
              <Stack component="form" onSubmit={onSubmit} spacing={2}>
                <TextField name="name" label="Name" required />
                <TextField name="email" label="Email" type="email" required />
                <TextField name="phone" label="Phone (optional)" />
                <TextField name="message" label="Message" required multiline minRows={4} />

                <Stack direction="row" spacing={1}>
                  <Button type="submit" variant="contained" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending…' : 'Send'}
                  </Button>
                  <Button type="reset" variant="outlined" disabled={status === 'sending'}>
                    Clear
                  </Button>
                </Stack>

                {status === 'sent' && <Alert severity="success">Message sent! We’ll get back to you soon.</Alert>}
                {status === 'error' && (
                  <Alert severity="error">
                    Something went wrong. For now, you can refresh and try again.
                  </Alert>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 1 }}>
                Quick info
              </Typography>
              <Typography sx={{ opacity: 0.78 }}>
                • Guided camping, hikes, and cycle rides
                <br />
                • Private groups & corporate retreats
                <br />
                • Flexible locations (we can travel)
                <br />
                • Gear support available
              </Typography>

              <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
                Typical reply includes
              </Typography>
              <Typography sx={{ opacity: 0.78 }}>
                Route + difficulty, schedule, guide-to-guest ratio, safety checklist, and a clear price breakdown.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
