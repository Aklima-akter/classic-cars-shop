import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import swal from 'sweetalert'
import useAuth from '../../hooks/useAuth'

const PurchaseProducts = () => {
  const [product, setProduct] = useState({})
  const [bookProduct, setBookProduct] = useState({})
  const { user } = useAuth()
  const { img, name, price, description } = product

  const { id } = useParams()
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [id])

  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newBookProduct = { ...bookProduct }
    newBookProduct[field] = value
    setBookProduct(newBookProduct)
    // console.log(field, value, newAddProducts)
  }

  const handleAddProducts = (e) => {
    const bookingProduct = { ...bookProduct }
    bookingProduct.status = 'pending'
    bookingProduct.email = user.email
    bookingProduct.name = product.name
    bookingProduct.price = product.price
    fetch('http://localhost:5000/allBooking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(bookingProduct),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.insertedId) {
          swal({
            title: 'Good job!',
            text: 'Products Add Successfully!',
            icon: 'success',
            button: 'okay!',
          })
          e.target.reset()
        }
      })
    e.preventDefault()
    console.log(bookingProduct)
  }
  return (
    <>
      <Typography
        sx={{ m: 5, textAlign: 'center', fontWeight: '700' }}
        gutterBottom
        variant="h4"
        component="div"
      >
        Purchase Your favourite cars
      </Typography>
      <Grid sx={{ mt: 12 }} container spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderTop: 5,
              borderColor: 'success.main',
              mx: 2,
            }}
          >
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
              <Typography
                sx={{ mt: 2 }}
                gutterBottom
                variant="h5"
                component="div"
              >
                ${price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid sx={{ mt: 7 }} item xs={12} md={6}>
          <form onSubmit={handleAddProducts}>
            <TextField
              disabled
              sx={{ width: '75%', mb: 3 }}
              id="outlined-basic"
              label={user.displayName}
              onBlur={handleOnBlur}
              name="name"
              variant="outlined"
            />
            <TextField
              required
              sx={{ width: '75%', mb: 3 }}
              id="outlined-basic"
              label="Phone Number"
              onBlur={handleOnBlur}
              name="Phone"
              variant="outlined"
            />
            <TextField
              disabled
              sx={{ width: '75%', mb: 3 }}
              id="outlined-basic"
              name="price"
              type="number"
              onBlur={handleOnBlur}
              label={price}
              variant="outlined"
            />
            <br />
            <Button type="submit" variant="contained" color="success">
              Booking
            </Button>
          </form>
        </Grid>
      </Grid>
    </>
  )
}

export default PurchaseProducts
