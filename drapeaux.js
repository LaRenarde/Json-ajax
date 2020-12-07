function chargeDrapeauFetch(apiUrl, cb){ 
    fetch(apiUrl).then(function (data){ 
        return data.json()
    }).then(function (data){
        console.log(data)
        cb(data)
    })
}

function creationGraphique(drapeaux, section){
    drapeaux.forEach(drapeau => {
        let { article, conteneur } = createFlag(drapeau, section);
        
        article.addEventListener("click", function(){   
            conteneur.classList.toggle("is-active");    
        })
        
    });
}

function createFlag(drapeau, section) {
    let article = document.createElement("article");
    let image = document.createElement("img");
    let conteneur = document.createElement("div");
    let titre = document.createElement("h1");
    let capital = document.createElement("p");
    capital.innerHTML = drapeau.capital;
    titre.innerHTML = drapeau.name;
    image.setAttribute("src", drapeau.flag);
    article.classList.add("article");
    section.appendChild(article);
    article.appendChild(image);
    article.appendChild(conteneur);
    conteneur.appendChild(titre);
    conteneur.appendChild(capital);
    return { article, conteneur };
}

document.addEventListener("DOMContentLoaded", function(){

    let apiUrl = "http://restcountries.eu/rest/v2";
    chargeDrapeauFetch(apiUrl, function(data){
        creationGraphique(data, document.getElementById("sectionDrapeaux"));
    })


});

