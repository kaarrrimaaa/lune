import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'
import { Banner } from './pages/Banner/Banner'
import { Brand_promises } from './pages/Brand_promises/Brand_promises'
import { Featured_products } from './pages/Featured_products/Featured_products'
import { Story } from './pages/Story/Story'
import { Newsletter } from './pages/Newsletter/Newsletter'

export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Brand_promises />
      <Featured_products />
      <Story />
      <Newsletter />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App;