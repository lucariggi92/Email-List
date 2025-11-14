const apiUrl = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
const listElem = document.querySelector("ul")
const totale = 10;

let emailTotali = "";
//chiamare API del server per generare una mail random

for (i = 0; i < totale; i++) {


    axios
        .get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (resp) {

            const randomEmail = resp.data.response;

            emailTotali = emailTotali + `<li>${randomEmail}</li>`

            listElem.innerHTML = emailTotali

   


        });
                 
}
