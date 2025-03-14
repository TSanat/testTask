import styles from './header.module.css'

export default function({loading, fetchMatches}){
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.header__wrapper}>
                    <div className={styles.header__text}>
                        <p>Match Tracker</p>
                    </div>
                    <div className={styles.header__info}>
                        <div className={styles.header__error} id="error">
                            <img src="/Vector.svg" alt=""/>
                            <p>Ошибка: не удалось загрузить информацию</p>
                        </div>
                        <div>
                            <button className={styles.header__reset} onClick={fetchMatches}>{loading ? "Загрузка..." : "Обновить"}<img src="/Refresh.svg" alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}