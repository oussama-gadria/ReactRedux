import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProductsFunc from "./consommation/Products";
import NotFound from "./consommation/NotFound";
import ProductDetails from "./consommation/ProductDetails";
import NavBarComponent from "./consommation/NavBarComponent";
/*const Products = React.lazy(()=> import('./Components/Products'))
const NotFound = React.lazy(()=> import('./Components/NotFound'))
const NavbarComponent = React.lazy(()=> import('./Components/NavBarComponent'))
const ProductDetails = React.lazy(()=> import('./Components/ProductDetails'))
*/ 
import ProductDetailsApi from "./consommation/ProductDetailsApi";
import AddProduct from "./consommation/AddProduct";
import UpdateProduct from "./consommation/UpdateProduct";

function App() {
  return (
    <>
      {/* <h1> Invoquer un service Web à partir d'un composant de classe</h1>
    <PersonList/> 
    <h1> Invoquer un service Web à partir d'un composant fonctionnel</h1>
    <PersonListFunc/> */}

      <NavBarComponent />
      <Routes>
        <Route path="/products">
          <Route path="add" replace={true} element={<AddProduct />} />
          <Route path="list" element={<ProductsFunc />} />
          <Route path="update/:id" element={<UpdateProduct />} />
          <Route path=":id/:like" element={<ProductDetailsApi />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
