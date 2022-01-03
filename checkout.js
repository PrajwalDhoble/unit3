function alert(){
    if(input.length>=1){
        alert("Your order is accepted")
        setTimeout( function(){
            alert("your order is being cooked");
        },3000);
    }
    else{
        alert("Plz enter valid details")
    }
}
