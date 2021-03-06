import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'

import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { reset } = useContext(CountDownContext)

  function failed(){
    resetChallenge()
    reset()
  }

  function passed(){
    completeChallenge()
    reset()
  }

  return (
    <div className={styles.container} >
      {
        !activeChallenge ? (
          <div className={styles.notActive} >
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios
            </p>
          </div>
        ) : (
            <div className={styles.active} >
              <header>Ganhe {activeChallenge.amount} xp</header>
              <main>
                <img src={`icons/${activeChallenge.type}.svg`} alt="icon" />
                <strong>Novo desafio</strong>
                <p>{activeChallenge.description}</p>
              </main>
              <footer>
                <button
                  type="button"
                  className={styles.failedbtn}
                  onClick={failed}
                >
                  Falhei
                </button>
                <button
                  type="button"
                  className={styles.succeededbtn}
                  onClick={passed}
                >
                  Completei
                </button>
              </footer>
            </div>
          )
      }
    </div>
  )
}
