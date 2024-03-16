import { Link } from "react-router-dom";

export default function Cart(){
    return(
            <>
                <div className="shopping-cart">
                    <div className="box">
                        <img src=""></img>
                        <div className="content">
                            <h3>pname</h3>
                            <span className="price">price</span>
                            <span className="quantity">quantity</span>
                        </div>
                        <i className="fa fa-trash"></i>
                    </div>
                    <div className="total">total</div>
                    <Link to={''} className="btns">Check Out</Link>
                </div>
            </>
        )
}