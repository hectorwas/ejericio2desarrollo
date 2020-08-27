var list=document.getElementById('list')


function insertar(){
    var content = document.createElement("li")
    var texto=document.createTextNode(prompt("Ingrese dato", texto))
    content.appendChild(texto)
    list.appendChild(content);
}
function borrar(){
    list.removeChild(list.children[0])
}
function actualizar(){
    var newElement= document.createElement('li')
    var texto=document.createTextNode(prompt("Ingrese Nuevo dato", texto))
    newElement.appendChild(texto)
    list.replaceChild(newElement,list.children[2])

}



//list.replaceChild(newElement,list.children[1])