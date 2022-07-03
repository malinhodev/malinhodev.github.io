
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
                                '<div id="contentModal">'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/malinhodevcalculator.github.io/" target="_blank"><ion-icon name="calculator-outline"></ion-icon></a>'+
                                    '<h3>Calculadora vanilla JS</h3>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/todomalinhodev.github.io/" target="_blank"><ion-icon name="list-outline"></ion-icon></a>'+
                                    '<h3>Lista de tarefas</h3>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                '<a href="https://malinhodev.github.io/themedark/" target="_blank"><ion-icon name="sunny-outline"></ion-icon></a>'+
                                '<h3>Theme-Dark</h3>'+
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
