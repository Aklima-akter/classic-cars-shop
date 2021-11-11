import { Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

const ContactUs = () => {
  const handleForm = (e) => {
    e.preventDefault()
  }
  return (
    <Container sx={{ bgcolor: 'success.main', p: 5, textAlign: 'center' }}>
      <Typography sx={{ color: 'white' }} variant="h4" component="div">
        Always Contact with us
      </Typography>
      <form onSubmit={handleForm}>
        <TextField
          required
          id="outlined-required"
          sx={{ bgcolor: 'white', width: '70%', my: 3 }}
          defaultValue="Your Email"
        />
        <TextField
          required
          sx={{ bgcolor: 'white', width: '70%' }}
          id="outlined-required"
          defaultValue="Subject"
        />
        <TextField
          id="outlined-multiline-static"
          sx={{ bgcolor: 'white', width: '70%', my: 3 }}
          multiline
          rows={4}
          defaultValue="Your Message"
        />
        <br />
        <Button
          variant="contained"
          sx={{ backgroundColor: 'white', color: 'black', mb: 5, px: 3, py: 1 }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}

export default ContactUs
