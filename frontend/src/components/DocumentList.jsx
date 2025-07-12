import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton, CircularProgress, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useEffect, useState } from 'react';
import { deleteDocument } from '../services/api';


export default function DocumentList() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  async function fetchDocuments() {
    const res = await fetch('/api/documents');
    if (!res.ok) throw new Error('Failed to fetch documents');
    return res.json();
  }

  const loadDocuments = () => {
    setLoading(true);
    fetchDocuments()
      .then(setDocuments)
      .catch(() => setError('Failed to load documents'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadDocuments();
    // eslint-disable-next-line
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this document?')) return;
    setDeletingId(id);
    try {
      await deleteDocument(id);
      setDocuments(docs => docs.filter(doc => doc._id !== id));
    } catch (e) {
      alert('Failed to delete document');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <Paper sx={{ p: 3, mt: 3, width: '100%', margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Uploaded Documents
      </Typography>
      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {documents.map(doc => (
                <TableRow key={doc._id}>
                  <TableCell>{doc.originalName || doc.filename}</TableCell>
                  <TableCell>{doc.uploadDate ? new Date(doc.uploadDate).toLocaleDateString() : ''}</TableCell>
                  <TableCell>Indexed</TableCell>
                  <TableCell>
                    <IconButton><InfoIcon /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete(doc._id)} disabled={deletingId === doc._id}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
}