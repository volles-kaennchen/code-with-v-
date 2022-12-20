#include <stdio.h>

int main() {

    char* receiver[256];
    int attachments = 2;

    scanf("%[^\n]", &receiver);

    printf("Sehr geehrter %s,\n\n", receiver);
        printf("Hiermit bestätige...\n\n");
        printf("Anhänge: %d", attachments);

        return 0;
}
