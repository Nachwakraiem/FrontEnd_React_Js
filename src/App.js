import "./App.css";
import Admin from "./components/admin/Admin";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddClient from "./components/admin/AddClient";
import ListClient from "./components/admin/ListClient";
import EditUser from "./components/admin/EditUser";
import AddCompte from "./components/admin/compte/AddCompte";
import ListCompte from "./components/admin/compte/ListCompte";
import EditCompte from "./components/admin/compte/EditCompte";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route  path="/" element={  <Login/>} />  */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/addclient" element={<AddClient />} />
          <Route path="/" element={<ListClient />} />
          <Route path="/edituser/:id" element={<EditUser />} />

          <Route path="/addcompte" element={<AddCompte />} />
          <Route path="/listcompte" element={<ListCompte />} />
          <Route path="/editcompte/:rib" element={<EditCompte />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
