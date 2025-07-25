import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedule-cancel";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if(event.target.classList.contains("remove-schedule")) {
      const item = event.target.closest("li")
      const {id} = item.dataset
      console.log(id)

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

        if(isConfirm){
         await scheduleCancel({id})
         schedulesDay()
        }
      }
    }
  })
})