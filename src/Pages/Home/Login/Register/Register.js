import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import useAuth from '../../../../hooks/useAuth'

const Register = () => {
  const [logInData, setLogInData] = useState({})
  const history = useHistory()
  const { user, registerUser, isLoading, authError } = useAuth()
  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLogInData = { ...logInData }
    newLogInData[field] = value
    setLogInData(newLogInData)
  }
  const handleLogInSubmit = (e) => {
    if (logInData.password !== logInData.password2) {
      alert('password did not match')
      return
    }
    registerUser(logInData.email, logInData.password, logInData.name, history)
    e.preventDefault()
  }
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ borderRadius: '20px', width: '100%', marginTop: '140px' }}
            src="https://image.freepik.com/free-vector/set-three-types-work-cars-vintage-antique-style-white_1150-41650.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{ ml: 16, mt: 5, color: 'success.main' }}
            variant="h3"
            gutterBottom
            component="div"
          >
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLogInSubmit}>
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                label="Your name"
                type="text"
                name="name"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                label="Your email"
                type="email"
                name="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                label="Your password"
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                label="Retype Your password"
                variant="standard"
              />
              <br />
              <Button
                sx={{ width: '75%', m: 2 }}
                type="submit"
                variant="contained"
                color="success"
              >
                Register
              </Button>
              <Link
                style={{ textDecoration: 'none', margin: '10px' }}
                to="/login"
              >
                <Button variant="text">Already register? Please Login</Button>
              </Link>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Register Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}!</Alert>}
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
