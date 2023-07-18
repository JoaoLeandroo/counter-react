import { useState, useEffect } from 'react'

function App() {
  const [secondsTime, setSecondsTime] = useState(0)
  const [minutesTime, setMinutesTime] = useState(0)
  const [hoursTime, setHoursTime] = useState(0)

  useEffect(() => {
    console.log("Segundos: " + secondsTime)
  }, [secondsTime])

  function counterInterval() {
    let sec = 0
    let min = 0
    let hour = 0
    let interval = setInterval(() => {
      sec++
      
      if(sec === 60) {
        sec = 0
        min++
      }

      if(min === 60) {
        sec = 0
        min = 0
        hour++
      }

      if(hour === 24) {
        sec = 0
        min = 0
        hour = 0
      }

      setSecondsTime(sec)
      setMinutesTime(min)
      setHoursTime(hour)

    }, 1000)
    return interval
  }

  function startCounter() {
    counterInterval()

    document.querySelector('.counterButton').setAttribute("disabled", '')
    document.querySelector('.counterButton').style.cursor = 'no-drop'
  }

  return (
    <div>
      <div className="division">
        <h2>{String(hoursTime).padStart(2, '0')}</h2>
        <span>:</span>
        <h2>{String(minutesTime).padStart(2, '0')}</h2>
        <span>:</span>
        <h2>{String(secondsTime).padStart(2, '0')}</h2>
      </div>

      <button onClick={startCounter} className='counterButton'>START</button>

    </div>
  );
}

export default App
