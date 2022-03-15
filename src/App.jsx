import './Skeleton.css';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Services from './components/pages/Services';


function App() {
  return (
    <div className="App">
      <h1>React Router Lesson</h1>
      <Contact />
      <Home />
      <Services />
    </div>
  );
}

export default App;
