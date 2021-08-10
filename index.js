function saturdayFun(activity='roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun('bathe my dog') 


function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(symbol='*'){
    return function(statement){
        return `You are ${symbol}${statement}${symbol}!`
    }
}
