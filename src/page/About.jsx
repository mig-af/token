


export function About(){
    return (
        
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
  <div className="container mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
      About <span className="gradient-text">Nexus Token</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="token-card p-8 rounded-xl">
        <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-bolt text-blue-400 text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Lightning Fast</h3>
        <p className="text-gray-400">
          Our proprietary blockchain technology enables thousands of
          transactions per second with near-instant finality.
        </p>
      </div>
      <div className="token-card p-8 rounded-xl">
        <div className="w-16 h-16 bg-purple-900 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-lock text-purple-400 text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Secure by Design</h3>
        <p className="text-gray-400">
          Military-grade encryption and decentralized validation ensure your
          assets are always protected.
        </p>
      </div>
      <div className="token-card p-8 rounded-xl">
        <div className="w-16 h-16 bg-indigo-900 rounded-full flex items-center justify-center mb-6">
          <i className="fas fa-cogs text-indigo-400 text-2xl" />
        </div>
        <h3 className="text-xl font-bold mb-4">Multi-Chain</h3>
        <p className="text-gray-400">
          Native interoperability with Ethereum, BSC, and Polygon for seamless
          cross-chain transactions.
        </p>
      </div>
    </div>
  </div>
</section>

    )
}

