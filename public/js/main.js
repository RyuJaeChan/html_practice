


function move(e){
    var node = e.parentNode;
    var next_div = node.parentNode.nextElementSibling;
    if(next_div){   //사싫 맨 오른쪽거는 버튼이 없으니 이 if문이 없어도 된다.
        if(!next_div.nextElementSibling){
            console.log(node);
            e.parentNode.removeChild(e.parentNode.childNodes[6]);   //index말고 button을 지정해서 없애는 법?
            console.log(node);
        }
        next_div.appendChild(node);
    }


}