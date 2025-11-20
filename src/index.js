import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './Component/Home';
// import Contact from './Component/Contact';
// import About from './Component/About';
// import Nav from './Component/Nav';
// import Error from './Component/Error';
// import Products from './Component/Products';
// import Login from './Component/Login';
// import Reg from './Component/Reg';
// import Productdetails from './Component/Productdetails';

const About = React.lazy(()=> import('./Component/About'));
const Home = React.lazy(()=> import('./Component/Home'));
const Contact = React.lazy(()=> import('./Component/Contact'));
const Nav = React.lazy(()=> import('./Component/Nav'));
const Error = React.lazy(()=> import('./Component/Error'));
const Products = React.lazy(()=> import('./Component/Products'));
const Login = React.lazy(()=> import('./Component/Login'));
const Reg = React.lazy(()=> import('./Component/Reg'));
const Productdetails = React.lazy(()=> import('./Component/Productdetails'));
import ThemeProvider from './Context/Themecontext';

//  const router = createBrowserRouter([
// {
//     path:'/',
//     element:<Nav />
// },
// {
// path:'/home',
// element:<Home />
// },
// {
//     path:'/about',
//     element:<About />
// }
// ]);

const router = createBrowserRouter([
    {
        path:'/',
        element:<Nav />,
        errorElement : <Error/>,
        children:[
            {
               index:'/home',
              element:<Home />
            },
            {
              path:'/home',
              element:
               <React.Suspense>
                <Home />
              </React.Suspense>
              
            },
                {
               path:'/contact',
              element: <React.Suspense>
                <Contact />
              </React.Suspense>
              
            },
                {
               path:'/about',
              element:
              <React.Suspense>
                <About />
              </React.Suspense>
              
            },
                {
               path:'/reg',
              element: <React.Suspense>
                <Reg />
              </React.Suspense>
              
            },
                {
               path:'/login',
              element: <React.Suspense>
                <Login />
              </React.Suspense>
              
            },
                {
               path:'/product',
              element: <React.Suspense>
                <Products />
              </React.Suspense>
           
            },
                  {
               path:'/productdetails/:pid',
              element: <React.Suspense>
                  <Productdetails />
              </React.Suspense>
          
            },
                   {
               path:'*',
              element:<Reg />
            }
            
        ]
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
 <RouterProvider router ={router}/>
  </ThemeProvider>
   
    

 
);


reportWebVitals();
