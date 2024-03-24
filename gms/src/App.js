import React from 'react'
import {BrowserRouter , Routes , Route, Router} from 'react-router-dom'
import Home from './pages/Home'
import Sign_in from './pages/Sign_in'
// import Header from './components/Header'
import Register from './pages/Register'
import Admin_home from './admin-panel/admin_home'
import All_grocery from './admin-panel/all_grocery'
import Product from './products/addproduct'
import GetAllGrocery from './admin-panel/all_product'
import ProductById from './admin-panel/productById'
import UpdateProduct from './admin-panel/update_product'
import GetAllUser from './admin-panel/all_user'
import UpdateUser from './admin-panel/update_user'
import GetAllCategory from './admin-panel/all_category'
import AddCategory from './admin-panel/add_category'
import UpdateCategory from './admin-panel/update_category'
import ClientGetAllGrocery from './client-side/client_allgrocery'
import ClientProductById from './client-side/client_getbyid'

export default function App() {
  const valid = 1;
  if(valid == 0){
    return (
      <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Admin_home/>}></Route>
            <Route path='/all-grocery' element={<All_grocery/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  else{
    return(
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/add-user' element={<Register/>} />
            <Route path='/add-category' element={<AddCategory/>} />
            <Route path='/all-user' element={<GetAllUser/>}/>
            <Route path='/all-category' element={<GetAllCategory/>}/>
            <Route path='/update-user/:id' element={<UpdateUser/>}/>
            <Route path='/admin' element={<Admin_home/>}></Route>
            <Route path='/all-grocery' element={<All_grocery/>}>
              <Route path='all-grocery/all-product' element={<GetAllGrocery/>}></Route>
              <Route path='all-grocery/all-product/:id' element={<ProductById/>}></Route>
            </Route>
            <Route path='/add-grocery' element={<Product/>}></Route>
            <Route path='/update-grocery/:id' element={<UpdateProduct/>}></Route>
            <Route path='/update-category/:id' element={<UpdateCategory/>}></Route>
            <Route path='/client-all-product' element={<ClientGetAllGrocery/>}></Route>
            <Route path='/client-all-product/:id' element={<ClientProductById/>}></Route>
          </Routes>
      </BrowserRouter>
    )
  }
  
}
