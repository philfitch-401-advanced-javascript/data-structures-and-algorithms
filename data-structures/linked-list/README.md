# Singly Linked List
Explore working with linked lists.

## Challenge
Create a linked list,
insert nodes,
check if the list includes a value,
return a list of values
insert into a linked list

## Approach & Efficiency
Write a test for each method and try writing code to pass the test.
The constructor and .insert are O(1). The includes and .toString methods involved making an array from the list, so were a little less efficient. I wonder if there is a better way?

## API
.insert adds a node to the front of the list.
.includes checks if the list includes a value.
.toString returns a string of all values in the list.
.append adds node to the end of the list.
.insertBefore adds node before a given node.
.insertAfter adds node after a given node.