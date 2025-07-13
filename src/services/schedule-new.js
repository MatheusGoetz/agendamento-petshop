import { apiConfig } from "./api-config.js";

export async function scheduleNew({ id, namePeople, namePet, service, when}) {
  try {
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-type": "aplication/json"
      },
      body: JSON.stringify({id, namePeople, namePet, phone,service, when})
    })

    alert("AGENDAMENTO REALIZADO COM SUCESSO.")
  } catch (error) {
    console.log(error)
    alert("Não foi possivel agendar, tente novamente mais tarde...")
  }
}