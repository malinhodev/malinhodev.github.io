
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
                                    '<a href="https://malinhodev.github.io/malinhodevcalculator/" target="_blank"><ion-icon name="calculator-outline"></ion-icon>'+
                                    '<h3>Calculadora vanilla JS</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/todomalinhodev/" target="_blank"><ion-icon name="list-outline"></ion-icon>'+
                                    '<h3>Lista de tarefas</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/themedark/" target="_blank"><ion-icon name="moon-outline"></ion-icon>'+
                                    '<h3>Theme-Dark</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/jogodavelha/" target="_blank"><ion-icon name="game-controller-outline"></ion-icon>'+
                                    '<h3>Jogo da Velha</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/quiz/" target="_blank"><ion-icon name="help-outline"></ion-icon></ion-icon>'+
                                    '<h3>Quiz</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/campo-minado/" target="_blank"><ion-icon name="game-controller-outline"></ion-icon>'+
                                    '<h3>Campo Minado</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/cronometrojs/" target="_blank"><ion-icon name="stopwatch-outline"></ion-icon>'+
                                    '<h3>Cronômetro</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/relogiodigital/" target="_blank"><ion-icon name="time-outline"></ion-icon>'+
                                    '<h3>Relógio Digital</h3></a>'+
                                '</div><!--card-->'+
                                '<div class="card">'+
                                    '<a href="https://malinhodev.github.io/conversordeunidades/" target="_blank"><ion-icon name="-outline"></ion-icon>'+
                                    '<h3>Conversor de unidades</h3></a>'+
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
