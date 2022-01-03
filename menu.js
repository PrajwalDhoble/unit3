var data_1=document.getElementById("data");
  var search=document.getElementById("btn")
 var url=`https://www.themealdb.com/api/json/v1/1/categories.php`
  async function menu(){
    try{
        // let input=document.getElementById("inp").value;
        let response=await fetch(url);
        let data=await response.json();
        showMenu(data)
        console.log("data:",data)
    }catch(err){
        console.log("error",err);
    }
 }

 function showMenu(dish){ 
        let category=document.createElement("div");
                  category.innerText=`${dish.strCategory}`;
          data_1.append(category)
 }
