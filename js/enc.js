const encBtn = document.querySelector(".enc_btn");
const encResult = document.querySelector(".enc_result");

encryp_list = {
    "a":"1",
    "b":"2",
    "c":"3",
    "d":"4",
    "e":"5",
    "f":"6",
    "g":"7",
    "h":"8",
    "i":"9",
    "j":"10",
    "k":"11",
    "l":"12",
    "m":"13",
    "n":"14",
    "o":"15",
    "p":"16",
    "q":"17",
    "r":"18",
    "s":"19",
    "t":"20",
    "u":"21",
    "v":"22",
    "w":"23",
    "x":"24",
    "y":"25",
    "z":"26",
    " ":"27"
}

function encrypt(inputValue){
    let result = [];
    value = inputValue.toLowerCase();
    value = value.split("");
    for(const alpha of value){
        result.push(encryp_list[alpha]);
    }
    return result;
}

encBtn.addEventListener("click", ()=>{
    const encInput = document.getElementById("enc").value;
    result = encrypt(encInput);
    encResult.innerText = result.join(" ");
    encResult.value = result.join(" ")
})

// document.querySelector(".enc-copy-button").addEventListener("click", ()=>{
//     const boxResult = encResult.value;
//     boxResult.select();
//     document.execCommand("Copy");
// })