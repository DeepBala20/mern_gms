import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGlobal } from "../components/GlobalContext";
import Swal from "sweetalert2";


export default function ClientGetAllGrocery(){
  const { globalVariable, setGlobalVariable } = useGlobal();

    const [product,setProduct] = useState([]);
    const api = "http://localhost:3333/grocery/";
    const cartapi = "http://localhost:3333/cart/add";
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
                                    nav('/client-all-product/'+val.pid);
                                }} className="btns w-1/3 h-20 " style={{padding:"5px 15px"}}>more details...</button>
                                <Link onClick={()=>{
                                    console.log(globalVariable)
                                    fetch(cartapi,{
                                        method:"POST",
                                        body:JSON.stringify({"userid":Number(globalVariable),"product":{
                                            "pid":val.pid,
                                            "pname":val.pname,
                                            "price":val.price,
                                            "category":val.category,
                                            "img":val.img
                                        }}),
                                        headers:{"content-type":"application/json"}
                                    }).then(
                                        Swal.fire({
                                                      // position: "top-end",
                                                      icon: "success",
                                                      title: "Product Added to Cart Successfully",
                                                      showConfirmButton: false,
                                                      timer: 1500
                                                    })
                                    )
                                }} className="btns w-1/3 h-20 " style={{padding:"5px 15px"}}>Add To Cart</Link>
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
            <Link to='/' className="btn btn-outline-primary">Back</Link>

        </>
    )
}