function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printSequence(){
    console.log('a');
    console.log('b');
    await delay(3000);
    console.log('c');
    console.log('d');
    console.log('e');
}

printSequence()