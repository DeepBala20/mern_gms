import { BrowserRouter, Link, Routes ,Route} from "react-router-dom"

export default function All_grocery(){
    return (
        <div>
            <header className="bg-teal-900 sticky top-0">
                <div className="flex justify-between items-center mx-auto px-10 py-3">
                <Link to="/admin">
                    <h1 className="flex flex-wrap font-bold items-baseline">
                    <span className="text-slate-300 text-4xl">Bala's </span>
                    <span className="text-slate-100 text-2xl"> Grocery</span>
                    </h1>
                </Link>
                </div>
            </header>
            <div className="flex flex-wrap bg-gray-400" style={{height:"100vh"}}>
                <div className="w-1/6 bg-black text-slate-300 text-2xl p-5 text-center">
                    <Link><div className="border border-r-0 border-l-0 border-yellow-400 mb-4 hover:text-yellow-300 hover:scale-110">menu</div></Link>
                    <Link><div className="border border-r-0 border-l-0 border-yellow-400 mb-4 hover:text-yellow-300 hover:scale-110">menu</div></Link>
                    <Link><div className="border border-r-0 border-l-0 border-yellow-400 mb-4 hover:text-yellow-300 hover:scale-110">menu</div></Link>
                    <Link><div className="border border-r-0 border-l-0 border-yellow-400 mb-4 hover:text-yellow-300 hover:scale-110">menu</div></Link>
                    <Link><div className="border border-r-0 border-l-0 border-yellow-400 mb-4 hover:text-yellow-300 hover:scale-110">menu</div></Link>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
}