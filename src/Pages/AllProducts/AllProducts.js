import { Grid, Container } from '@mui/material'
import Typography from '@mui/material/Typography'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import AllProduct from '../AllProduct/AllProduct'

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    fetch('https://vast-bayou-43235.herokuapp.com/products')
      .then((res) => res.json())
      .then((data) => setAllProducts(data))
  }, [])
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Typography
          sx={{ m: 5, textAlign: 'center', fontWeight: '600' }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Our All Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allProducts.map((allProduct) => (
            <AllProduct
              key={allProduct._id}
              allProduct={allProduct}
            ></AllProduct>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default AllProducts
