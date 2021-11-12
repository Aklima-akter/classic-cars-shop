// import { Container, Typography } from '@mui/material'
import { Container, Typography } from '@mui/material'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import './DashboardHome.css'

const DashBoardHome = () => {
  const { user } = useAuth()
  return (
    <Container style={{ margin: 'auto' }}>
      <Typography variant="h4">
        Welcome to our Dashboard: {user.displayName}
      </Typography>
    </Container>
  )
}

export default DashBoardHome
