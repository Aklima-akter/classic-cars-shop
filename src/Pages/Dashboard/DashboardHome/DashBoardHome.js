// import { Container, Typography } from '@mui/material'
import { Container, Typography } from '@mui/material'
import React from 'react'

import useAuth from '../../../hooks/useAuth'
import './DashboardHome.css'

const DashBoardHome = () => {
  const { user } = useAuth()
  return (
    <Container sx={{ margin: 8 }}>
      <Typography variant="h4">
        Welcome to our Dashboard:{' '}
        <span
          style={{ color: 'white', backgroundColor: 'green', padding: '10px' }}
        >
          {user.displayName}
        </span>
      </Typography>
    </Container>
  )
}

export default DashBoardHome
