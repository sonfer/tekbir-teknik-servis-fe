import React, {useEffect} from 'react';
import {Routes, Route, useNavigate} from "react-router-dom";
import './App.css';
import Login from "./pages/login";
import 'antd/dist/antd.min.css'
import Main from "./pages/main";
import {useSelector} from "react-redux";
import {RootState} from "./app/store";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

function App() {
  const auth = useSelector((state: RootState) => state.auth)
  const navigate = useNavigate()

    useEffect(() => {
        if(auth.user){
            navigate('/dashboard');
        }else{
            navigate('/login')
        }
    },[auth])

  return (
    <div className="App">
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
