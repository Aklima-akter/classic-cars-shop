import { Button, Box, Typography } from '@mui/material'
import React, { useState, useEffect } from 'react'
// import useAuth from '../../../hooks/useAuth'
import swal from 'sweetalert'

const ManageOrder = () => {
  // const { user } = useAuth()
  const [allBooking, setAllBooking] = useState([])

  useEffect(() => {
    fetch(`https://vast-bayou-43235.herokuapp.com/allBooking`)
      .then((res) => res.json())
      .then((data) => setAllBooking(data))
  }, [])

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
        const url = `https://vast-bayou-43235.herokuapp.com/allBooking/${id}`
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

  //update status
  const handleOrderShipped = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once confirmed, you will not be able to cancel this Order!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        const url = `https://vast-bayou-43235.herokuapp.com/allBooking/${id}`
        fetch(url, {
          method: 'PUT',
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.modifiedCount > 0) {
              swal('Poof! Order shippement  Successfully!', {
                icon: 'success',
              })
            }
          })
      } else {
        swal('Order Shippedment Closed!')
      }
    })
  }

  return (
    <>
      <Typography variant="h3" gutterBottom component="div">
        Manage All Orders
      </Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {allBooking.map((booking) => (
          <div key={booking._id}>
            <Box
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
                color="error"
              >
                Delete
              </Button>
              <Button
                sx={{ ml: 1 }}
                onClick={() => handleOrderShipped(booking._id)}
                variant="contained"
                color="success"
              >
                {booking.status}
              </Button>
            </Box>
          </div>
        ))}
      </div>
    </>
  )
}

export default ManageOrder
