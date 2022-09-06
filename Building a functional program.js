// Task 1: Build a function-based console log message generator
function consoleStyler(color,background,fontSize,text) 
{    var message = "%c" + text;
    var style = `color: ${color};` 
  style += `background: ${background};`
    style += `font-size: ${fontSize};`
        console.log(message,style) }

// Task 2: Build another console log message generatorfunction 
 function celebrateStyler(reason) { 
      var fontStyle = "color: tomato; font-size: 50px" ;

        if (reason == "birthday") 
        { console.log(`%cHappy birthday`,fontStyle) 
        }    
        else if (reason == "champions") 
        { console.log(`%cCongrats on the title!`,fontStyle )}  
        
        else {console.log(message, style)}}
// Task 3: Run both the consoleStyler and the celebrateStyler 
consoleStyler('#1d5c63','#ede6db','40px','Congrats!');
celebrateStyler('birthday')
// Task 4: Insert a congratulatory and custom messagefunction 

  function styleAndCelebrate(color, background, fontSize, text ,reason) 
{ 
    consoleStyler(color, background, fontSize, text);
    celebrateStyler(reason)}styleAndCelebrate('#ef7c8e','#fae8e0','30px','You made it!','champions');
  // Call styleAndCelebrate
