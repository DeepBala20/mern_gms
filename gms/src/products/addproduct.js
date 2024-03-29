import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function Product(){

    const nav = useNavigate();
    // const api = "";
    const api = "http://localhost:3333/grocery/add";
    const api_cat = "http://localhost:3333/category";
    const [cat,setCat] = useState([]);
    useEffect(
        ()=>{
            fetch(api_cat).then(res=>res.json()).then(res=>setCat(res))
        },[]
    ) 
    const [product,setProduct] = useState({
        pid:"",
        pname:"",
        price:"",
        category:"",
        img:"",
    })

    const options = cat.map(val=><option>{val.category}</option>)

    return(
    <div className="register_bg pr-6 flex">
        <div className="w-2/5"></div>
        <div className="p-6 flex justify-between border w-3/5 " >
            <div className="w-full">
                <div className=" text-5xl font-bold font-mono text-center">
                    ADD Product
                </div>
                <div>
                    <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" >
                    <div className="mb-4">
                        <label className=" text-gray-700 text-3xl font-bold mb-2 w-1/3 mr-5">
                        ProductID
                        </label>
                        <input id="uid" type="number" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-1/4 bg-transparent mr-5"
                                onChange={(e)=>{setProduct({...product,pid:e.target.value})}}
                            ></input>
                
                    </div> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        Product Name
                        </label>
                        <input type="text" id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setProduct({...product,pname:e.target.value})}}
                            ></input>
                    </div>
                    <div className="mb-6 flex">
                        <div className="w-1/2">
                            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                            Price
                            </label>
                            <input type="Number" className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                                    onChange={(e)=>{setProduct({...product,price:e.target.value})}}
                                ></input>
                        </div>    
                    </div>

                     
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        category
                        </label>
                        {/* <input type="text" id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setProduct({...product,category:e.target.value})}}
                            ></input> */}
                            <select onChange={(e)=>{setProduct({...product,category:e.target.value})}} id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent">
                                <option disabled selected>select category from bellow</option>
                                {options}
                            </select>
                    </div> 
                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        Product Image
                        </label>
                        <input type="text" id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setProduct({...product,img  :e.target.value})}}
                            ></input>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-3xl font-bold mb-2">
                        Product Description
                        </label>
                        <input type="text" id="uname" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                onChange={(e)=>{setProduct({...product, desc:e.target.value})}}
                            ></input>
                    </div>

                    <div className="flex items-center justify-evenly w-full">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3"  
                                type="reset"
                                >
                            clear</button>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3 "
                                onClick={()=>{
                                    fetch(api,{method:"POST",
                                            body:JSON.stringify(product),
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
                            >Save</button>
            <button onClick={()=>{nav('/admin')}} className="btns float-end"  >back</button>

                    </div>
                    </form>
                </div>

            </div>
            
            
        </div>
        
    </div>);
}
export default Product;