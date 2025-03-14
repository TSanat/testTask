import styles from "./team.module.css";

export default function ({team}){
    return (
            <>
                <div className={styles.team__info}>
                    <div className={styles.team__players}>
                        {team.players.length > 0 ?
                            team.players.map((player, index) => (
                                <div key={index} className={styles.player}>
                                    <div className={styles.name}>
                                        <img src="/player.svg" alt=""/>
                                        <p>{player.username}</p>
                                    </div>
                                    <div className={styles.kill}>
                                        <p className={styles.gray}>Kills: </p>
                                        <p className={styles.common}>{player.kills}</p>
                                    </div>

                                </div>)) :
                            <div className={styles.player}><p>There is no player</p></div>}
                    </div>
                    <div className={styles.team__score}>
                        <div className={styles.team__p}>
                            <p className={styles.gray}>Points: </p>
                            <p className={styles.common}>{team.points}</p>
                        </div>
                        <div className={styles.team__p}>
                            <p className={styles.gray}>Place: </p>
                            <p className={styles.common}>{team.place}</p>
                        </div>
                        <div className={styles.team__p}>
                            <p className={styles.gray}>Total Kills: </p>
                            <p className={styles.common}>{team.total_kills}</p>
                        </div>

                    </div>
                </div>
            </>
    )
}