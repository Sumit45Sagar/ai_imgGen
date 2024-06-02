import React, {useState} from "react";
import ReactDOM from "react-dom";
import Navbar from "./src/pages/common/Navbar/Navbar";
import Homepage from "./src/pages/HomePage/homepage";
import ImageGenerator from "./src/pages/ImageGenerator/imageGenerator";
import History from "./src/pages/History/history";
import HistoryInformationPage from "./src/pages/HistoryInformationPage/HistoryInformationPage";

import PointsContext from './src/context/pointsContext';



import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HistoryInformationPage from "./src/pages/HistoryInformationPage/historyInformationPage.js";
import Signup from "./src/pages/signup/signup.js";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const App = ()=>{
    const [userPoints, setUserPoints] = useState(20);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const login = () => {
        setIsLoggedIn(true);
    }
    const logout = () => {
        setIsLoggedIn(false);
    }

  const router = createBrowserRouter([
  { path: "/", element: <Homepage /> },
  { path: "/image-generator", element: <ImageGenerator /> },
  { path: "/history", element: <History /> },
  { path: "/history/:historyId", element: <HistoryInformationPage /> },
  {
    path: '/signup',
    element: <Signup/>
},
]);


    return (        
        <PointsContext.Provider value={{
            userPoints: userPoints, 
            setUserPoints: setUserPoints,
            isLoggedIn: isLoggedIn,
            login,
            logout,
        }}>
            <RouterProvider router={router} />
        </PointsContext.Provider>
    );
}

root.render(<App />);