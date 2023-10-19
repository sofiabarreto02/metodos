function Text(){
    let comment = document.getElementById('comment').value;
    document.getElementById('save').innerText = comment;

}

function toUpperCase (){
    let upper = document.getElementById('comment').value;
    document.getElementById('comment').value = upper.toUpperCase();
  
}

function toLowerCase(){
    let upper = document.getElementById('comment').value;
    document.getElementById('comment').value = upper.toLowerCase();
}

function Count() {
    var maxLength = 255;
    var textarea = document.getElementById('comment');
    var currentLength = textarea.value.length;
    var charsLeft = maxLength - currentLength;
    document.getElementById('counter').innerText = charsLeft >= 0 ? charsLeft : 0;

    if (charsLeft < 0) {
        textarea.value = texta
        
    }
}