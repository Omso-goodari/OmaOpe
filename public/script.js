document.getElementById('send-button').addEventListener('click',sendMessage);
document.getElementById('user-input').addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        sendMessage();
    }
});

async function sendMessage(){
    const userInput = document.getElementById('user-input').value;
    //poistaa tyhjät merkit tekstin alusta ja lopusta, ja jos tekstikenttä on tyhjä, poistuu funktiosta.
    if(userInput.trim() === '') return;
    console.log(userInput);

    try{

    }catch(error){

    }

    try{
        const response = await fetch('/chat',{
             method: 'POST',
             headers:{
                 'Content-type': 'application/json'
             },
             body: JSON.stringify({question:userInput})
         })
     
         const data = await response.json();
     
         console.log(data);
    }catch(error){
        console.error('error', error);
        addMessageToChatBox('ChatGPT: jotain meni pieleen!')
    }

    addMessageToChatBox(userInput);


    //Tyhjentää tekstikentän/Clear input field
    document.getElementById('user-input').value = '';
}

//luodaan uusi div
function addMessageToChatBox(message){
//lisätään käyttäjän viestin diviin
    const messageElement = document.createElement('div');
    messageElement.textContent = message;
    console.log(messageElement);
    document.getElementById('chatbox').appendChild(messageElement);
}