import s from './Footer.module.css'
import instLogo from '../../assets/inst.svg'
import tgLogo from '../../assets/tg.svg'

export function Footer() {
    return (
        <div className={s.footer_block}>
            <div className="container">
                <div className={s.footer}>
                    <div className={s.footer_logo}>
                        <a href="/">
                            <span className={s.logoText}>LUNE</span></a>
                        <p>Маленькие украшения. Большая индивидуальность.</p>
                    </div>
                    <div className={s.footer_nav}>
                        <div className={s.navigation}>
                            <p>НАВИГАЦИЯ</p>
                            <a href="#">Главная</a>
                            <a href="#">Каталог</a>
                            <a href="#">Корзина</a>
                            <a href="#">О нас</a>
                        </div>
                        <div className={s.information}>
                            <p>ПОЛЕЗНАЯ ИНФОРМАЦИЯ</p>
                            <a href="#">Доставка и возврат</a>
                            <a href="#">Уход за украшениями</a>
                            <a href="#">Связаться с нами</a>
                            <a href="#">Политика <br />конфиденциальности</a>
                        </div>
                        <div className={s.social}>
                            <p>ОСТАВАЙСЯ С НАМИ</p>
                            <div className={s.social_logo}>
                                <img src={instLogo} alt="" />
                                <img src={tgLogo} alt="" />
                            </div>
                            <a href="mailto:hello@lune.studio">hello@lune.studio</a>
                        </div>
                    </div>
                </div>
                <hr className={s.hr}/>
                <div className={s.footer_bottom}>
                    <p>© 2026 LUNE.</p>
                    <p>Создано и изготовлено вручную.</p>
                </div>
            </div>
        </div>
    )
}