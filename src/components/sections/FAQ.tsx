'use client';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import Reveal from '@/components/Reveal';
import { faqs } from '@/components/data';

export default function FAQ() {
  return (
    <Box id="faq" sx={{ py: { xs: 7, md: 9 }, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <Container>
        <Reveal>
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: 28, md: 40 } }}>
              FAQ
            </Typography>
            <Typography sx={{ opacity: 0.78, maxWidth: 720 }}>
              Quick answers to the common questions we get before an adventure.
            </Typography>
          </Stack>
        </Reveal>

        <Stack spacing={1.2}>
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.02}>
              <Accordion disableGutters>
                <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                  <Typography sx={{ fontWeight: 900 }}>{f.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ opacity: 0.78 }}>{f.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </Reveal>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
