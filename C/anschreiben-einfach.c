#include <stdio.h>

int main() {

    char* receiver = "Herr Mayer";
    int attachments = 2;

    printf("Sehr geehrter %s,\n\n", receiver);
        printf("Hiermit bestätige...\n\n");
        printf("Anhänge: %d", attachments);

        return 0;
}