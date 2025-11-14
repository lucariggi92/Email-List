const apiUrl = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    const listElem = document.querySelector("ul")
//chiamare API del server per generare una mail random
axios
.get("https://flynn.boolean.careers/exercises/api/random/mail").then(function (resp){

    const randomEmail =resp.data.response;
listElem.innerHTML = `<li>${randomEmail}</li>`


    
});
