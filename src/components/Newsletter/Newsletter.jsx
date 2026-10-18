import s from './Newsletter.module.css'

export function Newsletter() {
    return (
        <div className={s.newsletter}>
            <div className={s.container}>
                <div className={s.invitation}>
                    <p>ПИСЬМА С ЛЮБОВЬЮ, А НЕ СПАМ</p>
                    <h2>Присоединяйся к нашему маленькому миру.</h2>
                    <h5>Первыми узнавай о новых коллекциях, заглядывай за кулисы студии и <br />находи вдохновение для своей шкатулки с украшениями.</h5>
                </div>
                <div className={s.sub_form}>
                    <div className={s.em_form}>
                        <input type="email" name="email" className={s.input} placeholder='Твой адрес электронной почты' />
                        <h6>Подписываясь, ты соглашаешься с нашей Политикой конфиденциальности. </h6>
                    </div>
                    <button type="submit" className={s.button}>Подписаться</button>

                </div>
            </div>
        </div>
    )
}