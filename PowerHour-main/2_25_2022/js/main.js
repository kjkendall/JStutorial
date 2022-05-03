/*

Intro to JS
Study guide by Zrybea Whitfield

For this tutorial, I suggest opening the index.html page in a chrome browser and use the inspect tool to the console. 
Happy learning!

*/

//Strings - Data type that holds data in text form. Strings in Javascript are represented by wrapping text in double quotes or single quotes

console.log("Hello World")
console.log('Hello friends')

//Numbers - Data type that holds data that is a numerical value. It can be a whole integer (10) or a float which is a fractional number (10.54)
let number = 5
console.log(5)
console.log(number)

/* 

Variables - Variables are a container that stores some data. We can store strings and numbers but also functions, arrays, and objects. We represent that stored data by using *keywords* (let, const, or var) to declare that variable, an english word that we use to represent that value, an ' = ' symbol (called equal operator) that is used to assign that variable, and finally, the value we want to store

*/

    //var - you may see this older way to declare a varible. Coding languages get updated and previously, we used var to declare a variable. var has global scope (you may learn more about scope later)
    var value1 = "hey girl"
    console.log("This is value1: " + value1)

    //Once you declare a variable, you can reassign it using the equal operator.
    value1 = "hey boy"
    console.log("This is new value1: " + value1)

    //const - const is the accepted most updated way (As of ES6 - the  most recent version of JavaScript) to declare a value that * WILL NOT change * Take your name for example. If you wanted to declare a variable that held your name, use const
    const me = "Zrybea"
    console.log("This is me: " + me)

    // Now, try uncommenting the next two lines. You will see that an error will occur telling you that you cant reassign a constant variable
    // me = "Naomi Campbell"
    // console.log(me)

    //let - let is the accepted most updated way to declare a value that * May change *
    let value2 = 6
    console.log("This is value2: " + value2)

    value2 = 10
    console.log("This is the new value2: " + value2)

    //So now you have the basics on variables! Use let and const for your variable declarations but understand you may see old code examples that use var



/*

Functions- functions are a set of instructions, a procedure that occurs. JavaScript has a ton of built in functions called "methods". But you can also write (declare) your own using the keyword "function". We run or execute the functions that we write by "calling" the function. A "function call" is done by typing the function name with the specified parameters in parenthesis

*/
    //this is a function declaration
    function sayHi(){
    alert("Hi!!!!!!!!")
    }

    //This is a function call: uncomment the next line to run this function and refresh your browser
    // sayHi()


/* 

Iterators - a way for us to 'go through" a set of data and repeat some action a number of times. We can do this with loops (there are different types) or methods sunch as forEach() 

*/

    // for loop - A for loop is initialized or delcared with the keyword "for". It then has 3 parts, an initial expression (starting point), condition expression (how long the loop runs), and increment expression (how to iterate)

    

    /*
    
    In this loop, we are saying: Starting at "i" (which is the number 0), we are going to check to see if it is less than our dataSet (which is 10); and if it is, we will print to the console "Hey girl Hey". Then we will take "i" and add 1 to it (which is represented by "i++"). Now, i is equal to 1. The loop then repeats. Starting at i (which is now 1), is it less than our dataSet (10)? Yes! So we print our statement to the console again. Then finally we add 1 to "i" again (i++). Now, "i" is equal to 2....And so on, this process repeats until "i" is equal to 10. When the loop checks to see if "i" is less than 10, it will stop because when i has a value of ten, it will not be less than dataSet.

    Uncomment the 4 lines below to see this run in the console. You will see "Hey girl Hey" with a (10) next to it to indicate that it indeed printed ten times

    */

    // let dataSet = 10
    // for(let i = 0; i < dataSet; i++){
    // console.log("Hey girl Hey")
    // }


