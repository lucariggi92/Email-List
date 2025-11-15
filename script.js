const apiUrl = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
const listElem = document.querySelector("ul")
const btnGenera = document.querySelector("#btn-genera")
const totale = 10;


//chiamare API del server per generare una mail random

function generaListaemail() {
    let emailTotali = "";
    listElem.innerHTML = "";
    const emailArray =[];

    for (let i = 0; i < totale; i++) {


        axios
            .get(`https://flynn.boolean.careers/exercises/api/random/mail`).then(function (resp) {

                const randomEmail = resp.data.response;

                emailTotali = emailTotali + `<li>${randomEmail}</li>`

                emailArray.push(randomEmail)


                if (emailArray.length === totale) {
                    listElem.innerHTML = emailTotali
                }

            });

    }
}
generaListaemail();


btnGenera.addEventListener("click", function () {
    generaListaemail();
})
