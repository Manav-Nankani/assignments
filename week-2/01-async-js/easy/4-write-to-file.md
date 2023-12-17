## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

additionalData = 'Kami was here';

fs.readFile('index2.js', 'utf-8',(err, data) =>{

const newContent = data + additionalData

  fs.writeFile('index2.js', newContent ,'utf-8', (writeErr)=>{
    if(writeErr) {
      console.error('Error writing to file:', writeErr);
    }
    else {
       console.log('File has been updated successfully!');
    }
  })

})