import styles from './matches.module.css';

export default function (matches) {
    return(
      <div className={styles.matches}>
          <div className={styles.container}>

              {matches.length > 0 ? (
                  matches.map((match, index) => (
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
                      </div>
                  ))
              ) : (
                  <div className={styles.command}>There is no any data</div>
              )

              }
          </div>

      </div>
    );
}