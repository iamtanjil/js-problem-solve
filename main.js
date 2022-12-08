// 1.radian to degree

function radianToDegree (radian){
    if(typeof radian === 'number'){
    const degreeCal = (radian * 180) / Math.PI;
    let degree = degreeCal.toFixed(2);
    return degree;
    }
    else{
        return 'input a valid value'
    }
}


//2.js file check

function isJavaScriptFile (fileName){
    if(typeof fileName === 'string'){
        if(fileName.endsWith('.js')){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return 'input a valid number';
    }
    }



//3. oil price calculation

function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity){
    if(typeof dieselQuantity === 'number' && typeof petrolQuantity === 'number' && typeof octaneQuantity === 'number'){
        const dieselPrice = dieselQuantity * 114;
        const petrolPrice = petrolQuantity * 130;
        const octanePrice = octaneQuantity * 135;
        const totalPrice = dieselPrice + petrolPrice + octanePrice;
        return totalPrice;
    }
    else{
        return 'input a valid value'
    }
 }


 //4. Public Bus Fare:

 function publicBusFare(picnicMemmber){
    if(typeof picnicMemmber === 'number'){
    const bus =50;
    const micro = 11;
    const publicBusFare = 250;
    const restMember = (picnicMemmber%bus)%micro;
    const totalBusFare = restMember * publicBusFare;
    return totalBusFare;
    }
    else{
        return 'input a valid value'
    }
    }



//5. check bestfriend

const bestFriend1 = {name:'abul', friend:"babul"};
const bestFriend2 = {name:'babul', friend:"abul"};
function isBestFriend(bestFriend1, bestFriend2){
    if(bestFriend1.name === bestFriend2.friend && bestFriend1.friend === bestFriend2.name){
        return true;
    }
    else{
        return false;
    }
}