// @Author: Abdur Rahman
// Moodle IIT Delhi Auto Login

console.log("********** Moodle Auto Login Running **********")

var textContent = document.body.textContent;

var num = textContent.search("Please ");
var foundString = textContent.substring(num, num+50);
console.log(foundString);
var splits = foundString.split(' ');
var add = textContent.search("Please add");
var enter1 = textContent.search("Please enter first");
var enter2 = textContent.search("Please enter second");
var subtract = textContent.search("Please subtract");
var nameValue = 00;

if(add!=-1)
{
	nameValue = parseInt(splits[4])+parseInt(splits[6]);
}
else if(subtract!=-1)
{
	nameValue = parseInt(splits[4])-parseInt(splits[6]);
}
else if(enter1!=-1)
{
	nameValue = parseInt(splits[6]);
}
else
{
	nameValue = parseInt(splits[8]);
}

var delayTime = 100;

setTimeout(function() {
 document.getElementById("valuepkg3").value = nameValue;
/* FILL the 3 lines below with your user ID & Password (Keep them in inverted commas!)*/
 document.getElementById("username").value = "kerberos_id_here";
 document.getElementById("password").value = "password_here";
 document.getElementById('loginbtn').click();
}, delayTime);
