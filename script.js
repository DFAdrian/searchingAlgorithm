// const btn = document.querySelector('.container__btn');
// const spanName = document.querySelector('.container__span');

// let namesArray = ['aurelio','macandal','messi','cristiano','pancracio']

// function randomName(arr){
//     let picked = Math.floor(Math.random()*arr.length)
//     return arr[picked];
// }


// btn.addEventListener('click',()=>{
//     spanName.textContent = randomName(namesArray)
// })

////////////////////////////                    create array-add item into array-search item in array

// const ul = document.querySelector('ul');
// let array = [];
// const create = document.getElementById('create');
// const insert = document.getElementById('insert');
// const index = document.getElementById('index');
// const value = document.getElementById('value');
// const search = document.getElementById('search');

// //create array....
// function createArr(){
//     for(let i = 0;i<=10;i++){
//         array[i] = Math.floor(Math.random()*100 +1);
//     }
//     displayArr(array)
// }

// //display Array...
// function displayArr(arr){
//     ul.textContent= '';
//     for(let i = 0;i<arr.length;i++){
//         ul.innerHTML += `<li>${i} : ${arr[i]}</li>`
//     }
// }


// //add item within Array...
// function addItem(arr,index,val){
//     let updateArray = [];
//     for(let i = 0;i < index;i++){
//         // updateArray.push(arr[i])
//         updateArray[i]= arr[i]
//     }
//     // updateArray.push(val)
//     updateArray[updateArray.length]=val
//     for(let i = index;i < arr.length;i++){
//         // updateArray.push(arr[i])
//         updateArray[i+1]= arr[i]
//     }
//     updateArray.pop()
//     array = updateArray
//     return array
// }


// function seachArray(arr,val){
//     for(let i =0;i<arr.length;i++){
//         if(arr[i] == val) return document.querySelector('p').textContent =`${val} was found at index ${i}`
//     }
// }


// //events....
// create.addEventListener('click',createArr)

// insert.addEventListener('click',()=>{
//     let indx = parseInt(index.value);
//     let val = parseInt(value.value);
//     document.querySelector('h3').textContent = `${val} was added at index ${indx}`
//     let update = addItem(array,indx,val);
//     displayArr(update) 
// })

// search.addEventListener('click',()=>{
//     let val = document.getElementById('find').value
//     seachArray(array,val)
// })


////////////////////////////////////
const btn = document.getElementById('btn');
const list = document.querySelector('ul');
let sortedArr = [];
let tries = 0;
let guessed = false;

function createArray(arr){
    for(let i = 0;i<=1000;i++){
        arr.push(i)
    }
}
createArray(sortedArr)

let max = sortedArr[sortedArr.length-1];
let min = sortedArr[0];

function getMid(){
    if(min>50)return Math.round(max-((max-min)/2))
    else return Math.floor(max-((max-min)/2))
}

let midPoint = getMid();

function guessNumber(){
    let guess = parseInt(document.getElementById('guess').value);
            if(midPoint == guess){
                tries++
                list.innerHTML +=`<li>${midPoint} - Got it</li>`
                list.innerHTML +=`<li>It took me ${tries} tries</li>`
                guessed = true
            }else if(midPoint > guess){
                tries++
                max = midPoint
                list.innerHTML +=`<li>${midPoint} - Mmm it is too high</li>`
            }else if(midPoint < guess){
                tries++
                min = midPoint
                list.innerHTML +=`<li>${midPoint} -Mmm it is too low</li>`
            }
            midPoint = getMid()
        }      
        
btn.addEventListener('click',guessNumber)


