import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import swal from 'sweetalert'

const AddProducts = () => {
  const [addProduct, setAddProduct] = useState({})
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
    fetch('https://vast-bayou-43235.herokuapp.com/products', {
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
    <div style={{ textAlign: 'center' }}>
      <h2>Add products</h2>
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
          name="price"
          type="number"
          onBlur={handleOnBlur}
          label="price"
          variant="outlined"
        />
        <br />
        <Button type="submit" variant="contained" color="success">
          Add Product
        </Button>
      </form>
    </div>
  )
}

export default AddProducts
