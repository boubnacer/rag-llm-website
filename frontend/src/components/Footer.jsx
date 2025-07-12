import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        py: 3,
        px: 2,
        background: 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
        color: '#fff',
        textAlign: 'center',
        boxShadow: '0 -2px 16px 0 rgba(25,118,210,0.10)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 2 }}>
        Université Ibn Zohr
      </Typography>
      <Typography variant="subtitle1" sx={{ fontWeight: 500, mb: 1 }}>
        Faculté des Sciences Appliquées Ait Melloul
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 400 }}>
        <strong>Module :</strong> Apprentissage Profond
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 400 }}>
        <strong>Professeur :</strong> El mehdi Cherrat
      </Typography>
      <Divider sx={{ my: 1, background: 'rgba(255,255,255,0.2)' }} />
      <Typography variant="body1" sx={{ fontWeight: 400 }}>
        <strong>Équipe :</strong> Boubkraoui Nacer, Dib Mouhamed
      </Typography>
    </Box>
  );
}
