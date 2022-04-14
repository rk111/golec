import {QueryClient, QueryClientProvider,useState,useEffect } from "react-query";

import { Header } from "./components/header";
import { Home } from "./components/home"
import './App.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const queryClient = new QueryClient();

function App() {
  

  
  return (   
    <>
     <QueryClientProvider client={queryClient}>
     <Header />
     <Home/>    
     </QueryClientProvider>
     </>
  );
}

export default App;
