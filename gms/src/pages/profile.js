// import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import { useParams } from "react-router-dom";

// export default function Profile(){

//     const [user,setUser] = useState();
//     const api = "http://localhost:3333/user"
//     const param = useParams();
    
//     useEffect(() => {
//         fetch(api+"/"+param.id, { method: "GET" })
//             .then(res => res.json())
//             .then(res => setUser(res))
//             .catch(error => console.error('Error fetching user:', error));
//     }, [api, param.id]);
    
//     return (
//         <>
//             <Header />
//             <br></br>
//             <br></br>
//             <br></br>
//             <br></br>
//             <div className="user-profile-container">
//                 <h1>User Profile</h1>
//                 {user && // Check if user exists before rendering details
//                     <div className="user-details">
//                         <div className="detail">
//                             <label>User ID:</label>
//                             <span>{user.uid}</span>
//                         </div>
//                         <div className="detail">
//                             <label>Username:</label>
//                             <span>{user.username}</span>
//                         </div>
//                         <div className="detail">
//                             <label>Email:</label>
//                             <span>{user.email}</span>
//                         </div>
//                         <div className="detail">
//                             <label>Mobile No:</label>
//                             <span>{user.mobileno}</span>
//                         </div>
//                         <div className="detail">
//                             <label>City:</label>
//                             <span>{user.city}</span>
//                         </div>
//                         <div className="detail">
//                             <label>Role:</label>
//                             <span>{user.role}</span>
//                         </div>
//                     </div>
//                 }
//             </div>
//         </>
//     );
// }

import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import Logout from "./logout";

export default function Profile() {
    const [user, setUser] = useState();
    const api = "http://localhost:3333/user";
    const param = useParams();

    useEffect(() => {
        fetch(api + "/" + param.id, { method: "GET" })
            .then((res) => res.json())
            .then((res) => setUser(res))
            .catch((error) => console.error("Error fetching user:", error));
    }, [api, param.id]);

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <div className="container">
                <div className="user-profile-container">
                    <h1>User Profile</h1>
                    {user && (
                        <div className="user-details">
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">User ID:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.uid}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">Username:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.username}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">Email:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.email}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">Mobile No:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.mobileno}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">City:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.city}</span>
                                </div>
                            </div>
                            {/* <div className="row mb-3">
                                <label className="col-sm-3 col-form-label">Role:</label>
                                <div className="col-sm-9">
                                    <span className="form-control-plaintext">{user.role}</span>
                                </div>
                            </div> */}
                            <div className="row mb-3 justify-around">
                                <Link to='/cart' className="col-sm-3 btn btn-primary">View Cart</Link>
                                <Link to='' className="col-sm-3 btn btn-primary">View Order</Link>
                                <Logout/>
                                
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

