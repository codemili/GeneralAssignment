
const text = "Hello this is my world!";
var dText = "H  yleti dlhsw!li oosmr"
function encode(stringText){
    var obj = []
    var array = [];
    for(let m = 0; m<stringText.length; m+=5){
        for(let i = m; i< m+5; i++){
            if(stringText[i] !== undefined){
                obj.push(stringText[i])
            }
        }
        array.push(obj);
        obj = []
    }
    var enText = ''
    for(let one in array){
        // console.log('arrayone',array[one])
        for(let i =0; i<5; i++){
            if(array[i][one] !== undefined){
                enText+=array[i][one]
            }
        }
    }
    console.log(enText);
}

function dencode(stringText){
    var obj = []
    var array = [];
    for(let m = 0; m<stringText.length; m+=5){
        for(let i = m; i< m+5; i++){
            if(stringText[i] !== undefined){
                obj.push(stringText[i])
            }
        }
        array.push(obj);
        obj = []
    }
    var enText = ''
    for(let one in array){
        console.log('arrayone',array[one])
        for(let i =0; i<5; i++){
            if(array[i][one] !== undefined){
                enText+=array[i][one]
            }
        }
    }
    console.log(enText);
    // return enText;
}
// encode(text)
dencode(dText);
