import { useParams } from "react-router-dom";

function Service({services}) {
    const { id } = useParams();
    // match one service to the route params
    const foundService = services.find(service => service.id.toString() === id)
    return (
        <div>
            <h2>Service Details</h2>
            <h3>{foundService.name}</h3>
            <p>{foundService.price}</p>
            <p>{foundService.description}</p>
        </div>
    );
}

export default Service;
