decryp_list = {
    "1": "a",
    "2": "b",
    "3": "c",
    "4": "d",
    "5": "e",
    "6": "f",
    "7": "g",
    "8": "h",
    "9": "i",
    "10": "j",
    "11": "k",
    "12": "l",
    "13": "m",
    "14": "n",
    "15": "o",
    "16": "p",
    "17": "q",
    "18": "r",
    "19": "s",
    "20": "t",
    "21": "u",
    "22": "v",
    "23": "w",
    "24": "x",
    "25": "y",
    "26": "z"
}


def decrytion(list):
    result = []
    for i in list:
        result.append(decryp_list[i])
    return result


def ask():
    print("Do you want to DECRYPT?")
    print("Write the ciphertext.")
    ciphertext = input(">")
    cipher_list = ciphertext.split(" ")
    result = decrytion(cipher_list)
    result = ''.join(result)
    print(result)
