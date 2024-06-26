import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function UpdateProduct() {
    const nav = useNavigate();
    const param = useParams();
    // const api = "";
    const api = "http://localhost:3333/grocery";
    const [product, setProduct] = useState({
        pid: "",
        pname: "",
        price: "",
        category: "",
        img: "",
    });

    useEffect(() => {
        fetch(api + "/" + param.id, { method: "GET" })
            .then((res) => res.json())
            .then((res) => setProduct(res));
    }, []);

    return (
        <div className="register_bg pr-6 flex">
            <div className="w-2/5"></div>
            <div className="p-6 flex justify-between border w-3/5 ">
                <div className="w-full">
                    <div className=" text-5xl font-bold font-mono text-center">
                        ADD Product
                    </div>
                    <div>
                        <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto ">
                            <div className="mb-4">
                                <label className=" text-gray-700 text-3xl font-bold mb-2 w-1/3 mr-5">
                                    ProductID
                                </label>
                                <input
                                    id="uid"
                                    value={product.pid}
                                    type="number"
                                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-1/4 bg-transparent mr-5"
                                    onChange={(e) => {
                                        setProduct({
                                            ...product,
                                            pid: e.target.value,
                                        });
                                    }}
                                ></input>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-3xl font-bold mb-2">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    value={product.pname}
                                    id="uname"
                                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                    onChange={(e) => {
                                        setProduct({
                                            ...product,
                                            pname: e.target.value,
                                        });
                                    }}
                                ></input>
                            </div>
                            <div className="mb-6 flex">
                                <div className="w-1/2">
                                    <label className="block text-gray-700 text-3xl font-bold mb-2 ">
                                        Price
                                    </label>
                                    <input
                                        type="Number"
                                        value={product.price}
                                        className="shadow appearance-none border  rounded w-5/6 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow bg-transparent"
                                        onChange={(e) => {
                                            setProduct({
                                                ...product,
                                                price: e.target.value,
                                            });
                                        }}
                                    ></input>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-3xl font-bold mb-2">
                                    category
                                </label>
                                <input
                                    type="text"
                                    value={product.category}
                                    id="uname"
                                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                    onChange={(e) => {
                                        setProduct({
                                            ...product,
                                            category: e.target.value,
                                        });
                                    }}
                                ></input>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-3xl font-bold mb-2">
                                    Product Image
                                </label>
                                <input
                                    type="text"
                                    value={product.img}
                                    id="uname"
                                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                    onChange={(e) => {
                                        setProduct({
                                            ...product,
                                            img: e.target.value,
                                        });
                                    }}
                                ></input>
                            </div><div className="mb-4">
                                <label className="block text-gray-700 text-3xl font-bold mb-2">
                                    Product Description
                                </label>
                                <input
                                    type="text"
                                    value={product.desc}
                                    id="uname"
                                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow w-11/12  bg-transparent"
                                    onChange={(e) => {
                                        setProduct({
                                            ...product,
                                            desc: e.target.value,
                                        });
                                    }}
                                ></input>
                            </div>

                            <div className="flex items-center justify-evenly w-full">
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3"
                                    type="reset"
                                >
                                    clear
                                </button>
                                <button
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow w-1/3 "
                                    onClick={() => {
                                        fetch(api + "/" + param.id, {
                                            method: "PATCH",
                                            body: JSON.stringify(product),
                                            headers: {
                                                "content-type":
                                                    "application/json",
                                            },
                                        }).then((res) => {
                                            Swal.fire({
                                                // position: "top-end",
                                                icon: "success",
                                                title: "Product Added to Cart Successfully",
                                                showConfirmButton: false,
                                                timer: 1500
                                              })
                                        });
                                    }}
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct;
