## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman


const fs = require('fs')

fs.readFile('abc.txt', 'utf-8', (err, data)=> {
  let data1 = data.replace(/\s+/g, ' ')
  
  
  fs.writeFile('abc.txt', data1, 'utf-8', (err, data)=> {
    console.log(data1)
  
  })
})
```