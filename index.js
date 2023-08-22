function  receivesAFunction(other){
    other()
}

function returnsANamedFunction(){
    return function fn(){"before all"}
}

function  returnsAnAnonymousFunction(){
    return function(){"before all"}
}