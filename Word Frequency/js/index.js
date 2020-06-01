var text = document.querySelector(".text");
var deem = document.querySelector(".deem");
var container = document.querySelector(".container");
var containerSorting = document.querySelector(".container-sorting");
var clearText = document.querySelector(".clear-text");

var temp = {};

clearText.addEventListener("click", function(){

	text.value = ""
	containerSorting.innerHTML = ""

	clearText.style.background = "#ff0018ad"
	clearText.style.border = 2 + "px solid #ff0018ad"
	clearText.style.boxShadow = 6 + "px " + -4 + "px " + 14 + "px " + 2 + "px #ff0018ad"

	function resetColor(){
		clearText.style.background = "#0066ffba"
		clearText.style.border = 2 + "px solid #0066ffba"
		clearText.style.boxShadow = 6 + "px " + -4 + "px " + 14 + "px " + 2 + "px #0066ffba"
	}
	setTimeout(resetColor, 500);
})


deem.addEventListener("click", function(){
	temp = {}

	deem.style.background = "#808080b0"
	deem.style.border = 2 + "px solid #808080b0"
	deem.style.boxShadow = 6 + "px " + -4 + "px " + 14 + "px " + 2 + "px #808080b0"

	function resetColor(){
		deem.style.background = "#0066ffba"
		deem.style.border = 2 + "px solid #0066ffba"
		deem.style.boxShadow = 6 + "px " + -4 + "px " + 14 + "px " + 2 + "px #0066ffba"
	}
	setTimeout(resetColor, 500);

	containerSorting.innerHTML = "";
	var textValue = text.value;
    var words = textValue.toLowerCase();
    var wordsReplace = words.replace(/[^$А-Яа-яA-Za-z0-9_\s]/g,"");
    var wordsReplaceSplit = wordsReplace.split(/\s+/);
 /*   
Сокращенный вариант
 var words = textValue.toLowerCase().replace(/[^$А-Яа-яA-Za-z0-9_\s]/g,"").split(/\s+/)
    .forEach(function(word){
	
        if(!temp[word]) 
        	
        temp[word] = 0;

        temp[word]++
        console.log(temp)
    });*/
	
	for(var i = 0; i < wordsReplaceSplit.length; i++){
	   	if(!temp[wordsReplaceSplit[i]])

    	temp[wordsReplaceSplit[i]] = 0

    	temp[wordsReplaceSplit[i]]++
    }


   

 	var chart = Object.keys(temp)
 			.map(function(word){// создаем новый массив и вносим туда инфу из обьекта temp
    		return [word, temp[word]];
  		})
  		.sort(function(first, second){// соортируем масси от большего числа к менишему тоже что и function(a, b){return b - a};
            return second[1] - first[1];
  		}).map(function(arr){
       		return arr[0]
	});
   
    for(var i = 0; i < chart.length; i++){

    	var number = document.createElement("div");
    	number.classList.add("numberWords") 
    	containerSorting.appendChild(number)

    	var nameWord = document.createElement("div")
    	nameWord.classList.add("word")
    	containerSorting.appendChild(nameWord)

    	number.innerHTML = temp[chart[i]]
    	nameWord.innerHTML = chart[i]
    }
})
