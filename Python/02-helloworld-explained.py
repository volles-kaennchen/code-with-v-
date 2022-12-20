print("Hello World")
print("Python ist schon was tolles <3")
print("LIEBE FUER ALLE")

#Eine Funktion
def addiere(a, b):
    #Einen Zeilenkommentar macht man mit der Rautetaste.
    #
    #
    return a + b

#Hier wird eine Variable namens summe definiert und initialisiert
summe = addiere(3, 4)

#formatierte Ausgaben lassen sich mit formatierten Zeichenketten
#literalen in Kombination mit print-funktion erzeugen
print( f"Summe ist {summe}.\nDas doppelte ist {summe*2}!") #formatiert
print("Die Summe ist", summe, "\nDas doppelte ist", summe *2)