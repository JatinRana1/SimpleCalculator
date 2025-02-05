import { Button } from "react-bootstrap";

export const CustomButton = props => {
    let btnColor = '';

    switch (props.text) {
        case '/' :
        case 'x' :
        case '-' : 
        case '+' : 
        case 'C' :
            btnColor = 'secondary';
            break;
        case '=' :
            btnColor = 'primary';
            break;
        default:
            btnColor = 'light';
            break;
    }
    
    return (
        <Button variant={btnColor} className="w-100 my-font" {...props}>{props.text}</Button>
    )
}