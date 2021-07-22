document.body.addEventListener('keyup',(event)=>{
    playSound(event.code.toLowerCase());
});


document.querySelector('#caixa-botao button').addEventListener('click', () =>{
    let song = document.querySelector('#input').value;
    
    if(song !== ''){
        let songArray = song.split('');
        playComposition(songArray);
    }
})

function playSound(sound){

    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },300);
       
    }

}

function playComposition(songs){
    
    let time = 0;
    for(let song of songs){

        setTimeout(()=>{
            playSound(`key${song}`);
        }, time);

        time += 250;

        
    }
}