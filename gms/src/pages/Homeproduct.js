import { Link } from "react-router-dom"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Homeproduct(){
    const [product,setProduct] = useState([]);
    const api = "http://localhost:3333/grocery/";
    const nav =useNavigate();
    useEffect(
        ()=>{
            fetch(api)
            .then(res=>res.json())
            .then(res=>setProduct(res))
        },[]
    )


    const formattedGrocery  = 
        product.map((val)=>{
            return <div className="col-3 " style={{height:"450px",margin:"30px",width:"250px"}}>
                        <div className="allproductbox h-100 w-100" style={{float:"left"}}>
                            <div className="feature-img"><img src={val.img}></img></div>
                            <h1>{val.pname}</h1>
                            <div className="price">{val.price}</div>
                            <div className="price">{val.category}</div>
                            <div className="flex justify-around">
                                <button onClick={()=>{
                                    nav('/client-all-product/'+val.pid);
                                }} className="btns w-1/3 h-20 " style={{padding:"5px 15px"}}>more details...</button>
                                <Link onClick={()=>{}} className="btns w-1/3 h-20 " style={{padding:"5px 15px"}}>Add To Cart</Link>
                            </div>
                        </div>
                    </div>
        })
    
    return(
        <section className="products" id="products">
                <br></br>
                <br></br>
                <br></br>
                <br></br>

            <h1 className="heading">Trending <span className="bg-teal-900 m-4 mt-24">Products</span></h1>
            
            <div className="product-slider overflow-x-scroll overflow-y-hidden ms-36 me-36">
                <div className="wrapper">
                    
                {formattedGrocery}


                </div>
            </div> 
            
            <Link to={''} className="btns float-end me-20">View More Products..</Link>
            
            <br></br>
                <br></br>
                <br></br>
                <br></br>
        </section>
    )
}