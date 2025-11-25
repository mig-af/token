
import { useCountDown } from "../components/utils/customHooks";
import { useReadContract } from "wagmi";
import { IcoContract } from "../web3/infoContracts";
import { useEffect, useState } from "react";

export function TokenCard() {

    const [days, hour, minute, sec] = useCountDown("dec 1, 2025 00:00:00");

    
    const { data } = useReadContract({
        address: IcoContract.contractAddress,
        abi: IcoContract.abi, 
        functionName: "tokenSold",
    })  


    const tokenSold = Number(data).toLocaleString("en-EN", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
             }).slice(0, 6)
    

    let { data:totalSupply } = useReadContract({
        address: IcoContract.contractAddress,
        abi: IcoContract.abi,
        functionName: "getTotalSuply",
    })  
    totalSupply = Number(totalSupply).toLocaleString("es-ES", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
     }).slice(0, 5)
    
    const targt = 50000;
    const totalRec = 10000;
    const progress = (totalRec * 100 )/targt;
    

    return (
        <div className="token-card max-w-md w-full rounded-2xl p-8">
            
            <h3 className="text-2xl font-bold mb-6 text-center">
                Presale Progress
            </h3>
            <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2">
                    <span>Raised: ${totalRec}</span>
                    <span>Target: ${targt}</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                    <div
                        className="progress-bar h-3 rounded-full"
                        style={{ width:  `${progress}%` }}
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Token Price</p>
                    <p className="text-xl font-bold">$0.00001</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Listing Price</p>
                    <p className="text-xl font-bold">$0.0001</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Tokens Sold</p>
                    <p className="text-xl font-bold">{ tokenSold }M</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                    <p className="text-gray-400 text-sm">Total Supply</p>
                    <p className="text-xl font-bold">{totalSupply}M</p>
                </div>
            </div>
            <div className="text-center">


                <p className="text-gray-400 mb-2">Presale ends in:</p>
                <div className="flex justify-center space-x-2">
                    <div className="bg-gray-900 px-3 py-2 rounded">
                        <span className="text-xl font-bold" id="countdown-days">
                            {days}
                        </span>
                        <span className="text-xs block text-gray-400">Days</span>
                    </div>
                    <div className="bg-gray-900 px-3 py-2 rounded">
                        <span className="text-xl font-bold" id="countdown-hours">
                            {hour}
                        </span>
                        <span className="text-xs block text-gray-400">Hours</span>
                    </div>
                    <div className="bg-gray-900 px-3 py-2 rounded">
                        <span className="text-xl font-bold" id="countdown-minutes">
                            {minute}
                        </span>
                        <span className="text-xs block text-gray-400">Mins</span>
                    </div>
                    <div className="bg-gray-900 px-3 py-2 rounded">
                        <span className="text-xl font-bold" id="countdown-seconds">
                            {sec}
                        </span>
                        <span className="text-xs block text-gray-400">Secs</span>
                    </div>
                </div>
            </div>
        </div>
    )
}