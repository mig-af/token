import { useState } from "react";

export function ModalSuccess() {
    
    const [view, setView]=useState(true);
    const changeView =()=>{
        setView(false);
    }

    return (
        view && (
        <div className="opacity-80 absolute shadow-xl flex flex-col items-center w-[30vh] min-h-[30vh] m-auto br-7 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <button onClick={changeView}  className="w-2 cursor-pointer pt-2 text-black bg-transparent font-bold border-none">X</button>
            <p className="font-bold break-all text-wrap w-[85%] text-white text-center pt-[30%] pb-10">Buy Succes! </p>
        </div>)
    
    )
}