import React from "react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
            <Home/>
            </QueryClientProvider>
        </BrowserRouter>
    );
}

export default App;
