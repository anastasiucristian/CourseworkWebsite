function base26(){
			var x = document.getElementById("input").value;
			var result='';
      for (var i = 0, len = x.length; i < len; i++) {      
        if(x.charCodeAt(i) > 64 &&  x.charCodeAt(i) < 75)
			result += x.charCodeAt(i) -65;
		else if(x.charCodeAt(i) >= 75  &&  x.charCodeAt(i) < 91)
			result += String.fromCharCode(x.charCodeAt(i) - 10);
		else if(x.charCodeAt(i) >= 97 &&  x.charCodeAt(i) < 107)
			result += x.charCodeAt(i) -97;
		else if(x.charCodeAt(i) >= 107 &&  x.charCodeAt(i) < 123)
			result += String.fromCharCode(x.charCodeAt(i) - 42);		
		else
			result += x[i];
      }
      document.getElementById('output').value = result ;
}

function leet(){
			var x = document.getElementById("input").value;
			var result='';
      for (var i = 0, len = x.length; i < len; i++) {
        if(x[i] == 'a' || x[i] == 'A')
			result += '4';
		else if(x[i] == 'b' || x[i] == 'B')
			result += '8';
		else if(x[i] == 'c' || x[i] == 'C')
			result += '(';
		else if(x[i] == 'd' || x[i] == 'D')
			result += '[)';
		else if(x[i] == 'e' || x[i] == 'E')
			result += '3';
		else if(x[i] == 'f' || x[i] == 'F')
			result += '|=';
		else if(x[i] == 'g' || x[i] == 'G')
			result += '6';
		else if(x[i] == 'h' || x[i] == 'H')
			result += '|-|';
		else if(x[i] == 'i' || x[i] == 'I')
			result += '!';
		else if(x[i] == 'j' || x[i] == 'J')
			result += '_|';
		else if(x[i] == 'k' || x[i] == 'K')
			result += '|<';
		else if(x[i] == 'l' || x[i] == 'L')
			result += '1';
		else if(x[i] == 'n' || x[i] == 'N')
			result += '|\u005c|';
		else if(x[i] == 'm' || x[i] == 'M')
			result += '/\u005c/\u005c';
		else if(x[i] == 'o' || x[i] == 'O')
			result += '0';			
		else if(x[i] == 'p' || x[i] == 'p')
			result += '|D';
		else if(x[i] == 'q' || x[i] == 'Q')
			result += '(,)';
		else if(x[i] == 'r' || x[i] == 'R')
			result += '|?';
		else if(x[i] == 's' || x[i] == 'S')
			result += '5';
		else if(x[i] == 't' || x[i] == 'T')
			result += '7';
		else if(x[i] == 'u' || x[i] == 'U')
			result += '|_|';
		else if(x[i] == 'v' || x[i] == 'V')
			result += '\u005c/';
		else if(x[i] == 'w' || x[i] == 'W')
			result += '\u005c/\u005c/';
		else if(x[i] == 'x' || x[i] == 'X')
			result += '><';
		else if(x[i] == 'y' || x[i] == 'Y')
			result += '`/';
		else if(x[i] == 'z' || x[i] == 'Z')
			result += '2';
		else
			result = result +  x[i];        
      }
      document.getElementById('output').value = result ;
    }
	
function caesar(){
	var x = document.getElementById("input").value;
	var result='';
    for (var i = 0, len = x.length; i < len; i++) {
        if (x.charCodeAt(i) > 64 &&  x.charCodeAt(i) < 91)
			result += String.fromCharCode(((x.charCodeAt(i) - 65 + 3) % 26) + 97);
        else if (x.charCodeAt(i) > 95 && x.charCodeAt(i) < 123)
			result += String.fromCharCode(((x.charCodeAt(i) - 97 + 3) % 26) + 97);
	    else
		    result += x[i];
    }
    document.getElementById('output').value = result ;
}
	
function bubble(){
		var x = document.getElementById("input").value;
		var result='';
		for (var i = 0, len = x.length; i < len; i++) {
       if(x[i] == 'a')
		result += '\u24D0';
	else if(x[i] == 'b')
		result += '\u24D1';
	else if(x[i] == 'c')
		result += '\u24D2';
	else if(x[i] == 'd')
		result += '\u24D3';
	else if(x[i] == 'e')
		result += '\u24D4';
	else if(x[i] == 'f')
		result += '\u24D5';
	else if(x[i] == 'g')
		result += '\u24D6';
	else if(x[i] == 'h')
		result += '\u24D7';
	else if(x[i] == 'i')
		result += '\u24D8';
	else if(x[i] == 'j')
		result += '\u24D9';
	else if(x[i] == 'k')
		result += '\u24DA';
	else if(x[i] == 'l')
		result += '\u24DB';
	else if(x[i] == 'n')
		result += '\u24DD';
	else if(x[i] == 'm')
		result += '\u24DC';
	else if(x[i] == 'o')
		result += '\u24DE';			
	else if(x[i] == 'p')
		result += '\u24DF';
	else if(x[i] == 'q')
		result += '\u24E0';
	else if(x[i] == 'r')
		result += '\u24E1';
	else if(x[i] == 's')
		result += '\u24E2';
	else if(x[i] == 't')
		result += '\u24E3';
	else if(x[i] == 'u')
		result += '\u24E4';
	else if(x[i] == 'v')
		result += '\u24E5';
	else if(x[i] == 'w')
		result += '\u24E6';
	else if(x[i] == 'x')
		result += '\u24E7';
	else if(x[i] == 'y')
		result += '\u24E8';
	else if(x[i] == 'z')
		result += '\u24E9';
	else if(x[i] == 'A')
		result += '\u24B6';
	else if(x[i] == 'B')
		result += '\u24B7';
	else if(x[i] == 'C')
		result += '\u24B8';
	else if(x[i] == 'D')
		result += '\u24B9';
	else if(x[i] == 'E')
		result += '\u24BA';
	else if(x[i] == 'F')
		result += '\u24BB';
	else if(x[i] == 'G')
		result += '\u24BC';
	else if(x[i] == 'H')
		result += '\u24BD';
	else if(x[i] == 'I')
		result += '\u24BE';
	else if(x[i] == 'J')
		result += '\u24BF';
	else if(x[i] == 'K')
		result += '\u24C0';
	else if(x[i] == 'L')
		result += '\u24C1';
	else if(x[i] == 'N')
		result += '\u24C3';
	else if(x[i] == 'M')
		result += '\u24C2';
	else if(x[i] == 'O')
		result += '\u24C4';			
	else if(x[i] == 'P')
		result += '\u24C5';
	else if(x[i] == 'Q')
		result += '\u24C6';
	else if(x[i] == 'R')
		result += '\u24C7';
	else if(x[i] == 'S')
		result += '\u24C8';
	else if(x[i] == 'T')
		result += '\u24C9';
	else if(x[i] == 'U')
		result += '\u24CA';
	else if(x[i] == 'V')
		result += '\u24CB';
	else if(x[i] == 'W')
		result += '\u24CC';
	else if(x[i] == 'X')
		result += '\u24CD';
	else if(x[i] == 'Y')
		result += '\u24CE';
	else if(x[i] == 'Z')
		result += '\u24CF';		
	else
		result = result +  x[i];        
}
	  
      document.getElementById('output').value = result ;
    }

function reverse(){
	var x = document.getElementById("input").value;
	var result='';
	
	var splitString = x.split("");
	var reverseArray = splitString.reverse();
	var joinArray = reverseArray.join("");
	result = joinArray;
	
    document.getElementById('output').value = result ;
}
