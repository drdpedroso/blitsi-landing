var http = function (email) {
    debugger
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
        console.log('data returned:', xhttp.response);
      }
    xhttp.send(JSON.stringify({
        query: mutation,
        variables: {input: {"email": email}},
    }));
}
