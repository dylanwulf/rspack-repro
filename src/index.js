import { calculate } from "./answerCalculator";

function render() {
  document.getElementById(
    'root'
  ).innerHTML = `The answer to the universe is ${calculate()}.`;
}
render();