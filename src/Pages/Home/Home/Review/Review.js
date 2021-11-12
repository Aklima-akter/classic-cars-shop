import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'

import Typography from '@mui/material/Typography'

import { Grid, Rating } from '@mui/material'

const Review = ({ review }) => {
  const { images, Description, name, profession, rating } = review
  // console.log(review)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderTop: 5, borderColor: 'success.main' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={images}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {Description.slice(0, 80)}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {profession}
          </Typography>

          <Rating name="read-only" value={rating} readOnly />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default Review
