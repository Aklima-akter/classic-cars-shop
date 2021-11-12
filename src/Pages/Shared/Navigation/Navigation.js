import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { makeStyles } from '@mui/styles'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import useAuth from './../../../hooks/useAuth'
import { Button, useTheme } from '@mui/material'
import './Navigation.css'

const Navigation = () => {
  const { user, logOut } = useAuth()
  const theme = useTheme()
  const usestyle = makeStyles({
    navItem: {
      color: 'white',
      textDecoration: 'none',
    },
    navIcon: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    navItemContainer: {
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
  })

  const { navItem, navIcon } = usestyle()
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
            className={navIcon}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Classic Cars Shop
          </Typography>

          <Link className={navItem} to="/home">
            <Button color="inherit">Home</Button>
          </Link>
          <Link className={navItem} to="/allProducts">
            <Button color="inherit">Explore</Button>
          </Link>
          {user?.email ? (
            <Box>
              <Link className={navItem} to="/dashboard">
                <Button color="inherit">Dashboard</Button>
              </Link>
              <Button
                className={navItem}
                variant="contained"
                color="success"
                onClick={logOut}
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Link className={navItem} to="/login">
              <Button style={{ backgroundColor: 'white' }} color="success">
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
