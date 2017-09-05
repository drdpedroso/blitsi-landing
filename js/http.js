var http = function (email, place) {
    var url = 'http://api.blitsi.com.br/graphql'
    var input = {"email": email}
    var xhttp = new XMLHttpRequest();
    var mutation = `mutation createOwnerEmail($input: CreateOwnerEmailInput! ){
        createOwnerEmail(input: $input) {
          ownerEmail {
            id
            email
            updatedAt
            createdAt
          }
        }
    }`;
    
    xhttp.open("POST", url);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.onload = function () {
        if (xhttp.status == 200 && place == 'bottom') {
            document.querySelector('#success-bottom').style.display = 'block'
            document.querySelector('#button-bottom').style.display = 'none'  
        } else if (xhttp.status == 200 && place == 'top') {
            document.querySelector('#success-top').style.display = 'block'
            document.querySelector('#button-top').style.display = 'none'  
        } else {
            document.querySelector('#error-top').style.display = 'block'
            document.querySelector('#error-bottom').style.display = 'block'
        }
      }
    xhttp.send(JSON.stringify({
        query: mutation,
        variables: {input: {"email": email}},
    }));
}
