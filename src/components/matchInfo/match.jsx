import styles from './match.module.css';
import Team from '../team/team';
export default function ({match}){
    return(
            <>
                <div className={ styles.match__info }>
                    <Team team={ match.homeTeam } />
                    <Team team={ match.awayTeam } />
                </div>
            </>
        )

}