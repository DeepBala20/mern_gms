import { Link } from "react-router-dom"
export default function ProdCategory(){
    return(
        <section className="features mt-24" id="features">
        <h1 className="heading mt-">Our <span className="bg-teal-900">Category</span></h1>
        <div className="box-cont">
            <div className="box">
            <div className="feature-img"><img src=""/></div>
                <h3>Fresh And Organic</h3>
                <p>
                    
                </p>
                <Link to={''} className="btns">read more</Link>
            </div>
            <div className="box">
            <div className="feature-img"><img src=""/></div>

                <h3>Fresh And Organic</h3>
                <p>
                    
                </p>
                <Link to={''} className="btns">read more</Link>
            </div>
            <div className="box">
                <div className="feature-img"><img src=""/></div>
                <h3>Fresh And Organic</h3>
                <p>
                    
                </p>
                <Link to={''} className="btns">read more</Link>
            </div>
        </div>
   </section>
    )
}