
import { Box, Button, Typography, LinearProgress, Paper } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useRef, useState } from 'react';
import { uploadFile } from '../services/api';


export default function UploadForm({ onUploadSuccess }) {
  const fileInput = useRef();
  const [progress, setProgress] = useState(0);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    setError(null);
    setProgress(0);
    try {
      // Optionally, you can use XMLHttpRequest for progress, but here we keep it simple
      const res = await uploadFile(file);
      setProgress(100);
      setUploading(false);
      if (onUploadSuccess) onUploadSuccess(res);
    } catch (err) {
      setError('Upload failed');
      setUploading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h6" gutterBottom>
        Upload a Document
      </Typography>
      <Button
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onClick={() => fileInput.current.click()}
        disabled={uploading}
        sx={{ minWidth: 160 }}
      >
        {uploading ? 'Uploading...' : 'Select File'}
      </Button>
      <input
        type="file"
        hidden
        ref={fileInput}
        onChange={handleFileChange}
      />
      {progress > 0 && <LinearProgress variant="determinate" value={progress} sx={{ mt: 2 }} />}
      {error && <Typography color="error" sx={{ mt: 2 }}>{error}</Typography>}
    </Paper>
  );
}