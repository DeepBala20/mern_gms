import { Link } from "react-router-dom";

export default function Features(){
    return(
               <section className="features" id="features">
                    <h1 className="heading">Our <span className="bg-teal-900">Features</span></h1>
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