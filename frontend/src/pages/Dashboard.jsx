
import { Typography, Box, Button, Paper, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const GradientPaper = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
  padding: theme.spacing(6),
  borderRadius: theme.spacing(4),
  boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 500,
  margin: 'auto',
}));

export default function Dashboard() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 88px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #f5faff 0%, #e3f2fd 100%)',
      py: 6,
    }}>
      <GradientPaper elevation={3}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: '#1976d2', mb: 2, letterSpacing: 1 }}>
          Welcome to IAE RAG Document QA
        </Typography>
        <Typography variant="h6" sx={{ color: '#333', mb: 4, textAlign: 'center' }}>
          Upload documents, ask questions, and manage your knowledge base with AI-powered retrieval.
        </Typography>
        <Stack direction="column" spacing={3} alignItems="center" sx={{ width: '100%' }}>
          <Button component={Link} to="/upload" variant="contained" size="large" sx={{ fontWeight: 600, px: 4, borderRadius: 3, boxShadow: '0 2px 8px rgba(25, 118, 210, 0.08)', width: 260 }}>
            Upload Document
          </Button>
          <Button component={Link} to="/ask" variant="outlined" size="large" sx={{ fontWeight: 600, px: 4, borderRadius: 3, color: '#1976d2', borderColor: '#1976d2', '&:hover': { background: '#e3f2fd' }, width: 260 }}>
            Ask a Question
          </Button>
        </Stack>
      </GradientPaper>
    </Box>
  );
}