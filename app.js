const fs = require('fs')
const starttime = Date.now()
let endtime

fs.readFile('text.txt', () => {
  endtime = Date.now()
  console.log('finish reading time: ', endtime - starttime)
})

let index = 0

function handler () {
  if (index++ >= 30) return
 // console.log(`nextTick ${index}`)
 // process.nextTick(handler)
   console.log(`setImmediate ${index}`)
   //setImmediate(handler)
  handler();
}

handler()
