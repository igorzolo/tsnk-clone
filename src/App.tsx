import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Equipment from './pages/Equipment';
import News from './pages/News';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/news" element={<News />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;