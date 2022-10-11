import TopBar from "./components/topbar/topbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write.jsx";
import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";

import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route, Redirect, Navigate
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  return (

    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/settings" element={user ? <Settings /> : <Settings />} />
        <Route path="/Write" element={user ? <Write /> : <Login />} />
        <Route path="/post/:postId" element={<Single />} />

      </Routes>
    </Router>


  );
}

export default App;
