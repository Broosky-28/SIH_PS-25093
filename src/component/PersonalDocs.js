// src/components/PersonalDocs.js
import React, { useState } from "react";
import { Container, Typography, Card, CardContent, Button, TextField } from "@mui/material";

export default function PersonalDocs() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Personal Documents
      </Typography>
      <Card>
        <CardContent>
          <Typography variant="body1">Upload your ID card or Marksheet</Typography>
          <TextField type="file" onChange={handleFileUpload} fullWidth sx={{ mt: 2 }} />
          {file && (
            <Typography sx={{ mt: 2 }}>
              Uploaded: {file.name}
            </Typography>
          )}
          <Button variant="contained" sx={{ mt: 2 }}>
            Save Document
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
