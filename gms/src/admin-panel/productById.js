import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductById(){
    const [product,setProduct] = useState({});
    const param = useParams();
    const nav = useNavigate();
    const api = "http://localhost:3333/grocery";

    useEffect(
        ()=>{
            fetch(api+"/"+param.id,{method:"GET"})
            .then(res=>res.json())
            .then(res=>setProduct(res))
        },[]
    )

    return(
        <div className=" m-5 border border-light row" style={{width:"150vh",height:"70vh"}}>
            <div className="col-6 p-5">
                <img src={product.img} className="h-75 w-75 "/>
                <div className="flex justify-around w-75">
                    <button onClick={()=>{
                        fetch(api+'/'+product.pid,{method:"DELETE"}).then(res=>{nav('/all-grocery/all-grocery/all-product')})
                    }} className="btns w-1/3 h-10 " style={{padding:"5px 15px"}}>delete</button>
                    <button onClick={()=>{
                        nav('/update-grocery'+"/"+product.pid)
                    }} className="btns w-1/3 h-10 " style={{padding:"5px 15px"}}>update</button>    
                </div>           
            </div>
            <div className="col-6 "></div>
        </div>

    )
}