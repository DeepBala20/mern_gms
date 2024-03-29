// import { Link } from "react-router-dom"
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useGlobal } from "../components/GlobalContext";
// export default function Cart(){
//   const { globalVariable, setGlobalVariable } = useGlobal();
//   const cartapi = "http://localhost:3333/cart";


//   const [cartitems,setCartitems] = useState([]);

 
//     console.log(globalVariable);
//     useEffect(
//         ()=>{
//             fetch(cartapi+'/'+globalVariable)
//             .then(res=>res.json())
//             .then(res=>setCartitems(res))
//         },[]
//     )
    
//     console.log(cartitems);

// const formattedCartitem = cartitems.map(
//     (val)=>{
//         return ( <div className="box flex-row">
                    
//                     <img src={val.product.img}></img>
//                     <div className="content">
//                         <h3></h3>
//                         <span className="price">{}</span>
                        
//                     </div>
//                     <button><i className="fa fa-trash"></i></button>
//                 </div>)
//     }
// )
    
    
//     return(
//             <>
//                 <div className="shopping-cart">
//                     {formattedCartitem}
//                     <div className="total">total</div>
//                     <Link to={''} className="btns">Check Out</Link>
//                 </div>
//                 <Link to='/' className="btn btn-outline-primary">back</Link>
//             </>
//         )
// }
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useGlobal } from "../components/GlobalContext";

// export default function Cart() {
//     const { globalVariable } = useGlobal();
//     const cartapi = "http://localhost:3333/cart";
    

//     const [cartitems, setCartitems] = useState([]);

//     useEffect(() => {
//         fetch(cartapi + '/' + globalVariable)
//             .then(res => res.json())
//             .then(res => setCartitems(res))
//             .catch(error => console.error("Error fetching cart items:", error));
//     }, [globalVariable]);

//     const deleteCartItem = async (cartid) => {
//         try {
//             const response = await fetch(cartapi + '/' + cartid, { method: "DELETE" });
//             if (!response.ok) {
//                 throw new Error('Failed to delete cart item');
//             }
//             // Remove the deleted item from cartitems state
//             setCartitems(prevItems => prevItems.filter(item => item.cartid !== cartid));
//         } catch (error) {
//             console.error("Error deleting cart item:", error);
//         }
//     };
//     const formattedCartitems = cartitems.map((val, index) => (
//         <div className="box flex-row w-100" key={index}>
//             {val.product && (
//                 <>
//                     <img src={val.product.img} alt={`Product ${index}`} />
//                     <div className="content">
//                         <h3>{val.product.pname}</h3>
//                         <span className="price">{val.product.price} rs</span>
//                     </div>
//                     <button onClick={() => deleteCartItem(val.cartid)}>
//                         <i className="fa fa-trash"></i>
//                     </button>
//                 </>
//             )}
//         </div>
//     ));

//     return (
//         <>
//             <div className="shopping-cart">
//                 {cartitems.length > 0 ? formattedCartitems : <p>No items in cart</p>}
//                 <div className="total"></div>
//                 <button  className="btns w-100">Check Out</button>
//             </div>
//             <Link to='/' className="btn btn-outline-primary">Back</Link>
//         </>
//     );
// }


// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { useGlobal } from "../components/GlobalContext";


// export default function Cart() {
//     const { globalVariable } = useGlobal();
//     const cartapi = "http://localhost:3333/cart";
//     const clearcartapi = "http://localhost:3333/clearcart";
//     const nav = useNavigate();

//     const [cartitems, setCartitems] = useState([]);
//     const [totalPrice, setTotalPrice] = useState(0);
    

//     useEffect(() => {
//         fetch(cartapi + '/' + globalVariable)
//             .then(res => res.json())
//             .then(res => {
//                 setCartitems(res);
//                 // Calculate total price when cart items are fetched
//                 calculateTotalPrice(res);
//             })
//             .catch(error => console.error("Error fetching cart items:", error));
//     }, [globalVariable]);

//     const deleteCartItem = async (cartid) => {
//         try {
//             const response = await fetch(cartapi + '/' + cartid, { method: "DELETE" });
//             if (!response.ok) {
//                 throw new Error('Failed to delete cart item');
//             }
//             // Remove the deleted item from cartitems state
//             setCartitems(prevItems => prevItems.filter(item => item.cartid !== cartid));
//             // Recalculate total price after deleting item
//             calculateTotalPrice(cartitems.filter(item => item.cartid !== cartid));
//         } catch (error) {
//             console.error("Error deleting cart item:", error);
//         }
//     };

