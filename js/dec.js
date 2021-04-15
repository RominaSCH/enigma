const decBtn = document.querySelector(".dec_btn");
const decBtnRandom = document.querySelector(".dec_random_btn");
const decResult = document.querySelector(".dec_result");

let DEC_KEY = 0;
const decrypObj = {
  0: "a",
  1: "b",
  2: "c",
  3: "d",
  4: "e",
  5: "f",
  6: "g",
  7: "h",
  8: "i",
  9: "j",
  10: "k",
  11: "l",
  12: "m",
  13: "n",
  14: "o",
  15: "p",
  16: "q",
  17: "r",
  18: "s",
  19: "t",
  20: "u",
  21: "v",
  22: "w",
  23: "x",
  24: "y",
  25: "z",
  26: " ",
  27: "!",
  28: "?",
  29: ",",
  30: "."
};
const decrypObjRandom = {
  6: "a",
  12: "b",
  18: "c",
  8: "d",
  23: "e",
  28: "f",
  3: "g",
  24: "h",
  15: "i",
  19: "j",
  2: "k",
  1: "l",
  9: "m",
  20: "n",
  25: "o",
  29: "p",
  5: "q",
  16: "r",
  0: "s",
  10: "t",
  30: "u",
  14: "v",
  21: "w",
  26: "x",
  11: "y",
  4: "z",
  13: " ",
  7: "!",
  22: "?",
  27: ",",
  17: "."
};

function addKeyValue(DEC_KEY) {
  let addedObj = {};
  const alphabet = ["a","b","c","d","e",'f',"g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " ","!","?", "," , "."];
  const key = Object.keys(decrypObj);
  const value = [];
  for (let i = 0; i < key.length; i++) {
    addedKey = (parseInt(key[i]) + DEC_KEY) % 31;
    addedObj[addedKey] = alphabet[i];
  }
  return addedObj;
}

function addKeyValueRandom(DEC_KEY) {
  let addedObj = {};
  const alphabetR = ["s","l","k","g","z","q","a","!","d","m","t","y","b"," ","v","i","r",".","c","j","n","w","?","e","h","o","x", "," ,"f","p","u"];
  const key = Object.keys(decrypObjRandom);
  //왜 지들맘대로 key order 하고 지랄이야 그냥 냅두지
  const value = [];
  for (let i = 0; i < key.length; i++) {
    addedKey = (parseInt(key[i]) + DEC_KEY) % 31;
    addedObj[addedKey] = alphabetR[i];
  }
  return addedObj;
}

function decrypt(inputValue, obj) {
  let result = [];
  value = inputValue.split(" ");
  for (const num of value) {
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

decBtnRandom.addEventListener("click", () => {
  const decInput = document.getElementById("dec").value;
  const keyValue = document.getElementById("dec-key").value;
  decResult.innerText = "";
  if (keyValue) {
    DEC_KEY = parseInt(keyValue);
  }
  addedObj = addKeyValueRandom(DEC_KEY);
  result = decrypt(decInput, addedObj);
  decResult.innerText = result.join("");
  decResult.value = result.join("");
});

//-------------------copy-------------------//
function copy() {
  const create = document.createElement("input");
  create.setAttribute("value", decResult.value);
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
}

const openBtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  setTimeout( () => {modal.classList.add("hidden")}, 1000);
})