import {QueryClient, QueryClientProvider } from "react-query";

import { Header } from "./components/header";
import { Home } from "./components/home"
import './App.css';

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
