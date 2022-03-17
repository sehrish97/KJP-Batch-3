object={
    name: "Sehrish Bibi",
    course:"Block Chain",
    quiz:[100,200,300] ,
    attendance:85,
    marks:[60,100,130]
    }
    let i;
    let sum = 0;
    for(i=0; i<object.quiz.length;i++){
      sum +=object.quiz[i]
    }
    const  Total= 250;
    Marks = 75
    attendance = 85
    if(object.attendance>=attendance&&sum>=Total){
        console.log("name " + object.name+" "+object.course+" got " + sum+ " marks Passed")
    }
    else{
        console.log("fail");
    }