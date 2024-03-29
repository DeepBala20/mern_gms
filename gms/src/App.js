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
import { GlobalProvider } from './components/GlobalContext'
import Cart from './components/Cart'
import Client_Sign_in from './pages/clnt_sign_in'
import Profile from './pages/profile'

export default function App() {
  const valid = 1;
  if(valid == 0){
    return (
      <GlobalProvider>
      <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Admin_home/>}></Route>
            <Route path='/all-grocery' element={<All_grocery/>}></Route>
          </Routes>
      </BrowserRouter>
      </GlobalProvider>
    )
  }
  else{
    return(
      <GlobalProvider>
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
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/sign-in' element={<Client_Sign_in/>}></Route>
            <Route path='/profile/:id' element={<Profile/>}></Route>
          </Routes>
      </BrowserRouter>
      </GlobalProvider>
    )
  }
  
}

// import React from 'react';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// import Home from './pages/Home';
// import Sign_in from './pages/Sign_in';
// import Register from './pages/Register';
// import Admin_home from './admin-panel/admin_home';
// import All_grocery from './admin-panel/all_grocery';
// import Product from './products/addproduct';
// import GetAllGrocery from './admin-panel/all_product';
// import ProductById from './admin-panel/productById';
// import UpdateProduct from './admin-panel/update_product';
// import GetAllUser from './admin-panel/all_user';
// import UpdateUser from './admin-panel/update_user';
// import GetAllCategory from './admin-panel/all_category';
// import AddCategory from './admin-panel/add_category';
// import UpdateCategory from './admin-panel/update_category';
// import ClientGetAllGrocery from './client-side/client_allgrocery';
// import ClientProductById from './client-side/client_getbyid';
// import { GlobalProvider, useGlobal } from './components/GlobalContext';
// import Cart from './components/Cart';
// import Client_Sign_in from './pages/clnt_sign_in';

// export default function App() {
//   var { globalVariable , setGlobalVariable} = useGlobal();
//   const  isLoggedIn  =  globalVariable;

//   return (
//     <GlobalProvider>
//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/add-user' element={<Register />} />
//           {/* Add a private route for authenticated users */}
//           {isLoggedIn!='initialValue' && (
//             <>
//               <Route path='/add-category' element={<AddCategory />} />
//               <Route path='/all-user' element={<GetAllUser />} />
//               <Route path='/all-category' element={<GetAllCategory />} />
//               <Route path='/update-user/:id' element={<UpdateUser />} />
//               <Route path='/admin' element={<Admin_home />} />
//               <Route path='/all-grocery' element={<All_grocery />}>
//                 <Route path='all-grocery/all-product' element={<GetAllGrocery />} />
//                 <Route path='all-grocery/all-product/:id' element={<ProductById />} />
//               </Route>
//               <Route path='/add-grocery' element={<Product />} />
//               <Route path='/update-grocery/:id' element={<UpdateProduct />} />
//               <Route path='/update-category/:id' element={<UpdateCategory />} />
//               <Route path='/client-all-product' element={<ClientGetAllGrocery />} />
//               <Route path='/client-all-product/:id' element={<ClientProductById />} />
//               <Route path='/cart' element={<Cart />} />
//             </>
//           )}
//           <Route path='/sign-in' element={<Client_Sign_in />} />
//           {/* Redirect to sign-in page if not authenticated */}
//           {isLoggedIn=='initialValue' && <Navigate to='/sign-in' />}
//         </Routes>
//       </BrowserRouter>
//     </GlobalProvider>
//   );
// }
