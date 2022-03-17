console.log("hello");
 
// const Array1=[5,6,4,5,6,889,565]
//let sum = 0;
//for ( let i in Array1) {
  
//     sum +=Array1[i]
// }
// console.log(sum);
 //   MainArray1=[
        //[
        //    student1={name:"sehrish Bibi",father_name:"Saif-ur-Rehman",marks:90,attendence:85,course:"Math"},
       //     student2={name:"Asad Khan",father_name:"Saif-ur-Rehman",marks:87,attendence:85,course:"Math"}
     //   ]
   // ]
    //MainArray2=[
      //  [
        //    student1={name:"sehrish Bibi",father_name:"Saif-ur-Rehman",marks:90,attendence:85,course:"Eng"},
      //      student2={name:"Asad Khan",father_name:"Saif-ur-Rehman",marks:87,attendence:85,course:"Eng"}
    //    ]
   // ]
    //MainArray1.forEach((element,i) => {
     //   console.log(element)
     //   console.log(i);
       // element.forEach((Item,j) => {
            // console.log(item);
          //  Item.forEach((z,a) => {
        //        console.log(z);
      //      });
            
    //        }
  //      );
       
//    });




let studentName=['SEHRISH Saif', 'ASAD Khan','Khurram Ali' ]
let FatherName=['Khan','Ali','Saif']
let check;
let element;
for (let i = 0; i < studentName.length; i++) {
  for (let j = 0; j < FatherName.length; j++) {
    check=studentName[i].split(' ');
    if (check[1]===FatherName[j]) 
    {
     console.log(`${studentName[i]} s father name found at index ${j} `); 
    } 
  }
}
// with ForEach Loop
studentName.forEach(element => {
    FatherName.forEach((e,i)=>{
    check=element.split(" ");
    if(check[1]==[e]){
      console.log(`${element} s father name found at index ${i} `);
    }
  })
});
