import React, { createContext, useEffect, useState } from 'react'

interface CountDownContext {
  time: number,
  active: boolean,
  hasFinished: boolean,
  setTime: (time: number) => void,
  setActive: (active: boolean) => void,
  setHasFinished: (time: boolean) => void,
  reset: () => void,
  startCountdown: () => void,
}


let countDownTimeout: NodeJS.Timeout
const initialTime = 0.1 * 60

export const CountDownContext = createContext({} as CountDownContext)

export default function CountDownProvider({ children }) {
  const [time, setTime] = useState(initialTime)
  const [active, setActive] = useState(false)
  const [hasFinished, setHasFinished] = useState(false)

  function startCountdown() {
    setActive(!active)
    clearTimeout(countDownTimeout)
    setTime(initialTime)
    setHasFinished(false)
  }

  function reset() {
    setActive(false)
    setTime(initialTime)
    setHasFinished(false)
  }

  useEffect(() => {
    if (active && time > 0) {
      countDownTimeout = setTimeout(() => {
        setTime(time - 1)
      }, 1000)
    } else if (active && time === 0) {
      setHasFinished(true)
      setActive(false)
    }
  }, [active, time])

  return (
    <CountDownContext.Provider value={{
      time,
      active,
      hasFinished,
      setTime,
      setActive,
      setHasFinished,
      startCountdown,
      reset
    }} >
      {children}
    </CountDownContext.Provider>
  )
}
