const encBtn = document.querySelector(".enc_btn");
const encBtnRandom = document.querySelector(".enc_random_btn");
const encResult = document.querySelector(".enc_result");

let ENC_KEY = 0;
const encrypObj = {
    "a": 0,
    "b": 1,
    "c": 2,
    "d": 3,
    "e": 4,
    "f": 5,
    "g": 6,
    "h": 7,
    "i": 8,
    "j": 9,
    "k": 10,
    "l": 11,
    "m": 12,
    "n": 13,
    "o": 14,
    "p": 15,
    "q": 16,
    "r": 17,
    "s": 18,
    "t": 19,
    "u": 20,
    "v": 21,
    "w": 22,
    "x": 23,
    "y": 24,
    "z": 25,
    " ": 26,
    "!": 27,
    "?": 28,
    ",": 29,
    ".": 30
  };

  const encrypObjRandom = {
    "a": 6,
    "b": 12,
    "c": 18,
    "d": 8,
    "e": 23,
    "f": 28,
    "g": 3,
    "h": 24,
    "i": 15,
    "j": 19,
    "k": 2,
    "l": 1,
    "m": 9,
    "n": 20,
    "o": 25,
    "p": 29,
    "q": 5,
    "r": 16,
    "s": 0,
    "t": 10,
    "u": 30,
    "v": 14,
    "w": 21,
    "x": 26,
    "y": 11,
    "z": 4,
    " ": 13,
    "!": 7,
    "?": 22,
    ",": 27,
    ".": 17
  };

function addKeyValue(Obj, ENC_KEY) {
  let addedObj = {};
  const alphabet = ["a","b","c","d","e",'f',"g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " ","!","?", "," , "."];
  for(const alpha of alphabet){
      addedObj[alpha] = (Obj[alpha] + ENC_KEY)%31;
  }
  return addedObj;
}

function encrypt(inputValue, obj) {
    let result = [];
    value = inputValue.toLowerCase();
    value = value.split("");
    for (const alpha of value) {
      result.push(obj[alpha]);
    }
    return result;
}

encBtn.addEventListener("click", () => {
  const encInput = document.getElementById("enc").value;
  const keyValue = document.getElementById("enc-key").value;
  encResult.innerText = "";
  if (keyValue) {
    ENC_KEY = parseInt(keyValue);
  }
  addedObj = addKeyValue(encrypObj ,ENC_KEY);
  result = encrypt(encInput, addedObj);
  encResult.innerText = result.join(" ");
  encResult.value = result.join(" ");
});

encBtnRandom.addEventListener("click", () => {
  const encInput = document.getElementById("enc").value;
  const keyValue = document.getElementById("enc-key").value;
  encResult.innerText = "";
  if (keyValue) {
    ENC_KEY = parseInt(keyValue);
  }
  addedObj = addKeyValue(encrypObjRandom, ENC_KEY);
  result = encrypt(encInput, addedObj);
  encResult.innerText = result.join(" ");
  encResult.value = result.join(" ");
});


//-------------------copy-------------------//
function copy() {
  const create = document.createElement("input");
  create.setAttribute("value", encResult.value);
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
}//갓뎀 된다 이제 된다..body.appendChild 가 날 살렸다!!!!

const openBtn = document.getElementById("open");
const modal = document.querySelector(".modal");
const overlay = modal.querySelector(".modal_overlay");
const closeBtn = modal.querySelector("button");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
  setTimeout( () => {modal.classList.add("hidden")}, 1000);
})