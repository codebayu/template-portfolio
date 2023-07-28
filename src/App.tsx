import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { Portfolio } from './pages/Portfolio';
import { Contact } from './pages/Contact';
import { MediaBar } from './components/MediaBar';

function App() {
  return (
    <main className="w-screen py-4 bg-gray-950 text-gray-50 min-h-screen">
      <Header />
      <MediaBar />
      <section className="md:px-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </section>
    </main>
  );
}

export default App;
