import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material'
import Home from './components/Home'
import About from './components/About'
import User from './components/User'

function App() {
  
  return (
    <BrowserRouter>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' sx={{ flexGrow: 1}}>
            My App
          </Typography>
          <Button component={Link} to="/" color="inherit">Home</Button>
          <Button component={Link} to="/about" color="inherit">About</Button>
          <Button component={Link} to="/user/1" color="inherit">User</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user/:id' element={<User />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
