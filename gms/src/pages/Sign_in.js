import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

export default function Sign_in() {
  const api = "http://localhost:3333/user/login";
  const nav = useNavigate();
  const [user,setUser] = useState({
    
    username:"",
    password:"",
})



  return (
    <div className="m-10 p-6 flex justify-between  bg-yellow-100" id="sign-in_page">
      <div className="w-4/6">
      <div className=" text-4xl font-bold font-mono text-center">
        SIGN - IN
      </div>
      <div>
        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-3xl font-bold mb-2"  >
              UserName
            </label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                onChange={(e)=>{setUser({...user,username:e.target.value})}}
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
              Enter password
            </label>
            <input type="password" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent" 
                onChange={(e)=>{setUser({...user,password:e.target.value})}}
            ></input>
          </div>
          {/* <div className="mb-6">
            <label className="text-gray-700 text-3xl font-bold mb-2 mr-5">Role :</label>
            <input id="admin" type="radio" name="role" value={"admin"} className="mr-5"/>
            <label for="admin" className="text-gray-700 text-3xl font-bold mb-2 mr-5">admin</label>
            <input id="user" type="radio" name="role" value={"user"} className="mr-5"/>            
            <label for="user" className="text-gray-700 text-3xl font-bold mb-2 mr-5">user</label>
          </div> */}
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow" type="button"
              onClick={()=>{
                fetch(api,{method:"POST",
                        body:JSON.stringify(user),
                        headers:{"content-type":"application/json"}
                    })
                .then((res)=>{
                  if(res.status == 200){
                    Swal.fire({
                      // position: "top-end",
                      icon: "success",
                      title: "Login Successfully",
                      showConfirmButton: false,
                      timer: 1500
                    });
                    nav('/admin');
                    console.log(res)
                  }
                  else{
                    Swal.fire({
                      icon: "error",
                      title: "Oops...",
                      text: res.message,
                      footer: '<a href="#">Why do I have this issue?</a>'
                    });
                    nav('/');
                  }
                })
            }}
            >Sign-in</button>
          </div>
        </form>
      </div>
      </div>
      <div className="border border-cyan-500 w-96 h-96">
          <img style={{height:"100%",width:"100%"}} src="./assets/login_front.jpeg" />
      </div>
    </div>
  );
}
