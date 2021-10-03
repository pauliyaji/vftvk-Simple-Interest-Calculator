function compute()
{
var principal = document.getElementById("principal").value;
//principal input field validation
  if(principal == "" || principal <= 0){
    alert("Enter a positive number");	
    document.getElementById("principal").focus();

    return false;
  }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
	
	//conversion and addition of years 
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML = "If you deposit <mark>"+principal+"</mark>, \<br\><br\>at an interest rate of <mark>"+rate+"%</mark>\<br\><br\>You will receive an amount of <mark>"+interest+"</mark>,\<br\><br\>in the year <mark>"+year+"</mark>\<br\><br\>"

}
//display of rate value using range input field
 function updateRate() 
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText = rateval + "%";
    }
        