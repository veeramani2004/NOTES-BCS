# no_of_person = 3


# if no_of_person <= 2:
#     print("We will take 🛵 to the party")
# else:
#     print("We will take 🏎️ to the party")


# if no_of_person <= 2:
#     print("We will take 🛵 to the party")
# elif no_of_person == 3:
#     print("We will take 🛺 to the party")
# else:
#     print("We will take 🏎️ to the party")


# if, else - 1, elif - multiple


# Task 1.1
# Get two person name and height
# Case 1:
# Ethan, Luvuyo
# 185cm, 175cm
# Ethan is taller than Luvuyo by 10cm

# Case 2:
# Ethan, Luvuyo
# 185cm, 194cm
# Luvuyo is taller than Ethan by 9cm


# Task 1.2
# Case 3:
# Ethan, Luvuyo
# 185cm, 185cm
# Ethan and Luvuyo are of the same height

# person_1_name = input("Enter your name?")
# person_2_name = input("Enter your name?")

# person_1_hight = int(input("Enter your Hight?"))
# person_2_hight = int(input("Enter your Hight?"))
# difference = abs(person_1_hight - person_2_hight)

# if person_1_hight == person_2_hight:
#     print(f"{person_2_name} and {person_1_name}  are of the same height")

# elif person_1_hight > person_2_hight:
#     print(f"{person_1_name} is taller than {person_2_name} by{difference}")
# else:
#     print(f"{person_2_name} is taller than {person_1_name} by {difference}cm")


stock1 = "vanilla"
stock2 = "chocolate"
stock3 = "tin roof"
stock4 = "cookie dough"

# Output
# Case 1
# Please enter your fav 🍧?:    VAnilla
# Yes, we have vanilla in stock

# Case 2
# Please enter your fav 🍧?: salted Caramel
# Sorry, we ran out of Salted Caramel

# Task 1.1
# Clue: if..elif..else


# Task 1.2
# Clue: or (Refactoring)


# Task 1.3
# Clue: in (Refactoring)

icecream = input("Please enter your fav 🍧?:").strip().lower()

# if icecream==stock1 :
#     print( f"Yes, we have {icecream} in stock")
# elif icecream==stock2:
#     print(f"")


if icecream in [stock1, stock2, stock3, stock3]:
    print(f"Yes, we have {icecream.title()} in stock")
else:
    print(f"Sorry, we ran out of {icecream.title()}")
