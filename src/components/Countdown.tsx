import React, { useContext, useEffect, useState } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/Countdown.module.css'


export default function Countdown() {

  const { resetChallenge, activeChallenge, newChallenge } = useContext(ChallengesContext)
  const { time, active, hasFinished, startCountdown } = useContext(CountDownContext)


  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

  function startChallenge() {
    startCountdown()
  }

  useEffect(() => {
    if (hasFinished) {
      newChallenge()
    }
  }, [hasFinished])

  useEffect(() => {

  }, [newChallenge])

  return (
    <div>
      <div className={styles.container} >
        <div>
          <span>
            {minuteLeft}
          </span>
          <span>
            {minuteRight}
          </span>
        </div>
        <span>:</span>
        <div>
          <span>
            {secondLeft}
          </span>
          <span>
            {secondRight}
          </span>
        </div>
      </div>

      <button
        type="button"
        className={`${styles.button} ${active ? styles.disactivebtn : styles.activebtn} ${hasFinished && styles.finishedbtn} `}
        onClick={startChallenge}
        disabled={hasFinished}
      >
        {
          hasFinished ? 'Ciclo finalizado' : active ? 'Abandonar ciclo' : 'Iniciar um ciclo'
        }
      </button>
    </div>
  )
}
