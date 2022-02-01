document.addEventListener("DOMContentLoaded", function (){
    const card = document.querySelector(".card-body")

    
     //url to fetch
    const URL = "https://open.kickbox.com/v1/disposable/"
    
    //displays facts on page
    // function display(ind){
    //     facts_container.innerHTML = 
    //     `
    //     <div class="card">
    //     <div class="card-header">
    //         FACT ${ind}
    //     </div>
    //     <div class="card-body">
    //         <blockquote class="blockquote mb-0">
    //         <p>${allFacts[ind]}</p>
    //         </blockquote>
    //     </div>
    //     </div>
    //      `
    // }

    document.querySelector('.my-form').addEventListener("submit", function(e) {
        e.preventDefault();
      

    const mail = document.querySelector(".input_mail").value

        console.log(mail);

        fetch(URL+mail)
        .then((response) => {
            response.json()
            .then((data) => {
                console.log(data.disposable);
                
                if(!(data.disposable)){
                    card.innerHTML += `
                    <div class="alert alert-success" role="alert">
                        This is a valid email !
                    </div>
                    `
                }
                else{
                    card.innerHTML += `
                    <div class="alert alert-danger" role="alert">
                        This is a disposable email !
                    </div>
                    `
                }
            })
        }).catch((error) => {console.error(error)})
    })
})