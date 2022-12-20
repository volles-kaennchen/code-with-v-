 //Hier wird das Modul Standard-Input-Output importiert
#include <stdio.h>     

//Eine Forward Declaration macht dem Compiler eine Funktion bekannt, ohne Sie zu definieren.
//Grund: Bevor wir eine Funktion aufrufen können, müssen wir diese erst dem Compiler bekannt machen (deklarieren).
int addiere(int a, int b);

//Die Main-Funktion ist der Haupteinstiegspunkt in das Programm

int main(void)  
{
	printf("Hello World\n");    //Das ist ein Zeilenkommentar
	printf("Wer das liest ist doof!\n");

    //Definiere die Variable summe vom Typ int und initialisieren Sie den Rückgabewert des Funktionsaufrufes addieren
    int summe = addiere(2, 3);
    printf("Summe ist %d.\nDie doppelte Summe ist %d.", summe, summe * 2);

    /* Das ist ein Kommentar.
        Dies ist auch über mehrere Zeilen möglich */

	return 0;
}

int addiere(int a, int b)
{
    return a + b;
}