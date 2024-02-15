import { Link } from "react-router-dom";

export default function Admin_home() {
  return (
    <div className="bg-slate-400" style={{height:"100vh"}}>
      <header className="bg-teal-900 sticky top-0">
        <div className="flex justify-between items-center mx-auto px-10 py-3">
          <Link to="/admin">
            <h1 className="flex flex-wrap font-bold items-baseline">
              <span className="text-slate-300 text-4xl">Bala's </span>
              <span className="text-slate-100 text-2xl"> Grocery</span>
            </h1>
          </Link>
          <div className="font-mono items-end">
            @admin-pannel
          </div>
        </div>
      </header>
      <div className="flex flex-wrap m-28 justify-between" >
        <div className="w-1/5 h-96 hover:scale-110">
          <div className="w-4/5 h-4/6 border m-auto mt-5 rounded-3xl">
              <img src="assets/all_grocery.jpg" className="border rounded-3xl" style={{height:"100%",width:"100%"}}/>
          </div>
          <Link to={'/all-grocery'}>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full mt-10">All Grocery</button>
          </Link>
        </div>
        <div className="w-1/5 h-96 rounded-3xl hover:scale-110">
          <div className="w-4/5 h-4/6 border m-auto mt-5 rounded-3xl">
              <img src="assets/add_grocery.jpg" className="border rounded-3xl" style={{height:"100%",width:"100%"}}/>
          </div>
          <Link to={'/add-grocery'}>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full mt-10">Add Grocery</button>
          </Link>
        </div>
        <div className="w-1/5 h-96 hover:scale-110">
          <div className="w-4/5 h-4/6 border m-auto mt-5 rounded-3xl">
              <img src="assets/all_staff.jpg" className="border rounded-3xl" style={{height:"100%",width:"100%"}}/>
          </div>
          <Link to={'/all-user'}>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full mt-10">All Users</button>
          </Link>
        </div>
        <div className="w-1/5 h-96 hover:scale-110">
          <div className="w-4/5 h-4/6 border m-auto mt-5 rounded-3xl">
              <img src="assets/add_staff.jpg" className="border rounded-3xl" style={{height:"100%",width:"100%"}}/>
          </div>
          <Link to={'/add-user'}>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2 w-full mt-10">Add User</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
