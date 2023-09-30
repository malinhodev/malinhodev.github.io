document.querySelectorAll('[data-toggle="open-sites"]').forEach( o => {
    o.addEventListener("click", () => {
        const modal = document.createElement("div")
        modal.setAttribute("id","modal")
        modal.innerHTML = '<div id="modal" class="fadeIn">'+
                             '<div id="containerModal" class="zoomIn">'+
                                 '<div id="headerModal-site">'+
                                     '<h2>Portifólio de Sites</h2>'+
                                 '</div>'+
                                 '<div id="contentModal">'+
                                 '<div class="card">'+
                                     '<a href="https://malinhodev.github.io/CloneNetflix/" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Clone netflix</h3></a>'+
                                 '</div><!--card-->'+
                                 '<div class="card">'+
                                     '<a href="https://malinhodev.github.io/rocketnews/" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Rocketnews</h3></a>'+
                                 '</div><!--card-->'+
                                 '<div class="card">'+
                                     '<a href="https://malinhodev.github.io/whatsappwebclone/" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Whatsapp webclone</h3></a>'+
                                 '</div><!--card-->'+
                                 '<div class="card">'+
                                     '<a href="https://espacoluanaaguiar.agenciacode68.com" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Espaço Luana Aguiar</h3></a>'+
                                 '</div><!--card-->'+
                                 '<div class="card">'+
                                     '<a href="https://manoscell.agenciacode68.com" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Manos Cell</h3></a>'+
                                 '</div><!--card-->'+
                                 '<div class="card">'+
                                     '<a href="https://agenciacode68.com" target="_blank"><ion-icon name="tv-outline"></ion-icon>'+
                                     '<h3>Agência Code 68</h3></a>'+
                                 '</div><!--card-->'+
                                 '</div>'+      
                                 '<div id="footerModal">'+
                                     '<p>Arraste para o lado >></p>'+
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
 