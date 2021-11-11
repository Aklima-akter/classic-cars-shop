import React, { useEffect, useState } from 'react'
import { Typography, Box, Grid } from '@mui/material'
import Review from '../Home/Review/Review'

const Reviews = () => {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetch('https://vast-bayou-43235.herokuapp.com/reviews')
      .then((res) => res.json())
      .then((data) => setReviews(data))
  }, [])
  return (
    <div>
      <Box sx={{ textAlign: 'center', pb: 2 }}>
        <Typography
          sx={{ my: 5, color: 'success.main', fontWeight: '800' }}
          variant="h4"
          gutterBottom
          component="div"
        >
          What Clients Say
        </Typography>
        <Typography
          sx={{ mb: 3, color: 'success.main' }}
          variant="body1"
          gutterBottom
          component="div"
        >
          We are always happy to hear your honest opinion <br /> about our
          service and <br />
          the experience <br /> that you get at our shop!
        </Typography>
      </Box>
      <Box sx={{ flexGrow: 1, mb: 5 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </Grid>
      </Box>
    </div>
  )
}

export default Reviews
