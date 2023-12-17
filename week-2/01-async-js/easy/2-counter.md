## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let a = 1000;

function domo() {
  setTimeout(function () {
    console.log("hi there");
    a += 1000;
   
    domo();
  }, a);
}

domo();




































































(Hint: setTimeout)