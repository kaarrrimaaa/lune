import { Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Banner } from './components/Banner/Banner'
import { Brand_promises } from './components/Brand_promises/Brand_promises'
import { Featured_products } from './components/Featured_products/Featured_products'
import { Story } from './components/Story/Story'
import { Newsletter } from './components/Newsletter/Newsletter'
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog'

export function App() {
  return (
    <div className="layout">
      <Header />
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