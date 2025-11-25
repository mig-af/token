import { useReadContract } from "wagmi"
import { IcoContract } from "../web3/infoContracts"
import { useAccount } from "wagmi";


export function Article(){

    const {address} = useAccount();

    const {data} = useReadContract({
        abi : IcoContract.abi,
        address : IcoContract.contractAddress,
        args:[212],
        functionName: "calcTokenToBuy",
    
    });
    
    

    const mostra = ()=>{
        console.log(data);
      
    }


    return(

        <section>
            <div className="info">
                <h1>asaklk</h1>
            </div>

            <button onClick={mostra}>
                ver datos contrato
            </button>
        </section>
    )
}

