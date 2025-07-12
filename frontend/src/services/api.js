const BASE = '/api'

export async function uploadFile(file) {
  const formData = new FormData()
  formData.append('file', file)
  const res = await fetch(`${BASE}/upload`, {
    method: 'POST',
    body: formData,
  })
  return res.json()
}


export async function askQuestion(question, docId) {
  const res = await fetch(`${BASE}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(docId ? { question, docId } : { question }),
  });
  return res.json();
}

export async function deleteDocument(docId) {
  const res = await fetch(`${BASE}/documents/${docId}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Failed to delete document');
  return res.json();
}