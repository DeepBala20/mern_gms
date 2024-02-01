import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function Register(){

    const nav = useNavigate();
    const api = "http://localhost:3333/user/add";
    const [user,setUser] = useState({
        username:"",
        password:"",
        email:"",
        mobileno:"",
        city:"",
    })


    return(
    <div>
        <div className="m-10 p-6 flex justify-between border">
            <div className="w-full">
                <div className="bg-teal-300 text-5xl font-bold font-mono text-center">
                    Register
                </div>
                <div>
                    <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        UserName
                        </label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12"
                                onChange={(e)=>{setUser({...user,username:e.target.value})}}
                            ></input>
                    </div>
                    <div className="mb-6 flex items-center justify-evenly">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Enter Password
                            </label>
                            <input type="password" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"
                                    onChange={(e)=>{setUser({...user,password:e.target.value})}}
                                ></input>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Confirm Password
                            </label>
                            <input type="password" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        Email
                        </label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12"
                                onChange={(e)=>{setUser({...user,email:e.target.value})}}
                            ></input>
                    </div>
                    <div className="mb-6 flex items-center justify-evenly">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Mobile
                            </label>
                            <input type="text" pattern="[1-9][0-9]{9}" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"
                                    onChange={(e)=>{setUser({...user,mobileno:e.target.value})}}
                                ></input>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            city
                            </label>
                            <input type="text" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"
                                    onChange={(e)=>{setUser({...user,city:e.target.value})}}
                                ></input>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3" type="button" onClick={()=>{ }}>clear</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-full "
                                onClick={()=>{
                                    fetch(api,{method:"POST",
                                            body:JSON.stringify(user),
                                            headers:{"content-type":"application/json"}
                                        })
                                    .then((res)=>{
                                        nav('/sign-in')
                                    })
                                }}
                            >Save</button>
                    </div>
                    </form>
                </div>

            </div>
            
        </div>
    </div>);
}
export default Register;