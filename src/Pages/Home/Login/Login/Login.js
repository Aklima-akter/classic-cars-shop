import {
  Alert,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import useAuth from '../../../../hooks/useAuth'
import GoogleIcon from '@mui/icons-material/Google'

const Login = () => {
  const [logInData, setLogInData] = useState({})
  const { user, logInUser, authError, isLoading, signInwithGoogle } = useAuth()

  const location = useLocation()
  const history = useHistory()

  const handleOnChange = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newLogInData = { ...logInData }
    newLogInData[field] = value
    setLogInData(newLogInData)
  }
  const handleLogInSubmit = (e) => {
    logInUser(logInData.email, logInData.password, location, history)
    e.preventDefault()
  }

  const handleGoogleSignIn = () => {
    signInwithGoogle(location, history)
  }
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            style={{ borderRadius: '20px', width: '100%', marginTop: '60px' }}
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
            Login
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLogInSubmit}>
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                label="Your email"
                type="email"
                name="email"
                onBlur={handleOnChange}
                variant="standard"
              />
              <TextField
                sx={{ width: '75%', m: 2 }}
                id="standard-basic"
                type="password"
                name="password"
                onBlur={handleOnChange}
                label="Your password"
                variant="standard"
              />

              <br />
              <Button
                sx={{ width: '75%', m: 2 }}
                type="submit"
                variant="contained"
                color="success"
              >
                Login
              </Button>
              <Link
                style={{ textDecoration: 'none', margin: '10px' }}
                to="/register"
              >
                <Button variant="text">new user? Please Register</Button>
              </Link>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user?.email && (
            <Alert severity="success">Register Successfully!</Alert>
          )}
          {authError && <Alert severity="error">{authError}!</Alert>}
          <Button
            onClick={handleGoogleSignIn}
            sx={{ width: '75%', m: 2 }}
            type="submit"
            variant="contained"
            color="success"
          >
            <GoogleIcon />
            oogle Sign in
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
