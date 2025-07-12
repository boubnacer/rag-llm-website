
import QueryForm from '../components/QueryForm';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const GradientPaper = styled(Paper)(({ theme }) => ({
  background: 'linear-gradient(135deg, #e3f2fd 0%, #fff 100%)',
  padding: theme.spacing(5),
  borderRadius: theme.spacing(4),
  boxShadow: '0 8px 32px 0 rgba(25, 118, 210, 0.10)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 600,
  margin: 'auto',
  mt: 6,
}));

export default function AskPage() {
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
        <Typography variant="h4" sx={{ fontWeight: 800, color: '#1976d2', mb: 2, letterSpacing: 1, textAlign: 'center' }}>
          Ask a Question
        </Typography>
        <Typography variant="body1" sx={{ color: '#333', mb: 3, textAlign: 'center' }}>
          Enter your question below to get instant answers from your uploaded documents.
        </Typography>
        <QueryForm />
      </GradientPaper>
    </Box>
  );
}