const namePerson = document.getElementById("person-schedule")
const petName = document.getElementById("pet-schedule")
const phone = document.getElementById("phone")
const serviceSchedule = document.getElementById("service-schedule")
const dateSchedule = document.getElementById("date-schedule")
const hourSchedule = document.getElementById("hour-schedule")

phone.addEventListener('input', function (e) {
  let value = e.target.value
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/g, '($1) $2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2');
  e.target.value = value
})

export async function schedulesForm() {
  try {
    const schedule = {
      namePerson: namePerson.value.trim(),
      namePet: petName.value.trim(),
      phone: phone.value,
      serviceSchedule: serviceSchedule.value,
      dateSchedule: dateSchedule.value,
      hourSchedule: hourSchedule.value,
    }
    
    

  } catch (error) {
    console.log(error);
    alert("Não foi possivel realizar o agendamento, tente novamente mais tarde!")
  }
}