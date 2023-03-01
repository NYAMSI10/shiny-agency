import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Survey from "./pages/Survey";
import Header from "./components/Header";
import Error from "./components/Error";
import Results from "./pages/Results";
import Freelances from "./pages/Freelances";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Router>
            <Header/>


                <Routes>

                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/survey/:questionNumber" element={<Survey/>}/>
                    <Route path="result" element={<Results/>}/>
                    <Route path="freelance" element={<Freelances/>}/>
                   <Route  element={<Error/>}> </Route>
                </Routes>

        </Router>


    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
