interface myObjLayout {
    id: number;
    color: string;
    nextColor: string;
}

interface dayLayout {
    targetDay: number;
    nextDay: string;
}

// const resultLimit : number = 18;

// const Persons : myObjLayout[] = [
//     {
//         id: 1,
//         name :'heshmat',
//         result : 54
//     },
//     {
//         id: 2,
//         name :'abbas',
//         result : 100
//     },
//     {
//         id: 3,
//         name :'gholi',
//         result : 21
//     },
//     {
//         id: 4,
//         name :'ayoob',
//         result : 81
//     },
//     {
//         id: 5,
//         name :'akbar',
//         result : 16
//     },
//     {
//         id: 6,
//         name :'nosrat',
//         result : 40
//     },
//     {
//         id: 7,
//         name :'asqar',
//         result : 72
//     }
// ]

//  Persons.map(person =>{
//     person.result >= resultLimit ? 
//         console.log(`Salam ${person.name} ba sene ${person.result} khosh omadiii`)
//         : console.log(`Salam ${person.name} ba sene ${person.result} mojaz nisti felan khoda hafez.`)
//  })

//  Persons.map(person =>{
//     if(person.result >= 90){
//         console.log(`${person.name} is A`);
//     }
//     else if(person.result >= 80){
//         console.log(`${person.name} is C`);
//     }
//     else if(person.result >= 70){
//         console.log(`${person.name} is D`);
//     }
//     else if(person.result >= 60){
//         console.log(`${person.name} is E`);
//     }
//     else{
//         console.log(`${person.name} is F`);
//     }
//  })

// const Colors : myObjLayout[] =[
//     {
//         id: 1,
//         color: 'red',
//         nextColor: 'green'
//     },
//     {
//         id: 2,
//         color: 'green',
//         nextColor: 'yellow'
//     },
//     {
//         id: 3,
//         color: 'yellow',
//         nextColor: 'red'
//     },
// ]

// const nowColor : string = prompt('pleasr type color : ').toLowerCase();

// Colors.map(color =>{
//     color.color == nowColor ? console.log(color.nextColor) : 'cheraq kharabe'
// })


// Colors.map(color =>{
//     switch (color.color) {
//         case 'red':
//             console.log(color.nextColor)
//             break;
//         case 'green':
//             console.log(color.nextColor)
//             break;
//         case 'yellow':
//             console.log(color.nextColor)
//             break;
//         default:
//             break;
//     }
// })


const Days : dayLayout[] =[
    {
        targetDay: 0,
        nextDay: 'Shanbe'
    },
    {
        targetDay: 1,
        nextDay: 'One Shanbe'
    },
    {
        targetDay: 2,
        nextDay: 'Two Shanbe'
    },
    {
        targetDay: 3,
        nextDay: 'Three Shanbe'
    },
    {
        targetDay: 4,
        nextDay: 'Four Shanbe'
    },
    {
        targetDay: 5,
        nextDay: 'Five Shanbe'
    },
    {
        targetDay: 6,
        nextDay: 'Jomeh'
    }
]

const getDay : number = 3;

Days.map(day =>{
    day.targetDay == getDay ? console.log(day.nextDay) : 'day kharabe'
})
