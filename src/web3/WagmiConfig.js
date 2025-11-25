import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "viem/chains";
import { QueryClient } from "@tanstack/react-query";
import { http } from "viem";


export const config = getDefaultConfig({
    appName: 'My App',
    projectId: '73a82da90ebffc761251830fb973baef',
    chains: [sepolia],
    transports:{
        [sepolia.id]: http("https://sepolia.infura.io/v3/f000185b06554717bb63381d5c0e7075")
    },
    //ssr: true, // If your dApp uses server side rendering (SSR)
  });

export const queryClient = new QueryClient()