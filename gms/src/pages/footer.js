export default function Footer(){
    return (
        <section className="mt-5 p-5 bg-dark text-white">
            <div className="row">
                <div className="col-3">
                    <div className="row">
                        <h1 className="text-3xl">Groco <i className="fa fa-shopping-basket text-3xl"></i></h1>
                        <br></br>
                        <br></br>
                        <p className="font-mono">
                            Feel Free to follow us on our <br></br>
                            social media handlers all <br></br>
                            the links are Given below. 
                        </p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>

                        <div className="d-flex w-75 justify-evenly">
                        <i className="fa fa-facebook text-3xl"></i>
                        <i className="fa fa-twitter text-3xl"></i>
                        <i className="fa fa-instagram text-3xl"></i>
                        <i className="fa fa-linkedin text-3xl"></i>
                        </div>
                    </div>
                </div>
                
                <div className="col-3"></div>
                <div className="col-3"></div>
                <div className="col-3">
                    <h1 className="text-3xl">Contact Info </h1>
                    
                    <ul>
                        <li className="mb-2 mt-2"><i className="fa fa-phone"></i> +9999999999</li>
                        <li className="mb-2 mt-2"><i className="fa fa-phone"></i> +9999999999</li>
                        <li className="mb-2 mt-2"><i className="fa fa-envelope"></i> info@example.com</li>
                        <li className="mb-2 mt-2"><i className="fa fa-map-marker"></i> rajkot-03 , gujrat , india.</li>


                    </ul>
                </div>
            </div>
        </section>
    )
}