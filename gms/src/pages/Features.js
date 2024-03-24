import { Link } from "react-router-dom";

export default function Features(){
    return(
               <section className="features" id="features">
                    <h1 className="heading">Our <span className="bg-teal-900">Features</span></h1>
                    <div className="box-cont">
                        <div className="box">
                        <div className="feature-img"><img className="h-100 w-100" src="https://cdn.vectorstock.com/i/1000x1000/16/83/banner-design-with-fresh-organic-food-vector-6281683.webp"/></div>
                            <h1>Fresh And Organic</h1>
                        </div>
                        <div className="box">
                        <div className="feature-img"><img className="h-100 w-100" src="https://img.freepik.com/free-vector/realistic-supermarket-trolley-full-items_1284-35992.jpg?w=740&t=st=1711201504~exp=1711202104~hmac=dab7ee07e04412e44c87bfe3983b61f94b3729be582e209fcc63e6871a99e245"/></div>

                            <h1>Instant Take Away</h1>
                        </div> 
                        <div className="box">
                            <div className="feature-img"><img src="https://blogassets.airtel.in/wp-content/uploads/2021/12/Modern-payment-methods.jpg"/></div>
                            <h1>Easy Payments</h1>
                            
                        </div>
                    </div>
               </section>
        )
}