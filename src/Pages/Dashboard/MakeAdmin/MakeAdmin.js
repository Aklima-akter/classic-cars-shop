import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import swal from 'sweetalert'

const MakeAdmin = () => {
  const [email, setEmail] = useState('')

  const handleOnBlur = (e) => {
    setEmail(e.target.value)
  }

  const handleAdminSubmit = (e) => {
    const user = { email }
    console.log(user)
    fetch('https://vast-bayou-43235.herokuapp.com/users/admin', {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          swal({
            title: 'Good job!',
            text: 'Products Add Successfully!',
            icon: 'success',
            button: 'okay!',
          })
        } else {
          swal('Failed!', 'Nothing Changes!', 'warning')
        }
        e.target.reset()
        console.log(data)
      })
    e.preventDefault()
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: '75%', m: 5 }}
          onBlur={handleOnBlur}
          label="Email"
          type="email"
          variant="standard"
        />
        <br />
        <Button
          sx={{ ml: 5, width: '25%' }}
          type="submit"
          variant="contained"
          color="success"
        >
          Make Admin
        </Button>
      </form>
    </div>
  )
}

export default MakeAdmin
