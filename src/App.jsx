import Body from "./Body";
import NavBar from "./NavBar";
import Profile from "./Profile";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body/>}>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
