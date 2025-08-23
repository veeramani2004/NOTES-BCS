secret_message = "   Programming in Python is not only powerful but also fun!   "


# Task 1.1
# Expected Output
# "PYTHON-POWERFUL"

# clean_sectert_message = secret_message.strip()
# print(clean_sectert_message)

# intex_python = clean_sectert_message.find("Python")
# intex_powerful = clean_sectert_message.find("powerful")
# print(intex_python)
# print(intex_powerful)

# python = clean_sectert_message[15:21].upper()
# powerful = clean_sectert_message[34:42].upper()

# print(f"{python}-{powerful}")

# Task 1.2
flipped_message = "!nuf sseldnE dna seitinutroppo lufrewop htiw nohtyP"

# Expected Output
# "python 🗡️ powerful 🌸"

output = flipped_message[-1::-1].lower()
# print(output)
print(output.find("python"))
print(output.find("powerful"))

print(f"{output[0:7]} 🗡️ {}")
