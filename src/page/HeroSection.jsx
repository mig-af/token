import { BuyTokenModal } from "./BuyTokenModal";
import { useState } from "react"
import { Article } from "./Article";
import { ProfileModal } from "../components/ProfileModal";
import { TokenCard } from "./TokenCard";


export function HeroSection() {

      let [show, setShow] = useState(false);
      
      const showWind = ()=>{
        
        setShow(!show)
        
  
      }
      
      const [showProfile, setShowProfile] = useState(false);
      const showProfileModal = ()=>{
        setShowProfile(!showProfile);
      }


  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      {showProfile && <ProfileModal obj={showProfileModal}/>}   
      
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Join the <span className="gradient-text">Nexus Revolution</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-lg">
            Nexus Token is the next-generation utility token powering
            decentralized applications with unmatched speed and security.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button id="buy-token" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 glow"
                  onClick={showWind}
            >
            
            Buy Token Nexus<i className="fas fa-arrow-right ml-2" />
            </button>
            <a
              href="#whitepaper"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 text-center"
            >
              Read Whitepaper
            </a>
            <button  
                  className="bg-gradient-to-r from-green-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full transition duration-300 glow"
                  onClick={showProfileModal}
            >
            
            My Profile<i className="fas fa-arrow-right ml-2" />
            </button>

          </div>
           
        </div>
              
        <div className="lg:w-1/2 flex justify-center">
          
              <TokenCard />

        </div>
      </div>

        
    { show && <BuyTokenModal obj={showWind}/>}

    
    </section>


  )
}