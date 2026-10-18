import s from './Brand_promises.module.css'

export function Brand_promises() {
    return (

        <section className={s.Brand_promises}>

            <div className={s.marquee}>
                <div className={s.marqueeTrack}>
                    <p>РУЧНАЯ РАБОТА С ЛЮБОВЬЮ</p>
                    <p>•</p>
                    <p>ВСЕГДА НЕБОЛЬШИЕ ТИРАЖИ</p>
                    <p>•</p>
                    <p>ТВОЁ НОВОЕ ЛЮБИМОЕ УКРАШЕНИЕ</p>
                    <p>•</p>
                </div>
                <div className={s.marqueeTrack} aria-hidden="true">
                    <p>РУЧНАЯ РАБОТА С ЛЮБОВЬЮ</p>
                    <p>•</p>
                    <p>ВСЕГДА НЕБОЛЬШИЕ ТИРАЖИ</p>
                    <p>•</p>
                    <p>ТВОЁ НОВОЕ ЛЮБИМОЕ УКРАШЕНИЕ</p>
                </div>
            </div>

        </section>

    )
}