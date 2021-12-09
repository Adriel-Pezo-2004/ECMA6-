// ----CLASE 4-----
//  --Clases--
class calculadora {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB;
    }
}

const cal = new calculadora();
console.log(cal.sum(2,3));