/*

Dom manipulation - Let's talk about how we can use JS to make changes on our webpage. Our index.html file has 4 sections. 3 have a class of "blue" and 1 has an id of "nikki"

Objects, properties, and methods - In a general sense, think of Objects like nouns in javascript, they are the "things" that we want to manipulate, 
                                                    properties are similar to adjectives and are used to describe Objects
                                                    , and Methods are like verbs and define the behavior of the object that the method is called on. 
                                                    
    When we use console.log() for example, the console is an Object and log() is a method that is being called on the console.
    
    When we want to find a specific element in the DOM, we use the object called the document. The document has a method called querySelector() which we use to find an element in the document. 

*/

    // In the example below, we are telling our program to "Go to the document and find the element that has a class of "blue". We know that it's looking for a class because like CSS, we are using that "." to denote a class. We can similarly use "#" to target an Id
    document.querySelector(".blue")

    //Currently, all of our boxes are blue. Let's change the color of the "Nikki" box
    // On the line below, I am storing the section with the ID of Nikki in to a variable that I am calling "nikki", since it will be more compact than typing document.getElementById("nikki") every time I want to target that same element. This is a good use of variables.
    const nikki = document.getElementById("nikki")

    // In the function below, you can see that DOM elements have a Property called "style" which we can use to change CSS properties. You can change any of the CSS properties using JS. In this case we are going to set the background to green
    function changeGreen(){
        nikki.style.background = "green"
    }

    //Uncomment the line below and refresh your browser, you will see that the nikki box will now change to the background green. Afterwards, RECOMMENT THE LINE as we are going to call the function a different way.
    // changeGreen()
    // Dont forget to comment this^^ line again!




    /*
    
    Let's say we only wanted to change the nikki box but only when something happens, as opposed to automatically. We'd want to call the changeGreen() function now only when the nikki box is clicked.
    
    In JS, we have event handlers. There are properties that manage actions such as mouse clicks or key presses. There is an onclick property that is called on the targeted element when it has been clicked. 
    
    We can also accomplish this is by using the addEventListener() method. It takes two arguments, the event (in this case a click) and the function that will be executed when the click occurs. 
    Try uncommenting one and then the other. You will see the functionality is the same. Moving forward we will use the addEventListener() method.

    */

    // nikki.onclick = changeGreen
    // nikki.addEventListener('click', changeGreen)


    //Next, we have boxes 1, 2, and 4. Let's say we wanted to change ANY of these boxes to the color red, if they are clicked. We're going to introduce arrow functions and the forEach() method.
    
    //The document has another method called querySelctorAll() which collects multiple elements and stores them in a collection called a nodelist. Let's store our nodeList of boxes 1,2,and 4 in a variable called boxNodeList
    const boxNodeList = document.querySelectorAll(".blue")
    //check out the NodeList in the console. Hover over the sections to see the highlights!
    console.log(boxNodeList)

    /* 
    
    Arrow functions - An arrow function is denoted by this symbol "=>" 
    It is a compact way to write functions. What we are seeing below is the forEach() method which takes in another function as a parameter. We are creating the function within the forEach() method using the => syntax. 
    This function is anonymous and doesn't have a name but it does have a parameter that we have called "box" (we can call it anything but I used "box" for readability.) 
    The line below can be read in English as "Find our boxNodeList (which holds the 1, 2, and 4 boxes from our browser) and for each box in there, we are going to listen for the click event. When that click occurs, run the changeRed() function" 
    
    */
    boxNodeList.forEach(box => box.addEventListener('click', changeRed))

    // Now, changeRed() takes in a parameter, we'll call it click. This click Object, is a pointer (a bit high level for this intro) but it has a Property called "target". This click.target property holds the html section (or box as we've been calling it) that the click occured on. This way we can tell our browser exactly which box to change the style on. Try clicking the sections to see the change.
    function changeRed(click){
        click.target.style.background = "red"
    }

    //Finally, let's try some conditional logic. Let's say we want make the Nikki box dissapear if the "get rid of nikki" box is clicked...
        //First, lets put both the lavendar boxes in a nodeList:

        let lavendar = document.querySelectorAll(".lavendar")

        //Fun fact: some browsers don't recognize forEach() on a nodelist so let's try it on a different data structure called an Array. Arrays are very important in JavaScript so now is a great time to introduce them. Think of it like a list of items. Let's reassign lavendar, to the Array as opposed to the Nodelist. Check your console to see the difference!
        console.log("This is the nodeList: ", lavendar)
        //The from() method called Array, will make an array from the object passed in as an argument. In this case, we're passing in our "lavendar" nodelist
        lavendar = Array.from(lavendar)

        console.log("This is the array: ", lavendar)

        //Similar to the boxNodeList, here, I am adding the event listener to each of the lavendar boxes in the dom. You will see the forEach() method works the same way!
        lavendar.forEach(element => element.addEventListener('click', byeNikki))

        /*
        
        In the .html file, you see the "get rid of nikki" section has an addiitonal class called "remove". This byeNikki function is going to check to see if the clicked box has a class of "remove", and if it does, it will toggle the class "display" (check the CSS file) on to the "nikki" box. Thus setting the display property to "none" on nikki. Otherwise, we're going to make the nikki box have a color of yellow.

        */
        function byeNikki(click){
            /* The conditional starts using the keyword "if". It also has keywords "else if" which can be chained for multiple conditions, and "else" to be encompasing of any conditions not covered.The next few lines reads in English as:
            "If, the clicked element has a class called "remove", then, we will find the element "nikki" and toggle the display CSS rule to it. Otherwise, (or "else"), we will find the nikki element and change the background to yellow" */
            if(click.target.classList.contains("remove")){
                nikki.classList.toggle("display")
            } else {
                nikki.style.background = "yellow"
            }
        }

        //Try clicking the lavendar sections "Get rid of Nikki" and "Keep Nikki" and see how the conditional changes the nikki box depending on which lavendar box is clicked.

//I hope this helps anyone out there get a better understanding of the basics of JavaScript and Dom manipulation. -Zrybea

