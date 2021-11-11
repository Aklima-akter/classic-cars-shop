import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import swal from 'sweetalert'
import { Typography } from '@mui/material'

const AddReview = () => {
  const [addProduct, setAddProduct] = useState()
  const handleOnBlur = (e) => {
    const field = e.target.name
    const value = e.target.value
    const newAddProducts = { ...addProduct }
    newAddProducts[field] = value
    setAddProduct(newAddProducts)
    // console.log(field, value, newAddProducts)
  }
  const handleAddProducts = (e) => {
    const product = { ...addProduct }
    fetch('http://localhost:5000/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(product),
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
    console.log(product)
  }
  return (
    <div>
      <Typography
        sx={{ my: 5, color: 'success.main', fontWeight: '800' }}
        variant="h4"
        gutterBottom
        component="div"
      >
        Add Review
      </Typography>
      <form onSubmit={handleAddProducts}>
        <TextField
          sx={{ width: '75%', mb: 3 }}
          id="outlined-basic"
          label="name"
          onBlur={handleOnBlur}
          name="name"
          variant="outlined"
        />
        <TextField
          sx={{ width: '75%', mb: 3 }}
          id="outlined-textarea"
          label="Description"
          onBlur={handleOnBlur}
          name="Description"
          variant="outlined"
        />
        <TextField
          sx={{ width: '75%', mb: 3 }}
          id="outlined-basic"
          label="images"
          onBlur={handleOnBlur}
          name="images"
          variant="outlined"
        />
        <TextField
          sx={{ width: '75%', mb: 3 }}
          id="outlined-basic"
          label="Profession"
          onBlur={handleOnBlur}
          name="profession"
          variant="outlined"
        />
        <TextField
          sx={{ width: '75%', mb: 3 }}
          id="outlined-basic"
          name="rating"
          onBlur={handleOnBlur}
          label="Rating out of 5 "
          variant="outlined"
        />
        <br />
        <Button type="submit" variant="contained" color="success">
          Add Review
        </Button>
      </form>
    </div>
  )
}

export default AddReview
