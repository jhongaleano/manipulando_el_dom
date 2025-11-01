let inf =document.querySelector(".inform")
let spn =document.querySelector(".ser")
let bon =document.querySelectorAll(".pedir")
let text = ["CALIDAD","SERVICIO","COMPROMISO","SERIGRAFIA"]
let indice = 0;

setInterval(() => {
    spn.innerHTML = text[indice]
    indice = (indice + 1) % text.length;
},2000);


// let infs = document.querySelectorAll(".inform");
// infs.forEach(inf => {
//   inf.addEventListener("click", () => {
//     // ... Lógica del evento
//   });
// });

bon.forEach(bon =>{
    bon.addEventListener("click", () => {
       alert("has agregado un producto")
    })
})




inf.addEventListener("click",()=>{
    inf.removeAttribute(`btn-outline-dark`)
    inf.innerHTML =` <button type="button" class="btn btn-dark btn-sm mt-2 inform" data-bs-toggle="modal" data-bs-target="#exampleModal">INFOR</button>
    
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body ">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`
 
// setTimeout(() => inf.innerHTML = "dark", 1000);
})


