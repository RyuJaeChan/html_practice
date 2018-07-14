


function move(e){
    var node = e.parentNode;
    var next_div = node.parentNode.nextElementSibling;
    if(next_div){
        if(!next_div.nextElementSibling){
            console.log(node);
            e.parentNode.removeChild(e.parentNode.childNodes[5]);
            console.log(node);
        }
        next_div.appendChild(node);
    }


}