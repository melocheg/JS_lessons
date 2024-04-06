function pow(x,y){
    var answer = 1;
    if(y === 0){
        console.log(answer);
    }
    else if(Number.isInteger(y)){
        if(y <0){
            for(var i = -y; i > 0; i--){
                answer *= x;
            }
            console.log(1/answer);
        }
        else{
            for(var i = y; i > 0; i--){
                answer *= x;
            }
            console.log(answer);
        }
    }
    else if(!Number.isInteger(y)){
        console.log("Степінь має бути цілим числом");
    }


}

pow(0,0);
pow(2,3);
pow(5,-3);
