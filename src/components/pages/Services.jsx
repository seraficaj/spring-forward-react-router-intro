import { Link } from "react-router-dom";

function Services({ services }) {
    const serviceLinks = services.map((service, idx) => {
        return (
            <li key={`service-link${idx}`}>
                <Link to={`/services/${service.id}`}>{service.name}</Link>
            </li>
        );
    });
    return (
        <div>
            <h2>Services</h2>
            <ul>
                {serviceLinks}
            </ul>
        </div>
    );
}

export default Services;
