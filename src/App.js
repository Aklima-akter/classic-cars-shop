import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home/Home/Home'
import Product from './Pages/Home/Home/Product/Product'
import Login from './Pages/Home/Login/Login/Login'
import Register from './Pages/Home/Login/Register/Register'
import AuthProvider from './context/AuthProvider/AuthProvider'
import PrivateRoute from './Pages/Home/Login/PrivateRoute/PrivateRoute'
import AllProducts from './Pages/AllProducts/AllProducts'
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard'
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder'
import Navigation from './Pages/Shared/Navigation/Navigation'
import PurchaseProducts from './Pages/PurchaseProducts/PurchaseProducts'
import Footer from './Pages/Shared/Footer/Footer'

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Product></Product>
            </Route>
            <Route path="/allProducts">
              <Navigation></Navigation>
              <AllProducts></AllProducts>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/purchaseProducts/:id">
              <Navigation></Navigation>
              <PurchaseProducts></PurchaseProducts>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/myOrder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  )
}

export default App
