import { ConnectButton } from "@rainbow-me/rainbowkit"



export function Header() {
  

  return (
    
    <header className="py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
      
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-coins text-white" />
          </div>
          <span className="text-2xl font-bold">
            Nexus<span className="gradient-text">Token</span>
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#tokenomics" className="hover:text-blue-400 transition">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-blue-400 transition">
            Roadmap
          </a>
          <a href="#team" className="hover:text-blue-400 transition">
            Team
          </a>
        </div>
        <ConnectButton />
        {/* <button
        id="connect-wallet"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 glow"
      >
        Connect Wallet
      </button>
      
      <button className="md:hidden text-xl" id="mobile-menu-button">
        <i className="fas fa-bars" />
      </button> */}
      </div>
      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden bg-gray-900 mt-4 py-4 px-4 rounded-lg"
      >
        <div className="flex flex-col space-y-4">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>
          <a href="#tokenomics" className="hover:text-blue-400 transition">
            Tokenomics
          </a>
          <a href="#roadmap" className="hover:text-blue-400 transition">
            Roadmap
          </a>
          <a href="#team" className="hover:text-blue-400 transition">
            Team
          </a>
        </div>
      </div>
      
    </header>
    
  )
}

