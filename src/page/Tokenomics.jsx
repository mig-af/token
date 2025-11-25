export function Tokenomics(){

    return (
        
  <section id="tokenomics" className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
      Token <span className="gradient-text">Economics</span>
    </h2>
    <div className="flex flex-col lg:flex-row items-center">
      <div className="lg:w-1/2 mb-12 lg:mb-0">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Presale</span>
            <span className="font-bold">50%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
            <div
              className="bg-blue-600 h-3 rounded-full"
              style={{ width: "50%" }}
            />
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Liquidity</span>
            <span className="font-bold">25%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
            <div
              className="bg-purple-600 h-3 rounded-full"
              style={{ width: "25%" }}
            />
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Development</span>
            <span className="font-bold">15%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3 mb-6">
            <div
              className="bg-indigo-600 h-3 rounded-full"
              style={{ width: "15%" }}
            />
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Marketing</span>
            <span className="font-bold">10%</span>
          </div>
          <div className="w-full bg-gray-800 rounded-full h-3">
            <div
              className="bg-pink-600 h-3 rounded-full"
              style={{ width: "10%" }}
            />
          </div>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="token-card p-8 rounded-xl max-w-md mx-auto">
          <h3 className="text-2xl font-bold mb-6">Key Features</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3" />
              <span>2% auto-liquidity generation</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3" />
              <span>3% ecosystem development fund</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3" />
              <span>5% staking rewards pool</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3" />
              <span>Anti-whale protection (max 2% wallet)</span>
            </li>
            <li className="flex items-start">
              <i className="fas fa-check-circle text-green-500 mt-1 mr-3" />
              <span>Smart contract audited by CertiK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    )
}