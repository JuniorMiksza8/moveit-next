import React, { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import classes from '../styles/components/Profile.module.css'

export default function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={classes.profileContainer} >
      <img src="https://github.com/JuniorMiksza8.png" alt="profile pic" />
      <div>
        <strong>Junior Miksza</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
    </div>
  )
}
