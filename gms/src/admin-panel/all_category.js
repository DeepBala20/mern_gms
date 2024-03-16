import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function GetAllCategory(){
    const [category,setCategory] = useState([]);
    const api = "http://localhost:3333/category";
    const nav =useNavigate();
    useEffect(
        ()=>{
            fetch(api)
            .then(res=>res.json())
            .then(res=>setCategory(res))
        },
    )

    const formattedGrocery  = 
        category.map((val)=>{
            return <>
                <div className="row bg-slate-500 mx-12 my-8 h-20 text-white">
                    <div className="col-1 text-center font-bold text-3xl pt-4">{val.cid}</div>
                    <div className="col-2"></div>
                    <div className="col-3 text-center font-bold text-3xl pt-4" >{val.category}</div>
                    <div className="col-2"></div>
                    <button className="col-1 text-3xl"><i class="fa fa-info-circle" aria-hidden="true"></i></button>                
                    <button
                        onClick={()=>{
                            nav('/update-category'+"/"+val.cid)
                        }}
                    className="col-1 text-3xl"><i class="fa fa-pencil-square" aria-hidden="true"></i></button>
                    <button
                            onClick={()=>{
                                fetch(api+'/'+val.cid,{method:"DELETE"}).then(res=>{nav('/all-category')})
                            }}
                     className="col-1 text-3xl"><i class="fa fa-solid fa-trash"></i></button>
                    <div className="col-1"></div>
                </div>
            </>
        })

    return(
        <>  <div>
            
            {formattedGrocery}
            <button onClick={()=>{nav('/admin')}} className="btns float-end"  >back</button>
            <button onClick={()=>{nav('/add-category')}} className="btns float-end me-5"  >add</button>
            
            </div>
        </>
    )
}