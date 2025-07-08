import dayjs from "dayjs"
import {openingHours} from "../../utils/hours-opening.js"

const hours = document.getElementById("hour-schedule")

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {

    const isHourPast = dayjs(date).add(hour, "hour").isAfter(dayjs())
    
    return{
      hour,
      available: isHourPast,
    }
  })
  
  opening.forEach (({hour, available}) => {
    const option = document.createElement("option")
    option.classList.add(available ? "hour-available" : "hour-unavailable")
    option.label = hour
    option.value = hour

    hours.append(option)
  })
}