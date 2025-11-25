export function Footer(){
    return (
        
  <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <i className="fas fa-coins text-white text-sm" />
          </div>
          <span className="text-xl font-bold">
            Nexus<span className="gradient-text">Token</span>
          </span>
        </div>
        <p className="text-gray-400 mb-4">
          The next-generation utility token powering decentralized
          applications.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-telegram" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-discord" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Resources</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Whitepaper
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Audit Report
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Company</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#about"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#tokenomics"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Tokenomics
            </a>
          </li>
          <li>
            <a
              href="#roadmap"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href="#team"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Team
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-4">Legal</h4>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Cookie Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              Risk Disclosure
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
      <p>© 2023 Nexus Token. All rights reserved.</p>
      <p className="mt-2">
        This website is for informational purposes only and does not
        constitute financial advice.
      </p>
    </div>
  </div>
</footer>
    )
}