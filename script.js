const btn = document.getElementById('btn');
const list = document.querySelector('ul');
let sortedArr = [];
let tries = 0;

function createArray(arr){
    for(let i = 0;i<=1000;i++){
        arr.push(i)
    }
}
createArray(sortedArr)

// Max and Min values

let max = sortedArr[sortedArr.length-1];
let min = sortedArr[0];

//get midpoint value
function getMid(){
    if(min>50)return Math.round(max-((max-min)/2))
    else return Math.floor(max-((max-min)/2))
}

//assign midpoint value
let midPoint = getMid();

function guessNumber(){
    btn.value = 'Click it again'
    let guess = parseInt(document.getElementById('guess').value);
            if(midPoint == guess){
                tries++
                list.innerHTML +=`<li>${midPoint} - Got it</li>`
                list.innerHTML +=`<li>It took me ${tries} tries</li>`
                btn.setAttribute('disabled',true)
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

//event
btn.addEventListener('click',guessNumber)


