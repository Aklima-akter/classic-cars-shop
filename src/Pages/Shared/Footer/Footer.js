import { Button, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: '#F5F5F5',
        paddingTop: '50px',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom component="div">
            Contact with us
          </Typography>
          <IconButton aria-label="delete" size="large">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="delete" size="large">
            <YouTubeIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom component="div">
            Get Update Daily Email
          </Typography>
          <input
            style={{ padding: '7px', borderRadius: '5px' }}
            type="email"
            placeholder="Your Email"
          />
          <button
            style={{ padding: '7px', backgroundColor: 'green', color: 'white' }}
            type="submit"
          >
            SignUp
          </button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button sx={{ color: 'black', fontSize: '16' }}>FAQ</Button>
          <br />
          <Button sx={{ color: 'black', fontSize: '16' }}>
            All About Classic-car-shop
          </Button>
          <br />
          <Button sx={{ color: 'black', fontSize: '16' }}>
            Contact Us/Support
          </Button>
        </Grid>
      </Grid>
      <Typography sx={{ py: 8 }} variant="body1" gutterBottom component="div">
        © 2021 American City Business Journals. All Rights Reserved
      </Typography>
    </div>
  )
}

export default Footer
