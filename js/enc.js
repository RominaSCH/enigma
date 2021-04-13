const encBtn = document.querySelector(".enc_btn");
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
  };

function addKeyValue(ENC_KEY) {
  let addedObj = {};
  const alphabet = ["a","b","c","d","e",'f',"g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " "];
  for(const alpha of alphabet){
      addedObj[alpha] = (encrypObj[alpha] + ENC_KEY)%27;
  }
  // console.log(addedOjb);
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
  addedObj = addKeyValue(ENC_KEY);
  result = encrypt(encInput, addedObj);
  encResult.innerText = result.join(" ");
  encResult.value = result.join(" ");
});

function copy(){
  const create = document.createElement("input");
  create.setAttribute("value", encResult.value);
  document.body.appendChild(create);
  create.select();
  document.execCommand("copy");
  document.body.removeChild(create);
  alert("copy!");
}//갓뎀 된다 이제 된다..body.appendChild 가 날 살렸다!!!!

