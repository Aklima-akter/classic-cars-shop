import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const AllProduct = ({ allProduct }) => {
  const { _id, img, name, price, description } = allProduct
  //   console.log(allProduct)
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ borderTop: 5, borderColor: 'success.main' }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name.slice(0, 20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>
          <Link
            style={{ textDecoration: 'none' }}
            to={`/purchaseProducts/${_id}`}
          >
            <Button sx={{ px: 3 }} variant="contained" color="success">
              Buy Now
              <ShoppingCartIcon />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default AllProduct
