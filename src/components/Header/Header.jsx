import { Link, NavLink } from 'react-router-dom'
import s from './Header.module.css'
import shoppingBag from '../../assets/shopping-bag.svg'

export function Header() {
  return (
    <header className={s.header}>
      <div className={s.header_top}>
        <div className="container">
          <p>НЕ КАК У ВСЕХ. И ЭТО КРУТО • БЕСПЛАТНАЯ ДОСТАВКА ОТ 5 000 ₽</p>
        </div>
      </div>

      <div className="container">
        <div className={s.header_bottom}>
          <Link to="/" className={s.logo}>
            <span className={s.logoText}>LUNE</span>
          </Link>

          <nav className={s.nav}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.navLink_active}` : s.navLink
              }
            >
              Главная
            </NavLink>
            <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? `${s.navLink} ${s.navLink_active}` : s.navLink
              }
            >
              Каталог
            </NavLink>
          </nav>

          <div className={s.cart}>
            <img src={shoppingBag} alt="Корзина" />
            <div className={s.itemCounter}>
              <p>2</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}