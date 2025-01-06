
function Commentdiv() {
document.getElementById("displayComment").innerHTML+=`<div>${comment.value}</div> `;
c
}

function sendComment(comment){
   

    //     if (comment == ""){
    //         document.getElementById("responseComment").innerHTML='';
    //    return ;
    //}
    var data = JSON.stringify({
        com: comment, 
       
    });
    
    var req = new XMLHttpRequest();
    req.open('POST' ,'https://jsonplaceholder.typicode.com/posts' , true );
    req.setRequestHeader('Content-Type', 'application/json');
    
    
    
    
    req.onload = function() {
        if (req.status === 201) {
            var response = JSON.parse(req.responseText); 
            document.getElementById('responseComment').innerHTML = ` ${response.com}`;
            console.log(req.status);
        } else {
            console.error('Request failed with status: ' + req.status);
        }
    };
      req.send(data);
    }
document.getElementById("comment").addEventListener( 'input', function(){
    var comment= document.getElementById("comment");
    sendComment(comment.value);
});


