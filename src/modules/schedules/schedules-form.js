import dayjs from "dayjs"

const namePerson = document.getElementById("person-schedule")
const petName = document.getElementById("pet-schedule")
const phone = document.getElementById("phone")
const serviceSchedule = document.getElementById("service-schedule")
const dateSchedule = document.getElementById("date-schedule")
const hourScheudle = document.getElementById("hour-schedule")


export async function schedulesForm() {
  try {
    console.log(namePerson.value)
    console.log(petName.value)
    console.log(phone.value)
    console.log(serviceSchedule.value)
    console.log(dateSchedule.value)
    console.log(hourScheudle.value)
  } catch (error) {
    console.log(error);
    alert("Não foi possivel realizar o agendamento, tente novamente mais tarde!")
  }
}