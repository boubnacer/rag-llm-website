
import { Box, Button, TextField, Typography, Paper, MenuItem, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import { askQuestion } from '../services/api';


export default function QueryForm() {
  const [question, setQuestion] = useState('');
  const [document, setDocument] = useState('');
  const [answer, setAnswer] = useState('');
  const [documents, setDocuments] = useState([]);
  const [loadingDocs, setLoadingDocs] = useState(true);
  const [errorDocs, setErrorDocs] = useState(null);

  useEffect(() => {
    setLoadingDocs(true);
    fetch('/api/documents')
      .then(res => res.json())
      .then(setDocuments)
      .catch(() => setErrorDocs('Failed to load documents'))
      .finally(() => setLoadingDocs(false));
  }, []);

  const [loadingAnswer, setLoadingAnswer] = useState(false);
  const [errorAnswer, setErrorAnswer] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingAnswer(true);
    setErrorAnswer(null);
    setAnswer('');
    try {
      const res = await askQuestion(question, document || undefined);
      if (res.answer) setAnswer(res.answer);
      else setErrorAnswer(res.error || 'No answer received');
    } catch (err) {
      setErrorAnswer('Failed to get answer');
    }
    setLoadingAnswer(false);
  };

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ask a Question
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', gap: 2 }}>
        <TextField
          label="Your Question"
          value={question}
          onChange={e => setQuestion(e.target.value)}
          fullWidth
        />
        <TextField
          select
          label="Document"
          value={document}
          onChange={e => setDocument(e.target.value)}
          sx={{ minWidth: 150 }}
          disabled={loadingDocs || !!errorDocs}
        >
          <MenuItem value="">All Documents</MenuItem>
          {loadingDocs ? (
            <MenuItem disabled value="loading">
              <CircularProgress size={18} sx={{ mr: 1 }} /> Loading...
            </MenuItem>
          ) : errorDocs ? (
            <MenuItem disabled value="error">Failed to load</MenuItem>
          ) : (
            documents.map(doc => (
              <MenuItem key={doc._id} value={doc._id}>
                {doc.originalName || doc.filename}
              </MenuItem>
            ))
          )}
        </TextField>
        <Button type="submit" variant="contained" disabled={loadingAnswer || !question.trim()}>
          {loadingAnswer ? <CircularProgress size={20} sx={{ color: '#fff' }} /> : 'Ask'}
        </Button>
      </Box>
      {errorAnswer && (
        <Typography color="error" sx={{ mt: 2 }}>{errorAnswer}</Typography>
      )}
      {answer && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Answer:</Typography>
          <Typography>{answer}</Typography>
        </Box>
      )}
    </Paper>
  );
}