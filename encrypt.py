from decrypt import ask as decrypt

encryp_list = {
    "a":"1",
    "b":"2",
    "c":"3",
    "d":"4",
    "e":"5",from decrypt import ask as decrypt

YOUR_KEY = 0
# 키를 써서 대응변수가 rotate하도록 만들기.
# 그러려면 .. str인 value를 int화 해서 모듈
# value+YOUR_KEY % 26 로 rotate를 해줄 수 있다
# 해독이 조금 어려워지지만 경우의 수가 26개밖에 없어
# 해독에 큰 영향을 주는 난이도는 아니다.
# value를 int화 할 경우 join함수가 안먹으므로 그 점에 유의할 것

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
    # print("Make your own KEY number(0~26)")
    # YOUR_KEY = int(input(">"))
    enc_list = encryption(sentence)
    enc_result = ' '.join(enc_list)
    print(enc_result)

choose()
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