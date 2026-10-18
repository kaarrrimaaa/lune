import s from './Story.module.css'
import handMade from "../../assets/Made_by_hand.svg";
import sweet from "../../assets/fonts/ofont.ru_Sweet Mavka Script.ttf";


export function Story() {
    return (

        <div className={s.story}>
            <div className={s.container}>
                <img src={handMade} alt="" className={s.handMage_img}/>
                <div className={s.story_text}>
                    <p>НЕМНОГО LUNE — МНОГО ТЕБЯ</p>
                    <h2>Создано вручную. Для <br />тех, кто остаётся собой.</h2>
                    <p className={s.light}>Мы превращаем серебро, стекло и натуральный жемчуг в маленькие отражения <br /> твоей индивидуальности — создаём каждое украшение вручную, по одному за раз.</p>
                    <h4><span className={s.sweet}>С любовью,</span> LUNE</h4>
                </div>
            </div>
        </div>
    )
}