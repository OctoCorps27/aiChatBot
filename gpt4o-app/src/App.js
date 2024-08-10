import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Button, Typography } from '@mui/material';
import Home from './components/Home';
import Chat from './components/Chat';

function App() {
  return (
    <Router>
      <Container maxWidth="md" style={{ marginTop: '50px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
