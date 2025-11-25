import { useState } from "react"
import { useAccount } from "wagmi";
import { IcoContract } from "../web3/infoContracts";
import { useReadContract } from "wagmi";
import { wordShortener } from "./utils/WordShortener";


export function ProfileModal({ obj }){

    const [active , setActive] = useState(true);
    const closeProfileModal = ()=>{
        setActive(false)
    }
    const { address, isConnected } = useAccount();

    const { data } = useReadContract({
        address: IcoContract.contractAddress,
        abi: IcoContract.abi,
        functionName: "getMyBalance",
        args: [address]
    })

    //const addrss = wordShortener(address, 4, 4);
    console.log(data);


    return (
        active && 
        <section className="profile-modal">
            
            <h1>My Profile</h1>
            <div className="profile-modal-user-account">{wordShortener(address, 4, 4)}</div>
            <p>Status: <span style={{color: isConnected ? "green" : "red"}}>{isConnected? "Connected": "Not connected"}</span></p>
            <p>My Tokens: {data}</p>
            <button className="profile-modal-btn-withdraw">Withdraw</button>
            <button onClick={obj} className="profile-modal-btn-close">Close</button>
            
        </section>
    )

}





