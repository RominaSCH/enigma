const encBtn = document.querySelector(".enc_btn");
const encResult = document.querySelector(".enc_result");

let YOUR_KEY;
const encryp_list = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
    " ": 27,
  };

function listAddKeyValue(key) {
    let addedList = {};
  const alphabet = ["a","b","c","d","e",'f',"g","h","i","j",'k',"l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  for(const alpha of alphabet){
      addedList[alpha] = (encryp_list[alpha] + key)%27;
  }
  console.log(addedList);
  return addedList;
}

function encrypt(inputValue, list) {
    let result = [];
    value = inputValue.toLowerCase();
    value = value.split("");
    for (const alpha of value) {
      result.push(list[alpha]);
    }
    return result;
  }

encBtn.addEventListener("click", () => {
  const encInput = document.getElementById("enc").value;
  const keyValue = document.getElementById("enc-key").value;
  encResult.innerText = "";
  if (keyValue) {
    YOUR_KEY = parseInt(keyValue);
  }
  addedList = listAddKeyValue(YOUR_KEY);
  result = encrypt(encInput, addedList);
  encResult.innerText = result.join(" ");
});

// document.querySelector(".enc-copy-button").addEventListener("click", ()=>{
//     const boxResult = encResult.value;
//     boxResult.select();
//     document.execCommand("Copy");
// })
