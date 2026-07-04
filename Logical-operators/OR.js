// || // OR ---> only one side has to be true 
const age = 90;
if ((age >= 0 && age < 5) || age >= 65){//parantez kimin ilk degerelendirildigini gostermek icin 
    console.log ("free");
}else if (age >=5 && age < 10){
    console.log("$10");
}else if(age >= 10 && age < 65){
    console.log("$20")
}else {
    console.log("invalid")
}