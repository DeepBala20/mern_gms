import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ClientProductById(){
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
                    <button  className="btns w-1/3 h-10 " style={{padding:"5px 15px"}}>addtocart</button>
                    <button onClick={()=>{
                        nav('/client-all-product')
                    }} className="btns w-1/3 h-10 " style={{padding:"5px 15px"}}>back</button>    
                </div>           
            </div>
            <div className="col-6 p-5">
                    <div className="d-flex flex-col">
                        <span className="text-4xl font-semibold">{product.pname}</span>
                        <br></br>
                        <span><span className="text-5xl font-extrabold">{product.price} </span><span className="text-3xl font-mono">RS per PKT</span></span>
                        <br></br>
                        <span className="text-2xl font-serif">{product.category}</span>
                        <br></br>
                        <p className="font-serif overflow-y-auto h-52">{product.desc}</p>
                    </div>
            </div>
        </div>

    )
}