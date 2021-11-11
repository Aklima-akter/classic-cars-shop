import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import swal from 'sweetalert'

import { Grid } from '@mui/material'

const ManageProduct = ({ allProduct, allProducts, setAllProducts }) => {
  const handleDeleteProducts = (id) => {
    const url = `https://vast-bayou-43235.herokuapp.com/products/${id}`
    fetch(url, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.deletedCount > 0) {
          swal('Deleted', 'Delete Successfully', 'success')
          const remainingOrder = allProducts.filter(
            (allBook) => allBook._id !== id,
          )
          setAllProducts(remainingOrder)
        }
      })
  }
  const { img, name, price, description } = allProduct
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
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            ${price}
          </Typography>

          <Button
            onClick={() => handleDeleteProducts(allProduct._id)}
            sx={{ px: 3 }}
            variant="contained"
            color="success"
          >
            Delete
          </Button>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ManageProduct
