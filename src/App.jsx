import "./App.css";
import Navbar from "./components/Navbar";
import CreateForm from "./components/CreateForm";
import ReadForm from "./components/ReadForm";
import UpdateForm from "./components/UpdateForm";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<CreateForm />} />
          <Route exact path="/read" element={<ReadForm />} />
          <Route exact path="/edit/:id" element={<UpdateForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
