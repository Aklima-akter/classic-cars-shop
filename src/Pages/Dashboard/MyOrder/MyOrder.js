import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import useAuth from '../../../hooks/useAuth'
import swal from 'sweetalert'

const MyOrder = () => {
  const { user } = useAuth()
  const [allBooking, setAllBooking] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/allBooking/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setAllBooking(data))
  }, [user?.email])

  //DELETE AN ORDER
  const handleDeleteOrder = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'You want to delete this booking!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `http://localhost:5000/allBooking/${id}`
        fetch(url, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result)
            if (result.deletedCount > 0) {
              swal('Deleted successfully!', {
                icon: 'success',
              })
              const remainingOrder = allBooking.filter(
                (allBook) => allBook._id !== id,
              )

              setAllBooking(remainingOrder)
            }
          })
      } else {
        swal('Delete Failed!')
      }
    })
  }
  return (
    <>
      <Typography variant="h3" gutterBottom component="div">
        My All Orders
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allBooking.map((booking) => (
          <Box
            key={booking._id}
            sx={{
              width: '300px',
              height: '150px',
              textAlign: 'center',
              border: 1,
              borderColor: 'grey.500',
              m: 5,
              py: 3,
              borderRadius: 5,
            }}
          >
            <strong>Email: </strong>
            {booking.email} <br /> <strong sx={{ ml: 2 }}>Name: </strong>
            {booking.name} <br />
            <Button
              onClick={() => handleDeleteOrder(booking._id)}
              variant="contained"
              color="success"
            >
              Delete
            </Button>
          </Box>
        ))}
      </div>
    </>
  )
}

export default MyOrder
