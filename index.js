
class Socio {
  constructor (name, id, password){
    this.name= name;
    this.id=id;
    this.password=password;
  }
}

let arraySocios =[];

const form = document.getElementById("form");
const container = document.getElementById("container-text");

form.addEventListener ("submit", (e) => {
  e.preventDefault();

  const name= document.getElementById("name");
  const id= document.getElementById("socio");
  const password= document.getElementById("pass");

  if (id.value==password.value){
    const socio = new Socio (name.value, id.value, password.value);
    arraySocios.push(socio);

    console.log (arraySocios)

    const p= document.createElement("p")
    p.className = "welcome-text";

    p.innerText = `Bienvenido al portal de socios, ${name.value} (#${id.value}).  Aqui podra tener acceso a entradas para los proximos partidos y pagar su cuota mensual. `
    
    container.appendChild(p);

    form.reset ();
  } 
  else{
    alert("El numero de socio y la contrasena deben coincidir.")
  }

})


