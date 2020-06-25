// Code your solutions in this file


const names = ['Lisa', 'Kaitlin', 'Jan']
const event = "surprise"


function writeCards(names, event){
    let greetings = []
    for (let i = 0; i < names.length; i++) {
    greetings.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return greetings  
}

function countDown(num) {
    
    let i = num 
    while( i >= 0){
        console.log(i--);
    }

}




