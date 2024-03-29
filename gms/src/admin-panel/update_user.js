import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
function UpdateUser(){

    const nav = useNavigate();
    const param = useParams();

    // const api = "";
    const api = "http://localhost:3333/user";
    const [user,setUser] = useState({
        uid:"",
        role:"",
        username:"",
        password:"",
        email:"",
        mobileno:"",
        city:"",
    })

    useEffect(
        ()=>{
            fetch(api+'/'+param.id,{method:"GET"})
            .then(res=>res.json())
            .then(res=>setUser(res))
        },[]
    );

    




    return(
 <div className="bg-rose-100" >
    <div className="pr-6 flex">
        <div className="w-2/5">
            <img className="mt-36" src="images/user_bg.png"/>
        </div>
        <div className="p-6 flex justify-between border w-3/5 " >
            <div className="w-full">
                <div className=" text-5xl font-bold font-mono text-center">
                    Register
                </div>
                <div>
                    <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" >
                    <div className="mb-4">
                        <label className=" text-gray-700 text-3xl font-bold mb-2 w-1/3 mr-5">
                        UserID
                        </label>
                        <input id="uid" value={user.uid} type="number" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-1/4 bg-transparent mr-5"
                                onChange={(e)=>{setUser({...user,uid:e.target.value})}}
                            ></input>
                        <label className=" text-gray-700 text-3xl font-bold mb-2 w-1/2 mr-5">
                        Role
                        </label>
                        <input type="text" value={user.role} id="role" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-1/3 bg-transparent"
                                onChange={(e)=>{setUser({...user,role:e.target.value})}}
                            ></input>
                    </div> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        UserName
                        </label>
                        <input type="text" value={user.username} id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setUser({...user,username:e.target.value})}}
                            ></input>
                    </div>
                    <div className="mb-6 flex items-center justify-evenly">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Enter Password
                            </label>
                            <input type="password" value={user.password} id="pass" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                                    onChange={(e)=>{setUser({...user,password:e.target.value})}}
                                ></input>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Confirm Password
                            </label>
                            <input type="password" value={user.password} id="con_pass" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        Email
                        </label>
                        <input type="text" value={user.email} id="mail" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12 bg-transparent"
                                onChange={(e)=>{setUser({...user,email:e.target.value})}}
                            ></input>
                    </div>
                    <div className="mb-6 flex items-center justify-evenly">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Mobile
                            </label>
                            <input type="text" value={user.mobileno} id="mobile" pattern="[1-9][0-9]{9}" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                                    onChange={(e)=>{setUser({...user,mobileno:e.target.value})}}
                                ></input>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            city
                            </label>
                            <input type="text" value={user.city} id="city" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                                    onChange={(e)=>{setUser({...user,city:e.target.value})}}
                                ></input>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3"  
                                type="reset"
                                >
                            clear</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3 "
                                onClick={()=>{
                                    fetch(api+'/'+param.id,{method:"PATCH",
                                            body:JSON.stringify(user),
                                            headers:{"content-type":"application/json"}
                                        })
                                    .then((res)=>{
                                        nav('/all-user')
                                    })
                                }}
                            >update</button>
                    </div>
                    </form>
                </div>

            </div>
            
        </div>
    </div>
    </div>);
}
export default UpdateUser;