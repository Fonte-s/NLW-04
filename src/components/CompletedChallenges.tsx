import styles from '../styles/components/CompletedChalengesContainer.module.css'

export function CompletedChallenges() {
    return (
        <div className={styles.completedChallenges}>
            <span> Desafios completos</span>
            <span>5</span>
        </div>
    );
}