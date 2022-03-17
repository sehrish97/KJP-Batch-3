let students=["Amna","Fareeha","Khurram","Kinza"];
let subjects=['Math','English','Artificial Intelligence','Computer Architechture'];
let Marks=[
    [50,45,80,72],
    [64,50,66,88],
    [30,80,61,55],
    [79,81,55,70]
]
let data = " ";
for (let i = 0; i <students.length; i++) {
    for (let j = 0; j < subjects.length; j++) {
        data +=`<li><b>${students[i]} </b> got <b> ${Marks[i][j]}</b> marks in <b>${subjects[j]}</b></li>` 
        document.getElementById("data").innerHTML = data;
    }
    
}