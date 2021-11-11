import { Button, Grid, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import React from 'react'
import { Link } from 'react-router-dom'

const HomeBanner = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Grid style={{ margin: '150px auto' }} item xs={12} md={6}>
          <Typography
            sx={{ color: 'success.main', fontWeight: 'bold' }}
            variant="h4"
            gutterBottom
            component="div"
          >
            What our partners recommend
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            One-Family-Owned 1951 Kaiser Special
          </Typography>
          <Typography variant="body1" gutterBottom component="div">
            Leave the pavement behind and take on challenging conditions with
            confidence in the One-Family-Owned 1951 Kaiser Special.
          </Typography>

          <Link style={{ textDecoration: 'none' }} to="/products">
            <Button sx={{ px: 3 }} variant="contained" color="success">
              Explore
              <ArrowRightAltIcon />
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          sx={{ boxShadow: 3 }}
          style={{ width: '90%', marginTop: '50px' }}
          src="https://i.ibb.co/bH2smfP/Ho.jpg"
          alt=""
        />
      </Grid>
    </Grid>
  )
}

export default HomeBanner
