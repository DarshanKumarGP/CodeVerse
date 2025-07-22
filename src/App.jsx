import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Pages
import Home from './Pages/Home';
import Courses from './Pages/Courses';
import Java from './Pages/Java';
import Python from './Pages/Python';
import GoLang from './Pages/GoLang';
import JavaScript from './Pages/JavaScript';
import ReactJS from './Pages/React';
import MySQL from './Pages/MySql';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/courses" element={<Layout><Courses /></Layout>} />
      <Route path="/java" element={<Layout><Java /></Layout>} />
      <Route path="/python" element={<Layout><Python /></Layout>} />
      <Route path="/golang" element={<Layout><GoLang /></Layout>} />
      <Route path="/javascript" element={<Layout><JavaScript /></Layout>} />
      <Route path="/react" element={<Layout><ReactJS /></Layout>} />
      <Route path="/mysql" element={<Layout><MySQL /></Layout>} />
    </Routes>
  );
}

export default App;
