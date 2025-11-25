export function Team(){
    return(
        
  <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
      Meet the <span className="gradient-text">Team</span>
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Team Member 1 */}
      <div className="token-card p-6 rounded-xl text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="John Smith"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">John Smith</h3>
        <p className="text-blue-400 mb-2">CEO &amp; Founder</p>
        <p className="text-gray-400 text-sm">
          Former lead developer at Chainlink with 10+ years in blockchain
          technology.
        </p>
        <div className="flex justify-center space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="token-card p-6 rounded-xl text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Sarah Johnson"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">Sarah Johnson</h3>
        <p className="text-blue-400 mb-2">CTO</p>
        <p className="text-gray-400 text-sm">
          Smart contract expert with previous work at Ethereum Foundation.
        </p>
        <div className="flex justify-center space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
      {/* Team Member 3 */}
      <div className="token-card p-6 rounded-xl text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            alt="Michael Chen"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">Michael Chen</h3>
        <p className="text-blue-400 mb-2">Head of Marketing</p>
        <p className="text-gray-400 text-sm">
          Crypto marketing specialist with experience at Binance and Coinbase.
        </p>
        <div className="flex justify-center space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
      {/* Team Member 4 */}
      <div className="token-card p-6 rounded-xl text-center">
        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mb-4 overflow-hidden">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Emma Davis"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold">Emma Davis</h3>
        <p className="text-blue-400 mb-2">Business Development</p>
        <p className="text-gray-400 text-sm">
          Former partnerships manager at Polygon with extensive Web3 network.
        </p>
        <div className="flex justify-center space-x-3 mt-4">
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-twitter" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-linkedin" />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400">
            <i className="fab fa-medium" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}