import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import TopBar from './components/TopBar'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import TachesAutorisees from './pages/TachesAutorisees'
import DemanderAide from './pages/DemanderAide'
import Job from './pages/Job'
import News from './pages/News'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Faq from './pages/Faq'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        
        <ScrollToTop />
        <TopBar />
        <Navbar />

        
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taches-autorisees" element={<TachesAutorisees />} />
            <Route path="/demander-aide-menagere" element={<DemanderAide />} />
            <Route path="/job" element={<Job />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  )
}
