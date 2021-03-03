import React from 'react'
import classes from '../styles/components/Profile.module.css'
import styles from '../styles/components/Profile.module.css'

export default function Profile() {
  return (
    <div className={classes.profileContainer} >
      <img src="https://github.com/JuniorMiksza8.png" alt="profile pic" />
      <div>
        <strong>Junior Miksza</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
          </p>
      </div>
    </div>
  )
}
