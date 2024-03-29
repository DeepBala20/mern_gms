import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function GetAllGrocery(){
    const [product,setProduct] = useState([]);
    const api = "http://localhost:3333/grocery/";
    const nav =useNavigate();
    useEffect(
        ()=>{
            fetch(api)
            .then(res=>res.json())
            .then(res=>setProduct(res))
        },
    )

    const formattedGrocery  = 
        product.map((val)=>{
            return <div className="col-3 mx-5" style={{height:"600px",margin:"30px"}}>
                        <div className="allproductbox " style={{float:"left"}}>
                            <div className="feature-img"><img src={val.img}></img></div>
                            <h1>{val.pname}</h1>
                            <div className="price">{val.price}</div>
                            <div className="price">{val.category}</div>
                            <div className="flex justify-around">
                                <button onClick={()=>{
                                    nav('/all-grocery/all-grocery/all-product/'+val.pid);
                                }} className="btns  h-20 " style={{padding:"5px 15px"}}>more details...</button>
                            </div>
                        </div>
                    </div>
        })

    return(
        <>  <div>
            <div className="row">
            {formattedGrocery}
            </div>
            </div>
        </>
    )
}