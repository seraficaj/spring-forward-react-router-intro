// in react-router-dom this kind of component needs hooks
import { useParams } from "react-router-dom";

function Add() {
    // useParams returns an object with all url route params
    const { x, y } = useParams();
    console.log(x, y);
    return <h1>Adding Machine</h1>;
}

export default Add;
