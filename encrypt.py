from decrypt import ask as decrypt

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
    "z":"26"
}

def encryption(word):
  result = []
  word = word.replace(" ","")
  word = word.lower()
  for i in word:
    # if type(i) == int:
    #     result.append(i)
    # else:
    result.append(encryp_list[i])
  
  return result

def choose():
  print("What do you want to use?")
  print("Encryption or Decryption?")
  print("Encryption is 1")
  print("Decryption is 2")
  choose = int(input(">"))
  if choose == 1:
    ask()
  elif choose == 2:
    decrypt()
  else:
    print("Write the valid number")
    choose()

def ask():
    print("Make your own secret words")
    print("Don't write the number, just alphabet.")
    sentence = input(">")
    enc_list = encryption(sentence)
    enc_result = ' '.join(enc_list)
    print(enc_result)

choose()