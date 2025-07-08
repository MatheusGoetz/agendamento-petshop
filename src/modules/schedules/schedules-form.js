import dayjs from "dayjs"

const namePerson = document.getElementById("person-schedule")
const petName = document.getElementById("pet-schedule")
const phone = document.getElementById("phone")
const serviceSchedule = document.getElementById("service-schedule")
const dateSchedule = document.getElementById("date-schedule")
const hourSelected = document.getElementById("hour-schedule")

phone.addEventListener('input', function (phone) {
  let value = phone.target.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  phone.target.value = value
})

dateSchedule.value = dayjs().format("YYYY/MM/DD")

export async function schedulesForm() {
  try {
    const namePeople = namePerson.value.trim()
    const namePet = petName.value.trim() 
    const service = serviceSchedule.value
    const date = dateSchedule.value
    const [selectedHour] = hourSelected.value.split(":")

    const hour = selectedHour

    if(!namePeople) {
      return alert("Informe o nome do cliente!")
    }

    if(!namePet){
      return alert("Informe o nome do pet")
    }

    if(!selectedHour){
      return alert("Selecione a hora.")
    }
    
    const when = dayjs(date).add(hour, "hour")
    const id = new Date().getTime()

    console.log({
      id,
      namePeople,
      namePet,
      service,
      date,
      hour,
      when,
    })

  } catch (error) {
    console.log(error);
    alert("Não foi possivel realizar o agendamento, tente novamente mais tarde!")
  }
}