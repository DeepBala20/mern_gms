import { useEffect, useState } from "react";
import { Link, json, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
function UpdateCategory(){

    const nav = useNavigate();
    const param = useParams();

    // const api = "";
    const api = "http://localhost:3333/category";
    const [category,setCategory] = useState({
        cid:"",
        category:""
    })

    useEffect(
        ()=>{
            fetch(api+'/'+param.id,{method:"GET"})
            .then(res=>res.json())
            .then(res=>setCategory(res))
        },[]
    );

    




    return(
 <div className="bg-slate-400" >
    <div className="pr-6 flex">
       
        <div className="p-6 flex justify-between border w-full " >
            <div className="w-full">
                <div className=" text-5xl font-bold font-mono text-center">
                    Categories
                </div>
                <div>
                    <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" >
                    <div className="mb-4">
                        <label className=" text-gray-700 text-3xl font-bold mb-2 w-1/3 mr-5">
                        category ID
                        </label>
                        <input id="uid" value={category.cid} type="number" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-1/4 bg-transparent mr-5"
                                onChange={(e)=>{setCategory({...category,cid:e.target.value})}}
                            ></input>
                        
                    </div> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        category
                        </label>
                        <input type="text" value={category.category} id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setCategory({...category,category:e.target.value})}}
                            ></input>
                    </div>
                    
                    <div className="flex items-center justify-evenly w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3"  
                                type="reset"
                                >
                            clear</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3 "
                                onClick={()=>{
                                    fetch(api+'/'+param.id,{method:"PATCH",
                                            body:JSON.stringify(category),
                                            headers:{"content-type":"application/json"}
                                        })
                                    .then((res)=>{
                                        Swal.fire({
                                            // position: "top-end",
                                            icon: "success",
                                            title: "Product Added to Cart Successfully",
                                            showConfirmButton: false,
                                            timer: 1500
                                          })
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
export default UpdateCategory;