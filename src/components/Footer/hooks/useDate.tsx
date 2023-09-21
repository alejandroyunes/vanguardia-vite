import { useEffect, useState } from "react"

export default function useDate() {

const [time, setTime] = useState(0)
  
  useEffect(() => {
    let today = new Date()
    let time = today.getHours()
    setTime(time)
  }, [])

  return {
    time
  }
}