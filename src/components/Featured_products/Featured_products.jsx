import s from './Featured_products.module.css'
import { CatalogCard } from '../CatalogCard/CatalogCard'

export function Featured_products() {
    return (
        <div className="container">
            <div className={s.section_heading}>
                <div className={s.heading_group}>
                    <p>НАШИ ФАВОРИТЫ / 01—04</p>
                    <h2>В самое сердечко.</h2>
                </div>
                <a href="#">Смотреть все украшения ↗</a>
            </div>
            <div className={s.grid}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </div>
    )
}