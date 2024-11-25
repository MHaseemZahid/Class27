//  call_msg_console()// call function if it is created blow.
// function call_msg_console(){
//     console.log("call_msg_console123")
// }




//create function with return value

// function fun_ret_val(){
//     var num1 =+prompt("Enter Your First Number");
//     var num2 =+prompt("Enter Your Second Number");
//     var output=num1+num2;
//     return  output;
// }
//  var o1 =fun_ret_val();
//  console.log(o1);


//create function with return value and with parameters and arguments


 function fun_ret_val(num1,num2){//parameters 
 
     var output=num1+num2;
     return  output;
 }
 var o1 =fun_ret_val(100,300);// values  are arguments
 var o2 =fun_ret_val(200,300);
  
  var o3 =fun_ret_val(300,300);
 
  var o4 =fun_ret_val(400,300);
  
 console.log(o1);
 console.log(o2);
 console.log(o3);
  console.log(o4);