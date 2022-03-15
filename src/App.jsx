import "./Skeleton.css";
import Add from "./components/pages/Add";
import Classes from "./components/pages/Classes";
import Contact from "./components/pages/Contact";
import GetIdFromParams from "./components/GetIdFromParams";
import Header from "./components/layout/Header";
import Home from "./components/pages/Home";
import Layout from "./components/layout/Layout";
import NotFound from "./components/pages/NotFound";
import Service from "./components/pages/Service";
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
                <Layout>
                    <Routes>
                        {/* route needs a path and elem. path = url, element=component */}
                        <Route exact path="/" element={<Home />} />
                        <Route
                            exact
                            path="/services"
                            element={<Services services={serviceDetails} />}
                        />
                        {/* details pages in rear router rules 
                          rule 1: details page should be /page/:id
                          rule 2: you need to exact path the less specific page
                          rule 3: both pages should be given the same props
                          rule 4: never send data thru react router dom links
                          - state is the SOLE SOURCE OF TRUTH
                        */}
                        <Route
                            path="/services/:id"
                            element={<Service services={serviceDetails} />}
                        />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/add/:x/:y" element={<Add />} />
                        {/* 404 Route must be after all other routes to "catch" */}
                        <Route
                            path="/classes/:classId"
                            element={
                                <GetIdFromParams ClassComponent={Classes} />
                            }
                        />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </Router>
        </div>
    );
}

export default App;
