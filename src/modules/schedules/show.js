import dayjs from "dayjs";

const periodMorning = document.getElementById("morning");
const periodAfternoon = document.getElementById("afternoon");
const periodNight = document.getElementById("night");

export function scheduleShow({dailySchedules}){
  try {
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const div = document.createElement("div");
      const time = document.createElement("strong");
      const paragraph = document.createElement("p");
      const petName = document.createElement("strong");
      const peopleName = document.createElement("span");
      const service = document.createElement("span");
      const remove = document.createElement("span");

      item.setAttribute("data-id", schedule.id)

      time.classList.add("hour")
      time.textContent = dayjs(schedule.when). format("HH:mm")

      petName.classList.add("name-pet")
      petName.textContent = schedule.namePet
      peopleName.classList.add("name-person")
      peopleName.textContent = schedule.namePeople

      paragraph.append(petName,peopleName)
      div.append(time, paragraph)

      service.classList.add("description-service")
      service.textContent = schedule.service

      remove.classList.add("remove-schedule")
      remove.textContent = "Remover agendamento"

      item.append(div, service, remove)

      const hour = dayjs(schedule.when).hour()

      if(hour <= 12){
        periodMorning.appendChild(item)
      } else if(hour > 12 && hour <= 18){
        periodAfternoon.appendChild(item)
      } else {
        periodNight.appendChild(item)
      }
    })

  } catch (error) {
    console.log(error);
    alert("Não foi possivel exibir os agendamentos");
  }
}