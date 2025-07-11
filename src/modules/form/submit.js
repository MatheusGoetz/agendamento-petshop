import dayjs from "dayjs";
import { schedulesForm } from "../schedules/schedules-form.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date-schedule")
const date = document.getElementById("date")

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

date.value = inputToday;
selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
  schedulesForm()
}