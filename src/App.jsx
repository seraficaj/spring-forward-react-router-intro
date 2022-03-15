import "./Skeleton.css";
import Contact from "./components/pages/Contact";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>React Router Lesson</h1>
            {/* wrap all routes in router */}
            <Router>
                {/* all routes go in a <Routes> component  */}
                <Routes>
                    {/* route needs a path and elem. path = url, element=component */}
                    <Route exact path="/home" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
