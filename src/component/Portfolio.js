import React from "react";
import { Container, Typography, Card, CardContent, Button } from "@mui/material";

export default function Portfolio() {
  const students = [
    { name: "Amit", username: "amit123" },
    { name: "Priya", username: "priya456" },
    { name: "Rahul", username: "rahul789" },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Student Portfolios
      </Typography>
      {students.map((s, idx) => {
        const url = `${window.location.origin}/share/${s.username}`;
        return (
          <Card key={idx} sx={{ mb: 2 }}>
            <CardContent>
              <Typography variant="h6">{s.name}</Typography>
              <Typography variant="body2">Username: {s.username}</Typography>
              <Button variant="outlined" sx={{ mt: 1 }} href={url}>
                Share Portfolio
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
}
