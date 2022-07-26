let studentsNames =["juice","bobby","mason"]

let teachers = [
    {
        name: "damian",
        subjects: "arrays,javascript,mongodb"
    },
    {
        name: "jonathan",
        subjects: "arrays,javascript"
    },
]

// sort()
// const sortedStudentNames = studentsNames.sort();
// console.log(sortedStudentNames)

// filter
// const filteredStudentNames = studentsNames.filter(
// // // //     // // 
// // // //     (student) => {
// // // //         return student === "bobby"
// // //     }
// //(student) => student === "bobby"
// (student) => true //don't do this
// )
// console.log(filteredStudentNames)




//studentsNames = studentsNames.filter((student) => true)

// const bobby = studentsNames.find((student) => student === "bobby")
// console.log(bobby)

// const someBobby = studentsNames.some((student)=> student === "bobby")
// console.log("Do we have at least a bobby?", someBobby)

// const everyBobby = studentsNames.every((student)=> student === "bobby")
// console.log("Everyone's a bobby?", everyBobby)

// studentsNames.forEach((student) => {
//     console.log(student)
// })

// 


let numbers = [10,20,30]

let totals = numbers.reduce((accumulator,currentValue,index,array) => {
    return accumulator + currentValue;
},0)
console.log(totals)
//same
let total = 0
for(let i=0; i < numbers.length; i++) {
    total += numbers[i]
}

total = numbers.reduce((total,currentNumber) => total + currentNumber,0)//accumulator = total
console.log(total)
