

const moreLarge = ( str1 = '', str2='' ) => {
    
    if( str1.length > str2.length ){
        return `'${str1}' is larger than '${str2}'`;
    }else if( str1.length < str2.length){
        return `'${str2}' is larger than '${str1}'`;  
    } else{
        return 'Both strings are equal'; 
    }

}

console.log(moreLarge('hola','mundo'))

const evenOrOdd = ( num = 0 ) => {
    if(num % 2 === 0){
        return `The number ${num} is Even` ;
    }else{
        return `The number ${num} is Odd`;
    }
}

console.log(evenOrOdd( 0 ))