function fazGet(url){
    let request = new XMLHttpRequest()
  
    request.open("GET", url, false);
    request.send();
    return request.responseText;
  }
  
document.querySelector(".botao").addEventListener("click", function() {
    var jsonString = fazGet("http://localhost/todoApi/todo.php?id=1");
    var json = JSON.parse(jsonString);                      
    document.querySelector("#saida").innerHTML = json["nome_sorteado"];
});

