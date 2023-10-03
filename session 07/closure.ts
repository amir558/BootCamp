
// function counter(){
//     let count = 0;

//     function increase(){
//         count ++;
//         return count;
//     }

//     return increase;
// }

// const add = counter();
// add()
// add()
// add()
// console.log(add());

// const add2 = counter();
// console.log(add2());
// console.log(add());


function makeAdder(x){

    function adder(y){
        console.log("y"+y);
        console.log("x"+x);
        return x + y;
    }

    return adder;
}

const add1 = makeAdder(5);
// const add2 = makeAdder(10);

console.log(add1(3));
// console.log(add1(4));

// console.log(add2(3));


