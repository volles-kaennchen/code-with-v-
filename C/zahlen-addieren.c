//Das IO-Modul enthält u.a. die Funktionen printf und scanf für die Aus und Eingabe
#include <stdio.h>

int main(void)

{
    int a = 0;
    printf("Speicheradresse von a ist %p\n\n", &a);

    printf("Gib erste Zahl ein: ");
    scanf("%d", &a);

    printf("Gib zweite Zahl ein: ");
    int b = 0;
    scanf("%d", &b);

    int summe = a + b;
    printf("Summe von %d und %d ist %d", a, b, summe);
    return 0;
}
