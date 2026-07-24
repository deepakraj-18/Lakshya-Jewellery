import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ProductDetails from './pages/ProductDetails'
// import TryAtHomePage from './pages/TryAtHomePage'
// import VideoCallPage from './pages/VideoCallPage'
// import DigitalGoldBanner from './components/DigitalGoldBanner'
// import DigitalGoldPage from './pages/DigitalGoldPage'
import SignInPage from './pages/SignInPage'
import WishlistPage from './pages/WishlistPage'
import CartPage from './pages/CartPage'
import TreasureChestPage from './pages/TreasureChestPage'

function App() {
  return (
    <Routes>
      <Route element={<Layout />} path="/">
        <Route index element={<HomePage />} />
        <Route element={<CategoryPage />} path="category/:slug" />
        <Route element={<ProductDetails />} path="product/:productId" />
        <Route element={<SignInPage />} path="/sign-in" />
        <Route element={<WishlistPage />} path="/wishlist" />
      </Route>
      <Route element={<CartPage />} path="/bag" />
      <Route element={<TreasureChestPage />} path="/treasure-chest" />
    </Routes>
  )
}

export default App
