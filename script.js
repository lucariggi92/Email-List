const apiUrl = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";

//chiamare API del server per generare una mail random
axios
.get("https://flynn.boolean.careers/exercises/api/random/mail").then(function (resp){

    console.log("risposta arrivata", resp.data.response);
});
