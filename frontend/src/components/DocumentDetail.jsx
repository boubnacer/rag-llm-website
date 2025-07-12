import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function DocumentDetail({ document }) {
  // TODO: Receive document prop and show details
  const chunks = [
    'Chunk 1 text...',
    'Chunk 2 text...',
    // ...more chunks
  ];

  return (
    <Paper sx={{ p: 3, mt: 3 }}>
      <Typography variant="h6">Document Details</Typography>
      <Typography>Name: {document?.name}</Typography>
      <Typography>Date: {document?.date}</Typography>
      <Typography>Status: {document?.status}</Typography>
      <Typography sx={{ mt: 2 }}>Chunks:</Typography>
      <List>
        {chunks.map((chunk, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={chunk} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}