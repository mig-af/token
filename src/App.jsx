import '@rainbow-me/rainbowkit/styles.css';
import "./styles/index.css";
import "./styles/ProfileModal.css";
import { Header } from './page/Header'
import { HeroSection } from './page/HeroSection'
import { About } from './page/About'
import { Tokenomics } from './page/Tokenomics'
import { RoadMap } from './page/RoadMap'
import { Team } from './page/Team'
import { Cta } from './page/Cta'
import { Footer } from './page/Footer'
import { WagmiProvider } from 'wagmi'
import { QueryClientProvider } from '@tanstack/react-query'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { config, queryClient } from './web3/WagmiConfig'



export function App(){
  return (
    <>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>

              <Header />
              <HeroSection />
              <About />
              <Tokenomics />
              <RoadMap />
              <Team/>
              <Cta />
              <Footer />

          </RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </>
  )
}




