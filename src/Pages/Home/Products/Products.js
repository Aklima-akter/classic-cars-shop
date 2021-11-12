import { Container, Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import Product from '../Home/Product/Product'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://vast-bayou-43235.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 6)))
  }, [])
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Typography sx={{ mb: 5 }} gutterBottom variant="h4" component="div">
          Popular Cars for Sale
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default Products
