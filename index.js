// Find squares between two numbers
function squares (first, second){
   var count = 0;
   var whichOne = []
   for(let i = first; i<=second; i++){
     for(let j =0; j<= second; j++){
         if (j *j == i) {
            count += 1
            whichOne.push(j*j)
         }
     }
   }
   console.log('whichOne', whichOne)
   return count;
}

console.log(squares(24, 49))


// Scytale
function spartansEncoder(t, l) {
  let sLength = t.length;
  let divideSLenght = Math.round(sLength / l);

  var encodedString = "";
  let subStr = new RegExp(".{1," + divideSLenght + "}", "g");
  const splitedString = t.match(subStr);

  for (let i = 0; i <= splitedString[0].length; i++) {
    for (let j in splitedString) {
      if (splitedString[j][i]) {
        encodedString += splitedString[j][i];
      }
    }
  }
  console.log(encodedString);
}

function spartansDecipher(t, l) {
  var decodedString = "";
  let subStr = new RegExp(".{0," + l + "}", "g");
  const splitedString = t.match(subStr);
console.log(splitedString);
  for (let j in splitedString) {
    for (let i in splitedString) {
      if (splitedString[i][j] !== undefined) {
        decodedString += splitedString[i][j];
      }
    }
  }

  console.log(decodedString);
}

spartansEncoder("Tesh is the love of my life.", 4);
spartansDecipher("T vyete sh lheoi  ffil esom.", 4);
