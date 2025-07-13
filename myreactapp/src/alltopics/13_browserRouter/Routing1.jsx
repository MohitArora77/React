import Navbar from '../../components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import References from '../../pages/References'
import Learn from '../../pages/Learn'
import Home from '../../pages/Home'
import Blog from '../../pages/Blog'

const Routing1 = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/references" element={<References />} />
                    <Route path="/learn" element={<Learn />} />
                </Routes> {/* Package of route */}
            </BrowserRouter>
        </div>
    )
}

export default Routing1