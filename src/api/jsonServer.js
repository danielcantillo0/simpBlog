import axios from "axios";

export default axios.create({
  baseURL: "http://9a798c351afc.ngrok.io", //change this everytime you change the app
});
