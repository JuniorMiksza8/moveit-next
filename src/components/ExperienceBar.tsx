import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/ExperienceBar.module.css'

export default function ExperinceBar() {
  const { experience, nextLevelExperience } = useContext(ChallengesContext)

  const percentToNextLevel = Math.round((experience * 100)) / nextLevelExperience

  return (
    <header className={styles.experienceBar} >
      <span>0 px</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />
        <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }} >{experience} xp</span>
      </div>
      <span>{nextLevelExperience} px</span>
    </header>
  )
}
