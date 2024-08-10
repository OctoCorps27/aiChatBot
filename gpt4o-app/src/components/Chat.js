import React, { useState } from 'react';
import { TextField, Button, Typography, Box, List, ListItem, ListItemText, Divider, Paper, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';  
import { getGPTResponse } from '../apiService';

function Chat() {
  const [input, setInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const navigate = useNavigate(); 

  const handleSendMessage = async () => {
    try {
      const result = await getGPTResponse(input);
      const newChat = { user: input, bot: result };
      setChatHistory([...chatHistory, newChat]);
      setInput('');  // Clear the input field after sending
    } catch (error) {
      const errorChat = { user: input, bot: 'Error fetching response' };
      setChatHistory([...chatHistory, errorChat]);
    }
  };

  return (
    <Box 
      sx={{ 
        maxWidth: '600px', 
        margin: 'auto', 
        padding: '20px', 
        backgroundColor: '#e0f7fa', 
        borderRadius: '10px', 
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)' 
      }}
    >
      {/* Back Button */}
      <IconButton onClick={() => navigate('/')} color="primary">
        <ArrowBackIcon />
      </IconButton>

      <Typography variant="h4" gutterBottom textAlign="center">
        GPT-4o Chat
      </Typography>
      
      <Paper 
        elevation={3} 
        sx={{ 
          padding: '10px', 
          backgroundColor: '#ffffff', 
          borderRadius: '10px', 
          marginBottom: '20px' 
        }}
      >
        <List sx={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
          {chatHistory.map((chat, index) => (
            <div key={index}>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="body1" color="primary" style={{ fontWeight: 'bold' }}>User:</Typography>}
                  secondary={<Typography variant="body2" style={{ whiteSpace: 'pre-wrap', color: '#455a64' }}>{chat.user}</Typography>}
                />
              </ListItem>
              <ListItem alignItems="flex-start">
                <ListItemText
                  primary={<Typography variant="body1" color="secondary" style={{ fontWeight: 'bold' }}>GPT-4o:</Typography>}
                  secondary={
                    <Box
                      sx={{
                        padding: '10px',
                        backgroundColor: '#f5f5f5',
                        borderRadius: '8px',
                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        marginTop: '5px',
                        maxWidth: '100%',
                        wordBreak: 'break-word',
                        color: '#37474f'
                      }}
                    >
                      <Typography variant="body2" style={{ whiteSpace: 'pre-wrap' }}>
                        {chat.bot}
                      </Typography>
                    </Box>
                  }
                />
              </ListItem>
              <Divider variant="middle" component="li" style={{ margin: '10px 0' }} />
            </div>
          ))}
        </List>
      </Paper>

      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          label="Type your message"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ marginRight: '10px' }}
        />
        <IconButton 
          color="primary" 
          onClick={handleSendMessage}
          sx={{
            backgroundColor: '#00796b', 
            '&:hover': {
              backgroundColor: '#004d40'
            }
          }}
        >
          <SendIcon sx={{ color: '#ffffff' }} />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Chat;
