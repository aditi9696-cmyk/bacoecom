
import Home  from "../components/customer/home";
import ProductDetails from '../components/customer/productDetails';
import ProductList from '../components/customer/productList';
import Cart from "../components/customer/cart";
import ViewProducts from '../components/admin/adminDashboard'
import OrdersList from '../components/admin/orders'
import Inventory from '../components/admin/inventory'
import Login from '../components/profile/login'
import Register from '../components/profile/register'
import Customerlayout from '../layouts/customerLayout';
import Profilelayout from '../layouts/profileLayout'; 
import Adminlayout from '../layouts/adminLayout';
import ProtectedRoute from "../routes/ProtectedRoute";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Navigate } from 'react-router-dom'; 

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Customerlayout />,
      children: [
        { path: '', element: <Home/> },
        { path: 'productDetails', element: < ProductDetails/> },
        { path: 'productList', element: <ProductList/> },
        { path: 'cart', element: <Cart/> },
      ]
    },
    {
      path: '/profile',
      element: < Profilelayout/>,
      children:[
        { index: true, element: <Navigate to="login" replace /> }, 
        {path:'login',element:<Login/>},
        {path:'register',element:<Register/>}
      ]
      
    },
    {
      path: '/admin',
      element: <ProtectedRoute layout={<Adminlayout />}role="admin" redirectTo="/401" />,
      children:[
        {path:'products', element:<ViewProducts/>},
        {path:'', element:<ViewProducts/>},
        {path:'orders', element:<OrdersList />},
        {path:'inventory', element:<Inventory />}
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}