//     const calculateTotalPrice = (items) => {
//         let total = 0;
//         items.forEach(item => {
//             total += item.product.price;
//         });
//         setTotalPrice(total);
//     };

//     const formattedCartitems = cartitems.map((val, index) => (
//         <div className="box flex-row w-100" key={index}>
//             {val.product && (
//                 <>
//                     <img src={val.product.img} alt={`Product ${index}`} />
//                     <div className="content">
//                         <h3>{val.product.pname}</h3>
//                         <span className="price">{val.product.price} rs</span>
//                     </div>
//                     <button onClick={() => deleteCartItem(val.cartid)}>
//                         <i className="fa fa-trash"></i>
//                     </button>
//                 </>
//             )}
//         </div>
//     ));

   
    

//     return (
//         <>
//             <div className="shopping-cart">
//                 {cartitems.length > 0 ? formattedCartitems : <p>No items in cart</p>}
//                 <div className="total">Total Price: {totalPrice} rs</div>
//                 <button onClick={
//                     ()=>{
//                         fetch(clearcartapi+'/'+globalVariable,{method:"DELETE"}).then((res)=>{nav('/')})
//                     }
//                 } className="btns w-100">Check Out</button>
//             </div>
//             <Link to='/' className="btn btn-outline-primary">Back</Link>
//         </>
//     );
// }



import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobal } from "../components/GlobalContext";

export default function Cart() {
    const { globalVariable } = useGlobal();
    const cartapi = "http://localhost:3333/cart";
    const clearcartapi = "http://localhost:3333/clearcart";
    const nav = useNavigate();

    const [cartitems, setCartitems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        fetch(cartapi + '/' + globalVariable)
            .then(res => res.json())
            .then(res => {
                setCartitems(res);
                calculateTotalPrice(res);
            })
            .catch(error => console.error("Error fetching cart items:", error));
    }, [globalVariable]);

    const deleteCartItem = async (cartid) => {
        try {
            const response = await fetch(cartapi + '/' + cartid, { method: "DELETE" });
            if (!response.ok) {
                throw new Error('Failed to delete cart item');
            }
            setCartitems(prevItems => prevItems.filter(item => item.cartid !== cartid));
            calculateTotalPrice(cartitems.filter(item => item.cartid !== cartid));
        } catch (error) {
            console.error("Error deleting cart item:", error);
        }
    };

    const decreaseQuantity = (cartid) => {
        const updatedItems = cartitems.map(item => {
            if (item.cartid === cartid && item.quantity > 1) {
                item.quantity -= 1;
            }
            return item;
        });
        setCartitems(updatedItems);
        calculateTotalPrice(updatedItems);
    };

    const increaseQuantity = (cartid) => {
        const updatedItems = cartitems.map(item => {
            if (item.cartid === cartid) {
                item.quantity += 1;
            }
            return item;
        });
        setCartitems(updatedItems);
        calculateTotalPrice(updatedItems);
    };

    const calculateTotalPrice = (items) => {
        let total = 0;
        items.forEach(item => {
            total += item.product.price * item.quantity; // Multiply by quantity
        });
        setTotalPrice(total);
    };

    const formattedCartitems = cartitems.map((val, index) => (
        <div className="box flex-row w-100" key={index}>
            {val.product && (
                <>
                    <img src={val.product.img} alt={`Product ${index}`} />
                    <div className="content d-flex align-middle flex-col">
                        <p className="font-mono text-3xl">{val.product.pname}</p>
                        <span className="price"><span style={{fontSize:"30px"}}>{val.product.price}</span> rs/packet</span>
                        <div className="quantity ms-0 ps-0">
                            <button className="btn btn-outline-danger me-3" onClick={() => decreaseQuantity(val.cartid)}>-</button>
                            <span style={{fontSize:"30px"}}>{val.quantity}</span>
                            <button className="btn btn-outline-success ms-3" onClick={() => increaseQuantity(val.cartid)}>+</button>
                        </div>
                    </div>
                    <button onClick={() => deleteCartItem(val.cartid)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </>
            )}
        </div>
    ));

    return (
        <>
            <div className="shopping-cart">
                {cartitems.length > 0 ? formattedCartitems : <p>No items in cart</p>}
                <div className="total">Total Price: {totalPrice} rs</div>
                <button onClick={
                    ()=>{
                        fetch(clearcartapi+'/'+globalVariable,{method:"DELETE"}).then((res)=>{nav('/')})
                    }
                } className="btns w-100">Check Out</button>
            </div>
            <Link to='/' className="btn btn-outline-primary">Back</Link>
        </>
    );
}










