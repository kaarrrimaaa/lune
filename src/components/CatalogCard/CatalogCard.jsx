import s from './CatalogCard.module.css'
import product1 from '../../assets/Product1.svg';
import heart from '../../assets/heart.svg';

export function CatalogCard() {
    return (
        <div className={s.card}>
            <img src={product1} alt="" className={s.card_img}/>
            <div className={s.wishlist}><img src={heart} alt="" /></div>
            <div className={s.badge}>
                <p>БЕСТСЕЛЛЕР</p>
            </div>
            <div className={s.prod_name}>Cherry Crush</div>

            <div className={s.meta_data}>
                <p className={s.category}>Серьги</p>
                <p className={s.price}>2,900 ₽</p>

            </div>
        </div>
    )
}