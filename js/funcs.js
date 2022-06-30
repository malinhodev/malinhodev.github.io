
//pegar o evento de clique
document.querySelectorAll('[data-toggle="open-modal"]').forEach( o => {
   o.addEventListener("click", () => {
       const modal = document.createElement("div")
       modal.setAttribute("id","modal")
       modal.innerHTML = '<div id="modal" class="fadeIn">'+
                            '<div id="containerModal" class="zoomIn">'+
                                '<div id="headerModal">'+
                                    '<h2>Portifólio</h2>'+
                                '</div>'+
                                '<div id="contentModal">'+'<div class="card">'+
                                    '<a href="https://malinhodev.github.io/malinhodevcalculator.github.io/" target="_blank"><img src="img/calculadora.png" alt="foto calculadora malinhodev"></a>'+
                                    '<h3>Calculadora</h3>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/todomalinhodev.github.io/" target="_blank"><img src="img/to-do.png" alt="foto app to-do malinhodev"></a>'+
                                    '<h3>App Lista de tarefas</h3>'+
                                '</div><!--card-->'+
                                '</div>'+
                                '<div id="footerModal">'+
                                    '<button id="confirmModal">Fechar</button>'+
                                '</div>'+
                            '</div>'+
                        '</div>'

       document.body.appendChild(modal)

       modal.addEventListener("click", m => {
           if(m.target.id=="modal" || m.target.id=="confirmModal"){
            
            const containerModal = document.querySelector("#containerModal")
            
            modal.classList.remove("fadeIn")
            modal.classList.add("fadeOut")
            containerModal.classList.remove("zoomIn")
            containerModal.classList.add("zoomOut")
            
            setInterval(()=>{
                modal.remove()
            },800)
           }
       })
   })
})
