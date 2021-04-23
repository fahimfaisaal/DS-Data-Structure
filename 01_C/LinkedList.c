#include <stdio.h>

typedef struct node Node;

struct node {
    int data;
    Node *next;
};

Node *createNode(int item, Node *next) {
    Node *newNode = (Node *)malloc(sizeof(Node));
    
    if (newNode == NULL) {
        printf("Error! Could not create a new Node.");
        exit(1);
    }

    newNode->data = item;
    newNode->next = next;

    return newNode;
}

int main() {


    return 0;
}