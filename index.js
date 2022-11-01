const hq = 42
const cityBlock = 264
const farePricePerFoot = .02

function distanceFromHqInBlocks(blocks) {
   if (blocks >= hq) {
    return blocks - hq
    } else {
     return hq - blocks
   }
}

function distanceFromHqInFeet(feet){
    return distanceFromHqInBlocks(feet) * cityBlock
}

function distanceTravelledInFeet(start, destination){
    if (start >= destination){
        return (start - destination) * cityBlock
    } else {
        return (destination - start) * cityBlock
    }
}


function calculatesFarePrice(start, destination) {
   const distance = distanceTravelledInFeet(start, destination); 
   if (distance > 2500){
    return 'cannot travel that far'
   } else if (distance <=400) {
    return 0
    } else if (distance >= 2000) {
    return 25
   } else if (distance >= 401) {
    return (distance - 400) * farePricePerFoot
   }
}