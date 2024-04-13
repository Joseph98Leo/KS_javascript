const squareSide = prompt( "Write the square side" )*1;
const squareDiagonal = ( side ) => {
    ( side > 0)
        ? console.log(`The diagonal of the squeare is ${ side * Math.sqrt(2) }`)
        : console.log("Please write a valid number")

}
squareDiagonal( squareSide )

const   side1 = 5,
        side2 = 6,
        side3 = 7;

const areaTriangle = ( side1, side2, side3 ) => {
    const sP = (side1 + side2 + side3) / 2;
    const area = Math.sqrt( sP*(sP - side1)*(sP - side2)*(sP - side3) )
    return `El area del triangulo con lados 5, 6 y 7 es ${ area }`
}

console.log(areaTriangle(side1, side2, side3))

const circunference = ( r ) => {

    const area = Math.PI * r ** 2;
    const surfaceArea = 2 * Math.PI * r;
    
    return (`El area de la circunferencia es ${ area } y su superficie es ${ surfaceArea } `)
}

console.log(circunference( 4 ))