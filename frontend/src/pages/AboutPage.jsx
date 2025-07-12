import { Box, Typography, Paper } from '@mui/material';

export default function AboutPage() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
      <Paper elevation={4} sx={{ maxWidth: 700, p: 4, borderRadius: 4, background: 'linear-gradient(90deg, #e3f2fd 0%, #bbdefb 100%)' }}>
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#1976d2' }}>
          À propos du site
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 18, mb: 2 }}>
          Ce site est un projet universitaire développé dans le cadre du module <b>Apprentissage Profond</b> à la Faculté des Sciences Appliquées Ait Melloul, Université Ibn Zohr.
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 17, mb: 2 }}>
          <b>Fonctionnalité principale :</b> Ce site permet de <b>poser des questions</b> sur le contenu de vos documents PDF grâce à l'intelligence artificielle (RAG - Retrieval Augmented Generation). Vous pouvez :
        </Typography>
        <ul style={{ fontSize: 16, marginLeft: 24, marginBottom: 16 }}>
          <li>Téléverser des documents PDF</li>
          <li>Consulter la liste des documents indexés</li>
          <li>Poser des questions sur un document ou sur l'ensemble des documents</li>
          <li>Obtenir des réponses précises générées par l'IA à partir du contenu de vos documents</li>
          <li>Supprimer des documents de la base</li>
        </ul>
        <Typography variant="body2" sx={{ color: '#1976d2', mt: 2 }}>
          Ce projet a été réalisé par l'équipe : Boubkraoui Nacer, Dib Mohamed. Professeur : El mehdi Cherrat.
        </Typography>
      </Paper>
    </Box>
  );
}
