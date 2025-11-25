import { useState } from "react"
import { BuyTokenModal } from "./BuyTokenModal"

export function Cta() {

  const [show, setShow] = useState(false) 

  const openModal = ()=>{
    setShow(!show)
  }


  return (

    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900 to-purple-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Join the{" "}
          <span className="gradient-text">Nexus Revolution</span>?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Don't miss your chance to be part of the next big thing in blockchain
          technology.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            id="connect-wallet-2"
            className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-4 px-8 rounded-full transition duration-300"
          >
            Connect Wallet
          </button>
          <button
            id="buy-token-2"

            onClick={openModal}
            className="bg-transparent hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-full border-2 border-white transition duration-300"
          >
            Buy NEXUS Now
          </button>
        </div>
      </div>
      {show && <BuyTokenModal obj={openModal} />}
    </section>
  )
}