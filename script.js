

function voter(age){
    if(age=>18)
    document.getElementById('text').innerHTML='vote  accepted'
    else
    document.getElementById('text').innerHTML='vote declined'
}
voter(11)