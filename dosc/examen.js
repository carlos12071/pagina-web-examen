import data from "./data.js";

const divplatillos = document.getElementById("platillos")
console.log(data)

 data.map( (elemento) => {
    divplatillos.innerHTML += `<div class="flex">  
                                <img src=${elemento.img} alt=""/>
                                <h4>${elemento.title}</h4> 
                                <h5>${elemento.category}</h5>
                                <h6>${elemento.price}$</h6>
                                <p>${elemento.desc}</p> 
                               <hr>
                            </div>
                                `
    
        return elemento.nombre
})

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
// const category = document.getElementById("category")
// // const platillos = document.querySelector("btn2")

btn1.addEventListener('click', Todos)
btn2.addEventListener('click', Platillo)
btn3.addEventListener('click', Bebida)
btn4.addEventListener('click', Postre)


function Todos(evento){

    divplatillos.innerHTML ="";

    data.map( (elemento) => {
        divplatillos.innerHTML += `<div class="flex">  
                                    <img src=${elemento.img} alt=""/>
                                    <h4>${elemento.title}</h4> 
                                    <h5>${elemento.category}</h5>
                                    <h6>${elemento.price}</h6>
                                    <p>${elemento.desc}</p> 
                                   <hr>
                                </div>
                                    `
        
    })

}

function Platillo(evento){

    divplatillos.innerHTML ="";

    let categoryfiltrada = 'platillo'

    let filtrados = data.filter((data) => data.category === categoryfiltrada)

    filtrados.forEach( (elemento) => {
        divplatillos.innerHTML += `<div class="flex">
                                 <img src=${elemento.img} alt=""/>
                                 <h4>${elemento.title}</h4> 
                                 <h5>${elemento.category}</h5>
                                 <h6>${elemento.price}</h6>
                                 <p>${elemento.desc}</p> 
                                 <hr>
                            </div>`
        })
}

function Bebida(evento){

    divplatillos.innerHTML ="";

    let categoryfiltrada = 'bebida'


let filtrados = data.filter((data) => data.category === categoryfiltrada)

filtrados.forEach( (elemento) => {
        divplatillos.innerHTML += `<div class="flex">
                                 <img src=${elemento.img} alt=""/>
                                 <h4>${elemento.title}</h4> 
                                 <h5>${elemento.category}</h5>
                                 <h6>${elemento.price}</h6>
                                 <p>${elemento.desc}</p> 
                                 <hr>
                            </div>`
})
}

function Postre(evento){

    divplatillos.innerHTML ="";

    let categoryfiltrada = 'postre'


let filtrados = data.filter((data) => data.category === categoryfiltrada)

filtrados.forEach( (elemento) => {
        divplatillos.innerHTML += `<div class="flex">
                                 <img src=${elemento.img} alt=""/>
                                 <h4>${elemento.title}</h4> 
                                 <h5>${elemento.category}</h5>
                                 <h6>${elemento.price}</h6>
                                 <p>${elemento.desc}</p> 
                                 <hr>
                            </div>`
})
}


// let categoryfiltrada = 'Postre'


// let filtrados = data.filter((data) => data.platillos === categoryfiltrada)

// filtrados.forEach( (elemento) => {
//         divplatillos.innerHTML = `<div class="flex">
//                                  <img src=${elemento.img} alt=""/>
//                                  <h4>${elemento.title}</h4> 
//                                  <h5>${elemento.category}</h5>
//                                  <h6>${elemento.price}</h6>
//                                  <p>${elemento.desc}</p> 
//                                  <hr>
//                             </div>`
// })

// console.log(filtrados)