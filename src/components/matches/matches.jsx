import styles from './matches.module.css';
import MatchInfo from '../matchInfo/match';
import { useState } from "react";

export default function (matches) {
    const [isHide, setHide] = useState(true);
    return (
      <div className={styles.matches}>
          <div className={styles.container}>
              {matches.length > 0 ?
                  (matches.map((match, index) => (
                      <div className={styles.teams}>
                          <div key={index} className={styles.wrapper}>
                              <div className={styles.command}>
                                  <img src="/icon.svg" alt=""/>
                                  <p>{match.homeTeam.name}</p>
                              </div>
                              <div className={styles.info}>
                                  <div className={styles.score}>
                                      <p>{match.homeScore} : {match.awayScore}</p>
                                  </div>
                                  {match.status === "Ongoing" ?
                                      <div className={styles.statusGreen}>
                                          {match.status}
                                      </div> :
                                      match.status === "Finished" ?
                                          <div className={styles.statusRed}>
                                              {match.status}
                                          </div> :
                                          <div className={styles.statusYellow}>
                                              {match.status}
                                          </div>
                                  }

                              </div>
                              <div className={styles.command}>
                                  <p>{match.awayTeam.name}</p>
                                  <img src="/icon.svg" alt=""/>
                              </div>
                              <div className={styles.hideShow}>
                                  <button onClick={setHide(false)}>
                                      {isHide ? <img src="/hide.svg" alt=""/> : <img src="/show.svg" alt=""/>}
                                  </button>
                              </div>
                          </div>
                          <MatchInfo  match={match} />
                      </div>
                  ))) : (<div className={styles.command}>There is no any data</div>)
              }
          </div>

      </div>
    )
}