import { createContext, useEffect, useState } from "react";
import challenges from '../../challenges.json'

interface Challenge {
  type: 'body' | 'eye';
  description: String;
  amount: Number;
}

interface ChallengesContext {
  level: number,
  experience: number,
  activeChallenge: Challenge | null,
  challengesCompleted: Challenge[],
  levelUp: () => void,
  newChallenge: () => void,
  resetChallenge: () => void,
  completeChallenge: () => void,
  nextLevelExperience: number,
}

export const ChallengesContext = createContext({} as ChallengesContext)

import React from 'react'


export default function ChallengesProvider({ children }) {

  const [level, setLevel] = useState(1)
  const [experience, setExperience] = useState(0)
  const [challengesCompleted, setChallengesCompleted] = useState([])
  const [activeChallenge, setActiveChallenge] = useState(null)

  const nextLevelExperience = Math.pow((level + 1) * 4, 2)

  function levelUp() {
    setLevel(level + 1)
  }

  function newChallenge() {
    const challenge = challenges[Math.floor(Math.random() * challenges.length)]
    setActiveChallenge(challenge)
    new Audio('/notification.mp3').play()
    if (Notification.permission === 'granted') {
      new Notification('Novo Desafio', {
        body: `Valendo ${challenge.amount}`
      })
    }
  }

  function resetChallenge() {
    setActiveChallenge(null)
  }

  function completeChallenge() {
    if (!activeChallenge) {
      return
    }
    setExperience(experience + activeChallenge.amount)
    setActiveChallenge(null)
    setChallengesCompleted([...challengesCompleted, activeChallenge])
  }

  useEffect(() => {
    if (experience > nextLevelExperience) {
      setLevel(level + 1)
    }
  }, [activeChallenge])

  useEffect(() => {
    Notification.requestPermission()
  }, [])

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        experience,
        challengesCompleted,
        newChallenge,
        activeChallenge,
        resetChallenge,
        completeChallenge,
        nextLevelExperience
      }}
    >
      {children}
    </ChallengesContext.Provider>
  )
}
