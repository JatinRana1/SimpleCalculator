export const calculateEQ = (input) => {

    //equation validation
    const exp = /[/,+,-,x]/g;
    const validation = input.split(exp);
    let validationStatus = true;
    validation.forEach((digit)=>{
        if(digit === '')  {
            validationStatus = false
        };
    })
    
    if(!validationStatus){
        return 'Malformed expression';
    }else{
        const operators = ['/','x','-','+'];
        let equation = []; 
        let number = '';
        for(let char of input){
            if(operators.find((operator)=> operator === char)){
                equation.push(number);
                equation.push(char);
                number = '';
            }else{
                number += char;
            }
        }
        //including the last number
        equation.push(number);
        // console.log(equation);
        
        let result = [...equation];
        // console.log((equation[0] / equation[2]).toString());
        console.log('equation length: ' + equation.length)
        for(let i = 0; i < equation.length - 1; i++){
            console.log(i);
            switch(equation[i]){
                case '/' : 
                    equation.splice(0, 3, (equation[i - 1] / equation[i + 1]).toString());
                    i = 0;
                break;
                case 'x' : 
                    equation.splice(0, 3, (equation[i - 1] * equation[i + 1]).toString());
                    i = 0;
                break;
                case '+' : 
                    equation.splice(0, 3, (+equation[i - 1] + +equation[i + 1]).toString());
                    i = 0;
                break;
                case '-' : 
                    equation.splice(0, 3, (equation[i - 1] - equation[i + 1]).toString());
                    i = 0;
                break;
            }
        }

        let formatted_result = result.join('') + ' = ' + Number.parseFloat(equation).toFixed(2);
        return formatted_result;
    }
}