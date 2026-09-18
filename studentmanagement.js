let no_of_student=Number(prompt("enter no_of_student"))
let fail_student=0
let pass_student=0
for( student=1;student<=no_of_student;student++){
let name = prompt("enter student");
let english=Number(prompt("english marks"));
let maths=Number(prompt("maths marks"));
let hindi=Number(prompt("hindi marks"));
let social=Number(prompt("social marks"));
let science=Number(prompt("science marks"));
let total=english+maths+hindi+social+science;
let avg=total/5;
let percentage=total/500*100;
let result;
if (english>=35 && maths>=35 && hindi>=35 && social>=35 && science>=35){
    result="pass";
    pass_student++;
}
else{
    result="fail";
    fail_student++;
}
let grade;
if(result=="fail"){
    grade="f";    
}
else if(percentage>=90){
    grade="a"
}
else if(percentage>=80){
    grade="b"
}
else if(percentage>=70){
    grade="c"
}
else if(percentage>=60){
    grade="d"
}
else{
    grade="f"
}


console.log(result);
console.log("student name:"+name);
console.log("english"+english);
console.log("maths"+maths);
console.log("hindi"+hindi);
console.log("social"+social);
console.log("science"+science);
console.log("total marks:"+total);
console.log("avg"+avg);
console.log("percentage"+percentage+"%");
console.log("result"+result);
}
console.log("no_of_students"+no_of_student);
console.log("pass_student"+pass_student);
console.log("fail_student"+fail_sudent);
