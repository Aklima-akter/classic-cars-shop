import * as React from 'react'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import MakeAdmin from '../MakeAdmin/MakeAdmin'
import ManageOrder from '../ManageOrder/ManageOrder'
import AddProducts from '../AddProducts/AddProducts'
import AddReview from '../AddReview/AddReview'
import MyOrder from '../MyOrder/MyOrder'
import PaymentProccess from '../PaymentProccess/PaymentProccess'
import useAuth from '../../../hooks/useAuth'
import DashBoardHome from '../DashboardHome/DashBoardHome'
import ManageProducts from '../ManageProducts/ManageProducts'

const drawerWidth = 200

function Dashboard(props) {
  const { admin } = useAuth()
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  let { path, url } = useRouteMatch()
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      {!admin && (
        <Box>
          <Link style={{ textDecoration: 'none' }} to="/allProducts">
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              AllProducts
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/myOrder`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              My Order
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/addReview`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Add reviews
            </Button>
          </Link>

          <Link
            style={{ textDecoration: 'none' }}
            to={`${url}/paymentProccess`}
          >
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Payment
            </Button>
          </Link>
        </Box>
      )}

      {admin && (
        <Box>
          <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Make Admin
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Manage Products
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} to={`${url}/manageOrder`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Manage Order
            </Button>
          </Link>

          <Link style={{ textDecoration: 'none' }} to={`${url}/addProducts`}>
            <Button style={{ fontWeight: 500, fontSize: 18 }} color="success">
              Add Products
            </Button>
          </Link>
        </Box>
      )}
    </div>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route exact path={path}>
            <DashBoardHome></DashBoardHome>
          </Route>
          <Route path={`${path}/makeAdmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/myOrder`}>
            <MyOrder></MyOrder>
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProducts></AddProducts>
          </Route>
          <Route path={`${path}/addReview`}>
            <AddReview></AddReview>
          </Route>
          <Route path={`${path}/paymentProccess`}>
            <PaymentProccess></PaymentProccess>
          </Route>
        </Switch>
      </Box>
    </Box>
  )
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default Dashboard
