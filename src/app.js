import Header from "./components/header";
import "./scss/app.scss";

const app = () => {
  document.getElementById("header").innerHTML = Header();
};

// Initialize app
app();

console.log("Your JavaScript works!");
