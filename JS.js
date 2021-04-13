var pagecounter =1;

function getData(){
 
  // AJAX asynchrounous javascript and xml (asynchronous means not requiring page request and xml is data format like json)
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", 'https://learnwebcode.github.io/json-example/animals-' + pagecounter + '.json', true);
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
       var ourdata =  JSON.parse(xhttp.responseText);  //oye browser data in url we are ftching is in jason format 

        rendertoHtml(ourdata);  
        }
    };



xhttp.send();
pagecounter++;

if(pagecounter>3)
{
    document.getElementById('btn').style.display="none";
}
    
}




function rendertoHtml(data)
{
     
    var animal =document.getElementById("animal-info");
    animal.setAttribute("class","mydiv");
    var area = "";


   for(i=0;i<data.length;i++)
   {
  area=area+"<p>"+data[i].name + "is a " + data[i].species + "</p>";
  
}

animal.innerHTML+=area;   
   
}

