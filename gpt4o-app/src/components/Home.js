import React from 'react';
import { Typography, Box, Button, Container, Paper } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <Container 
      sx={{ 
        maxWidth: 'md', 
        marginTop: '40px', 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '20px', 
          borderRadius: '10px', 
          textAlign: 'center', 
          maxWidth: '500px', 
          width: '100%' 
        }}
      >
        <HomeIcon sx={{ fontSize: 60, color: '#00796b', marginBottom: '20px' }} />
        <Typography variant="h3" gutterBottom>
          Welcome to the Chat Application
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          This application allows you to chat with GPT-4o and explore its capabilities. 
          Feel free to send messages and receive responses from the AI.
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={() => navigate('/chat')} 
          sx={{ marginTop: '20px' }}
        >
          Start Chat
        </Button>
      </Paper>
    </Container>
  );
}

export default Home;
