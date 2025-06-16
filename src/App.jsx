import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Principal from './pages/Principal';
import Peliculas from './pages/Peliculas';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/peliculas" element={<Peliculas />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
