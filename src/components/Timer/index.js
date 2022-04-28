import React, { useEffect, useState } from 'react'

function Timer() {

    const [time, setTime] = useState(0)

    useEffect(() => {
        let timeInterval = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
      return () => {
        clearInterval(timeInterval)
      }
    }, [])


  return (
    <div className='timer'>{`${Math.floor(time/60)} : ${("0" + time%60).slice(-2)}`}</div>
  )
}

export default Timer