import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sign_in() {
  var [user, setUser] = useState({ username: "" });
  return (
    <div className="m-10 p-6 flex justify-between">
      <div className="w-4/6">
      <div className="bg-teal-300  text-4xl font-bold font-mono text-center">
        SIGN - IN
      </div>
      <div>
        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-3xl font-bold mb-2">
              UserName
            </label>
            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-3xl font-bold mb-2 ">
              Enter password
            </label>
            <input type="password" className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow"></input>
          </div>
          <div className="flex items-center justify-evenly">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow" type="button">Sign-in</button>
            <Link to='/register'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow">Register</button></Link>
          </div>
        </form>
      </div>
      </div>
      <div className="border border-cyan-500 w-96 h-96">

      </div>
    </div>
  );
}
