
import UploadForm from '../components/UploadForm';
import DocumentList from '../components/DocumentList';
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

export default function UploadPage() {
  return (
    <Box sx={{
      minHeight: 'calc(100vh - 88px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(120deg, #f5faff 0%, #e3f2fd 100%)',
      py: 6,
    }}>
      <Stack spacing={5} sx={{ width: '100%', maxWidth: 900, alignItems: 'center' }}>
        <GradientPaper elevation={3} sx={{ alignItems: 'center', textAlign: 'center', width: '100%' }}>
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#1976d2', mb: 2, letterSpacing: 1, textAlign: 'center' }}>
            Upload Documents
          </Typography>
          <Typography variant="body1" sx={{ color: '#333', mb: 3, textAlign: 'center' }}>
            Select or drag and drop your files below to add them to your knowledge base.
          </Typography>
          <UploadForm />
        </GradientPaper>
        <Paper elevation={2} sx={{ p: 4, borderRadius: 4, width: '100%', textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1976d2', mb: 2, textAlign: 'center' }}>Your Uploaded Documents</Typography>
          <DocumentList />
        </Paper>
      </Stack>
    </Box>
  );
}