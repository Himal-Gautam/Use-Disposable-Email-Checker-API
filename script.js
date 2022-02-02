document.addEventListener("DOMContentLoaded", function (){
    //selecting the card body
    const card = document.querySelector(".card-body")

    //url to fetch
    const URL = "https://open.kickbox.com/v1/disposable/"
    
    document.querySelector('.my-form').addEventListener("submit", function(e) {
        e.preventDefault();
      
    
    //getting the mail from input box
    const mail = document.querySelector(".input_mail").value

        console.log(mail);

        //fetching data
        fetch(URL+mail)
        .then((response) => {
            response.json()
            .then((data) => {
                console.log(data.disposable);
                
                //if not disposable then alert => This is a valid email !
                if(!(data.disposable)){
                    card.innerHTML += `
                    <div class="alert alert-success" role="alert">
                        This is a valid email !
                    </div>
                    `
                }
                //if diposable then alert => This is a disposable email !
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
