import { Typography, Box, Grid, Container } from '@mui/material'

import React, { useState, useEffect } from 'react'
import ManageProduct from '../ManageProduct/ManageProduct'

const ManageProducts = () => {
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
          sx={{
            m: 5,
            textAlign: 'center',
            fontWeight: '600',
            color: 'success.main',
          }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Manage Products
        </Typography>
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {allProducts.map((allProduct) => (
            <ManageProduct
              key={allProduct._id}
              allProduct={allProduct}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
            ></ManageProduct>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default ManageProducts
