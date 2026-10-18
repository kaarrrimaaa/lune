import s from './Banner.module.css'
import arrow from '../../assets/arrow.svg'
import banner from '../../assets/Cherry-Crush-worn.png'

export function Banner() {
    return (
        <section className={s.hero}>
            <div className={s.hero_inner}>
                <div className={s.hero_txt}>
                    <p>ДЛЯ ТЕХ, КТО НЕ БОИТСЯ БЫТЬ СОБОЙ</p>
                    <h1>Украшения с характером</h1>
                    <p>Немного дерзости. Немного нежности. Украшения ручной работы, которые отражают тебя, а не делают похожей на всех остальных.</p>
                    <button>Перейти в каталог <img src={arrow} alt="" /></button>
                    
                    <a href="#" className={s.light}>КОЛЛЕКЦИЯ ВИШНЁВОГО НАСТРОЕНИЯ / ВЫПУСК № 01</a>
                </div>
                <div className={s.hero_img}>
                    <img src={banner} alt="" />
                </div>
            </div>
        </section >
    )
}