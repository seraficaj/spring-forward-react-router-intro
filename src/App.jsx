import "./Skeleton.css";
import Add from "./components/pages/Add";
import Contact from "./components/pages/Contact";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Services from "./components/pages/Services";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import serviceDetails from "./data/serviceDetails";

function App() {
    return (
        <div className="App">
            <h1>React Router Lesson</h1>
            {/* wrap all routes in router */}
            <h3>Dental Health Day at the Dental Spa</h3>
            <Router>
                {/* all routes go in a <Routes> component  */}
                <Header />
                <main>
                    <Routes>
                        {/* route needs a path and elem. path = url, element=component */}
                        <Route exact path="/" element={<Home />} />
                        <Route
                            path="/services"
                            element={<Services services={serviceDetails} />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/add/:x/:y" element={<Add />} />
                        {/* 404 Route must be after all other routes to "catch" */}
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </Router>
        </div>
    );
}

export default App;
