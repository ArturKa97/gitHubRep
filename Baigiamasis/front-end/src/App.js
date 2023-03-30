import React from "react";
import Home from "./Home";
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import store from "./store/store";
import {Provider} from "react-redux";

const queryClient = new QueryClient();

function App() {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    <Home/>
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

export default App;
