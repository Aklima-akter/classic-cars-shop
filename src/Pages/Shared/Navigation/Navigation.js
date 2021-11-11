import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import useAuth from './../../../hooks/useAuth'
import { Button } from '@mui/material'

const Navigation = () => {
  const { user, logOut } = useAuth()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'success.main' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Classic Cars Shop
          </Typography>

          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '15px',
              fontWeight: 600,
              fontSize: 18,
            }}
            to="/home"
          >
            Home
          </Link>
          <Link
            style={{
              color: 'white',
              textDecoration: 'none',
              marginRight: '15px',
              fontWeight: 600,
              fontSize: 18,
            }}
            to="/allProducts"
          >
            Explore
          </Link>
          {user?.email ? (
            <Box>
              <Link
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginRight: '15px',
                  fontWeight: 600,
                  fontSize: 18,
                }}
                to="/dashboard"
              >
                Dashboard
              </Link>
              <Button
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  marginRight: '15px',
                  fontWeight: 600,
                  fontSize: 18,
                }}
                onClick={logOut}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Link
              style={{
                color: 'white',
                textDecoration: 'none',
                marginRight: '15px',
                fontWeight: 600,
                fontSize: 18,
              }}
              to="/login"
            >
              <Button
                style={{ color: 'white', fontWeight: 500, fontSize: 18 }}
                color="success"
              >
                Login
              </Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navigation
