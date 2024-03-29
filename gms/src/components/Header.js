// import React from "react";
// import { Link } from "react-router-dom";
// import Searchbar from "./Searchbar";
// import Cart from "./Cart";
// import Sign_in from "../pages/Sign_in";
// import Client_Sign_in from "../pages/clnt_sign_in";
// import { useGlobal } from "./GlobalContext";

// export default function Header() {

//   const { globalVariable } = useGlobal();
  

//   return (
//     <header className="bg-teal-900 sticky top-0 header ">
//       <div className="flex justify-between items-center mx-auto px-10 py-3">
//         <Link to="/" id="link">
//           <h1 className="flex flex-wrap font-bold items-baseline hover:scale-125">
//             <span className="text-slate-300 text-4xl">Bala's </span>
//             <span className="text-slate-100 text-2xl"> Grocery</span>
//           </h1>
//         </Link>
//         <ul className="flex gap-8 justify-between">
//           <a href="#home" id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Home
//             </li>
//           </a>
//           <a href="#features" id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Features
//             </li>
//           </a>
//           <a href="#products" id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Trending Products
//             </li>
//           </a>
//           {/* <a href="#products">all products</a> */}
//           <Link to="" id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Categories
//             </li>
//           </Link>
//           <Link to="" id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Review
//             </li>
//           </Link>
//           <Link to={'/profile'+'/'+globalVariable} id="link">
//             <li className="hover:underline hover:scale-125 text-slate-100">
//               Profile
//             </li>
//           </Link>
//         </ul>
//         <div className="icons">
//           <div className="fa fa-bars" id="menu-btn"></div>
//           <div className="fa fa-search" id="search-btn" onClick={
//             ()=>{
//               document.querySelector('.search-form').classList.toggle('active');
//             }
//           }></div>
//           <Link to='/cart'><div  className="fa fa-shopping-cart"></div></Link>
//           <Link to='/sign-in'><div className="fa fa-user" id="login-btn" 
//           // onClick={
//           //   ()=>{
//           //     document.querySelector('#clnt_sign-in_page').classList.toggle('active');
//           //   }
//           //   }
//             ></div></Link>
//           <div className="fa fa-cogs" id="login-btn" 
//           onClick={
//             ()=>{
//               document.querySelector('#sign-in_page').classList.toggle('active');
//             }
//             }
//             ></div>
//         </div>
//         <Searchbar/>
//         <Sign_in/>
//         {/* <Client_Sign_in/> */}
//       </div>
//     </header>
//   );
// }


import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import Cart from "./Cart";
import Sign_in from "../pages/Sign_in";
import Client_Sign_in from "../pages/clnt_sign_in";
import { useGlobal } from "./GlobalContext";

export default function Header() {

  const { globalVariable } = useGlobal();
  
  return (
    <header className="bg-teal-900 sticky top-0 header ">
      <div className="flex justify-between items-center mx-auto px-10 py-3">
        <Link to="/" id="link">
          <h1 className="flex flex-wrap font-bold items-baseline hover:scale-125">
            <span className="text-slate-300 text-4xl">Bala's </span>
            <span className="text-slate-100 text-2xl"> Grocery</span>
          </h1>
        </Link>
        <ul className="flex gap-8 justify-between">
          <a href="#home" id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              Home
            </li>
          </a>
          <a href="#features" id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              Features
            </li>
          </a>
          <a href="#products" id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              Trending Products
            </li>
          </a>
          <Link to="" id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              Categories
            </li>
          </Link>
          <Link to="" id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              Review
            </li>
          </Link>
          <Link to={globalVariable ? '/profile'+'/'+globalVariable : '/sign-in'} id="link">
            <li className="hover:underline hover:scale-125 text-slate-100">
              {globalVariable ? 'Profile' : 'profile'}
            </li>
          </Link>
        </ul>
        <div className="icons">
          {/* <div className="fa fa-bars" id="menu-btn"></div> */}
          {/* <div className="fa fa-search" id="search-btn" onClick={
            ()=>{
              document.querySelector('.search-form').classList.toggle('active');
            }
          }></div> */}
          <Link to={globalVariable ? '/cart' : '/sign-in'}><div  className="fa fa-shopping-cart"></div></Link>
          <Link to='/sign-in'><div className="fa fa-user" id="login-btn"></div></Link>
          <div className="fa fa-cogs" id="login-btn" 
          onClick={
            ()=>{
              document.querySelector('#sign-in_page').classList.toggle('active');
            }
            }
            ></div>
        </div>
        <Searchbar/>
        <Sign_in/>
      </div>
    </header>
  );
}
