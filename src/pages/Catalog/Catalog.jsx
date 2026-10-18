import { CatalogCard } from '../../components/CatalogCard/CatalogCard'
import s from './Catalog.module.css'

export function Catalog() {
  return (
    <div className="container">
      <div className={s.catalog_controls}>
        <div className={s.search_sort}>
          <input type="search" name="" id="" className={s.secrch} placeholder="🔍︎   Поиск нового любимого украшения" />
          <label className={s.field}>
            <select
              className={s.select}
              onChange={(e) => setValue(e.target.value)}
            >
              <option value="expensive">Сначала дорогие</option>
              <option value="cheap">Сначала дешевые</option>
              
            </select>
          </label>
        </div>
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