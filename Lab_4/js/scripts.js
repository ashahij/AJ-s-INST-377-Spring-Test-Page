let myFullName = "Anuj Shahi"; // 10 characters in name...not including space
// 1 Change the content of the div with class "header" to "[Your name]'s Lab 4"

const header = document.querySelector(".header")
header.innerText = myFullName +"'s Lab 4";


// 2 Insert two paragraphs into the div with the class "content"
//  Label each paragraph with a distinct class name
 const x = document.querySelector(".content");

 const newP = document.createElement("p");
 const newP2 = document.createElement("p");

newP.className = "Par1"
newP.className = "Par2"



// 3 Into the first paragraph, insert the phrase "my name has " length of your name " characters"
//      (e.g. my name has 10 characters).

newP.innerText = " my name has " + myFullName.length + " characters"
x.appendChild(newP)

// 4 & 5 Into the second paragraph tag, return the 3rd character in your first name
newP2.innerText = "My third character is " + myFullName[2]
x.appendChild(newP2)

// 6 Add a new line to your second paragraph
newP2.innerText += "\n"

// 7 Return the final three characters of your last name to that new line
newP2.innerText +=" the final three characters are " + myFullName.substring(7)

// 8 Substring your first and last name into two separate variables
const FirstName = myFullName.substring(0,4)
const lastName = myFullName.substring(5,10)

// 9 Add the total length of your first and last names together
const len = FirstName.length + lastName.length

// 10 Display that total next to your name in your header
header.innerText += " "+ len

