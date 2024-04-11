function checkProbabilityTheory(){
    var randomNumbers = [];
    var count = Math.floor(Math.random() * 100);
    var evenNumCount = 0;
    var oddNumCount = 0;
    for(let i = 0; i < count; i++){
        let randomValue = Math.floor(Math.random() * 1000);
        if(randomValue < 100){
            randomValue += 100;
        }
        randomNumbers.push(randomValue);
    }
    for(let i = 0; i < randomNumbers.length; i++){
        if(randomNumbers[i] % 2 === 0){
            evenNumCount++;
        }else{
            oddNumCount++;
        }
    }
    var correlation = Number((evenNumCount / count) * 100).toFixed(3);

    console.log("Numbers was genereted: " + count);
    console.log("Even numbers: " + evenNumCount);
    console.log("Odd numbers: " + oddNumCount);
    console.log("Even/Odd correlation: " + correlation + "%");
}

checkProbabilityTheory();
checkProbabilityTheory();
checkProbabilityTheory();