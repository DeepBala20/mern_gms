import { Link } from "react-router-dom"
export default function Homeproduct(){
    
    return(
        <section className="products" id="products">
            <h1 className="heading">Trending <span className="bg-teal-900 m-4 mt-24">Products</span></h1>
            <div className="product-slider ">
                <div className="wrapper ">
                    <div className="productbox ">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to={''} className="btns">more details...</Link>
                            <Link to={''} className="btns">Add To Cart</Link>
                    </div>


                    <div className="productbox ">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to="" className="btns">more details...</Link>
                            <Link to='' className="btns">Add To Cart</Link>
                    </div>



                    <div className="productbox ">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to={''} className="btns">more details...</Link>
                            <Link to={''} className="btns">Add To Cart</Link>
                    </div>



                </div>
            </div>  
            <div className="product-slider">
                <div className="wrapper">
                    <div className="productbox">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to={''} className="btns">more details...</Link>
                            <Link to={''} className="btns">Add To Cart</Link>
                    </div>


                    <div className="productbox">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to="" className="btns">more details...</Link>
                            <Link to='' className="btns">Add To Cart</Link>
                    </div>



                    <div className="productbox">
                        <div className="feature-img"><img src=""></img></div>
                        <h1>Product Name</h1>
                        <div className="price">price</div>
                            <Link to={''} className="btns">more details...</Link>
                            <Link to={''} className="btns">Add To Cart</Link>
                    </div>



                </div>
            </div> 
        </section>
    )
}