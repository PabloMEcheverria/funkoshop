import './assets/css/fonts.css';
import './assets/css/meyerReset.css';
import './assets/css/App.css';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/Shop/ShopPage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import CartIcon from './components/svgComponents/CartIcon';
import Header from './components/Header';
import Footer from './components/Footer';
import productsArr from './data/products.js';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/", 
      element: <HomePage />, 
      errorElement: <NotFoundPage />
    }, 
    {
      path: "/shop",
      element: <ShopPage />
    }
  ]);

  //let isAdminPanel = false;
  //let isLogged = false;
  const [itemsInCart, setItemsInChart] = useState([]);
  const headerMenu = ["shop", "contacto", "login", <CartIcon />];
  //const headerMenu = ["ver tienda", "admin", "salir"];

  const footerMenu = ["shop", "ingresar", "contacto"];
  //const footerMenu = ["shop", "registrarse", "ingresar", "contacto"];
  return (
    <>
      <Header headerMenu={headerMenu} itemsInCart={itemsInCart}/>
        <RouterProvider router={router} />
      <Footer footerMenu={footerMenu} />
    </>
  );
}

export default App;