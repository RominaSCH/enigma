const decBtn = document.querySelector(".dec_btn");
const decResult = document.querySelector(".dec_result");

let DEC_KEY = 0;
const decrypObj = {
    "0": "a",
    "1": "b",
    "2": "c",
    "3": "d",
    "4": "e",
    "5": "f",
    "6": "g",
    "7": "h",
    "8": "i",
    "9": "j",
    "10": "k",
    "11": "l",
    "12": "m",
    "13": "n",
    "14": "o",
    "15": "p",
    "16": "q",
    "17": "r",
    "18": "s",
    "19": "t",
    "20": "u",
    "21": "v",
    "22": "w",
    "23": "x",
    "24": "y",
    "25": "z",
    "26": " ",
}

function addKeyValue(DEC_KEY){
    let addedObj = {};
    const alphabet = ["a","b","c","d","e",'f',"g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];
    const keys = Object.keys(decrypObj);
    const value = [];
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i] // 각각의 키
        addedKey = (parseInt(keys[i]) + DEC_KEY)%27;
        addedObj[addedKey] = alphabet[i];
      }
    return addedObj;
}

function decrypt(inputValue, obj){
    let result = [];
    value = inputValue.split(" ");
    for(const num of value){
        result.push(obj[num]);
    }
    return result;
}

decBtn.addEventListener("click", () => {
    const decInput = document.getElementById("dec").value;
    const keyValue = document.getElementById("dec-key").value;
    decResult.innerText = "";
    if (keyValue) {
      DEC_KEY = parseInt(keyValue);
    }
    addedObj = addKeyValue(DEC_KEY);
    result = decrypt(decInput, addedObj);
    decResult.innerText = result.join("");
  });