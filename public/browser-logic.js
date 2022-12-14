const products = require("../models/products");

const results = document.getElementById('maincard').cloneNode(true);
document.getElementById('maincard').remove()
const maincontainer = document.getElementById("maincontainer")

const name = document.getElementById("name")
const power = document.getElementById("power")
const availabilty = document.getElementById("availiblity")


async function send(type, data) { 
      let body = {
            method : type,
            headers : {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
      }
      console.log("post with",type, data)
      return fetch('/api/products/',body).then((r) => r.json()).then((r)  =>{return r})
}

// async function createTask(){ 
//       let body = {
//             method : type,
//             headers : {'Content-Type': 'application/json'},
//             body: JSON.stringify(data)
//       }
//       const {name, power, availabilty} = products


// }



async function getAllProducts(params){ 
      let json = await send ("GET", params)
      return json 
}



async function addProduct(v){
      let clone =  results.cloneNode(true)
      let holder = clone.children[0]
      holder.children[0].textContent = v.name
      holder.children[1].textContent = "Power: "+v.power
      holder.children[2].textContent = "Availabilty: "+ v.availabilty
      maincontainer.appendChild(clone)
}

// async function deleteProduct() { 

// }

getAllProducts().then(r => { 
      console.log(r[0])
      r.forEach(function(r){ 
            addProduct(r)
      })
})



