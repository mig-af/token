import { useReadContract, useWaitForTransactionReceipt } from "wagmi"
import { IcoContract, UsdtContract } from "../web3/infoContracts"
import { useState, useEffect } from "react"
import { useWriteContract } from "wagmi"
import { parseEther } from "viem"
import { ModalSuccess } from "../components/ModalSuccess"

const calcTokenBuy = (amount) => {
    return useReadContract({
        abi: IcoContract.abi, 
        address: IcoContract.contractAddress, 
        args:[amount],
        functionName: "calcTokenToBuy"
    })
}


export function BuyTokenModal({obj}) {
        
    const [caja1, setCaja1] = useState(0)
    const { data } = calcTokenBuy(caja1);
    
    const calc = (e)=>{
        //console.log(caja1);
        setCaja1(e.target.value);
        console.log(data);
    }

    //----approve
    
    const { data: hashApprove , writeContract, isPending:isPendingApprove, error } =  useWriteContract();
    const { isLoading: isConfirmingApprove, isSuccess:isSuccessApprove } = useWaitForTransactionReceipt({hash:hashApprove})

    //----buy----
    const { data: hashIco, writeContract: writeContractIco, isPending:isPendingIco, error:errorIco} = useWriteContract();
    const { isLoading: isConfirmingIco, isSuccess:isSuccesIco } = useWaitForTransactionReceipt({hash:hashIco})

    const buy = ()=>{
        console.log(parseEther(caja1));
        //-----approve
        writeContract(
            {
                abi: UsdtContract.abi,
                address: UsdtContract.contractAddress,
                args:[IcoContract.contractAddress, parseEther(caja1)],
                functionName: "approve"
            }
        )
    }
    useEffect(()=>{
             
            if(isSuccessApprove){
                console.log("Hola desde useffect")
                console.log(isSuccessApprove);
                
                writeContractIco({ 
                    abi: IcoContract.abi,
                    address: IcoContract.contractAddress,
                    args:[UsdtContract.contractAddress, parseEther(caja1)],
                    functionName: "buy"
                })
            } 
        },[isSuccessApprove]
    )
    
    // const [viewWindowSuccess, setViewWindowSuccess]=useState(false);
    // useEffect(()=>{
    //     if(isConfirmingIco){
    //         setViewWindowSuccess(isConfirmingIco);
    //     }
    // },[isConfirmingIco])


    return (

        <div id="buy-modal" className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
            <div className="bg-gray-900 rounded-xl p-8 max-w-md w-full mx-4 border border-gray-800">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold">Buy NEXUS Tokens</h3>
                    <button id="close-buy-modal" onClick={obj} className="text-gray-400 hover:text-white">
                        <i className="fas fa-times"></i>
                    </button>
                </div>


                <div className="mb-6">
                    <label className="block text-gray-400 mb-2">Amount in USD</label>
                    <div className="relative">
                        <input onChange={calc} id="amount-usdt" type="number" placeholder="100" min="0" max="99" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-600" />
                        <span className="absolute right-3 top-3 text-gray-400">USD</span>
                    </div>
                </div>


                <div className="mb-6">
                    <label className="block text-gray-400 mb-2">You will receive</label>
                    <div className="relative">
                        <input placeholder={data} id="amount-token" type="text" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 pr-16 focus:outline-none focus:ring-2 focus:ring-blue-600" readOnly />
                        <span className="absolute right-3 top-3 text-gray-400">NEXUS</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">Price: $0.00001 per NEXUS</p>
                </div>

                {/* <div className="mb-6">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox rounded bg-gray-800 border-gray-700 text-blue-600 focus:ring-blue-600" />
                        <span className="ml-2 text-gray-400">I agree to the <a href="#" className="text-blue-400 hover:underline">Terms of Service</a></span>
                    </label>
                </div> */}

                <button onClick={buy} 
                       id="confirm-purchase" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                    disabled={isPendingApprove || isConfirmingApprove || isPendingIco || isConfirmingIco}>
                        
                    { isPendingApprove ? "Pending..please wait" : isConfirmingApprove ? "Confirming..": isPendingIco? "Pending..please wait" :isConfirmingIco ? "Confirming..": "Confirm Purchase"}
                </button>
            </div>
        {isConfirmingIco && <ModalSuccess />}        
        </div>

    )
}
