"use strict";
//* process 1
// const friendAge: Array<number> = [23, 23, 22, 23.5, 21, 22, 22.6, 26, 27, 24.9]
//* process 2
// const friendAge: number[] = [23, 23, 22, 23.5, 21, 22, 22.6, 26, 27, 24.9]
//* Accessing Elements
// const firstFriendAge = friendAge[0];
//* Modifying Arrays
const students = ["A SI F", "Rasel", "Sakib", "Mushfiq", "Najmul"];
//? as a array last element
students.push("Liton Kumar Das"); // [ 'A SI F', 'Rasel', 'Sakib', 'Mushfiq', 'Najmul', 'Liton Kumar Das' ]
// when you shift function call then remove your array fast element.
students.shift();
// when you pop function call then remove last element in this array
students.pop();
console.log('students :>> ', students);
//* Declaring Tuples
const user = ["A SI F", 23, true];
//* Tuples for Function Return Values
const marks = [43, 34, 80, 35, 90, 53, 34, 65, 67, 37];
const totalMarks = (allMarks) => {
    const totalSumMark = allMarks.reduce((sum, mark) => sum + mark, 0);
    console.log('totalSumMark :>> ', totalSumMark);
};
totalMarks(marks);
