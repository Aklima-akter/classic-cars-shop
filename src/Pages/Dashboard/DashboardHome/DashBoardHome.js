// import { Container, Typography } from '@mui/material'
import { Typography } from '@mui/material'
import React from 'react'
import useAuth from '../../../hooks/useAuth'
import './DashboardHome.css'

const DashBoardHome = () => {
  const { user } = useAuth()
  return (
    <div
      style={{
        backgroundColor: 'grey',
        height: '1000px',
        margin: '0',
        paddingLeft: '0',
      }}
    >
      <Typography variant="h4">
        Welcome to our Dashboard {user.displayName}
      </Typography>
    </div>
  )
}

export default DashBoardHome
