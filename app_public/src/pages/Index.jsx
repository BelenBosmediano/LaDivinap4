import { Link } from "react-router-dom";

const Index = () => {
    return (
        
        <div>
            <h1 className="display-1">La Divina Eventos</h1>
            <Link to={`/eventos`} className="btn btn-primary">Ver eventos</Link>
        </div>
        
    );
};

export default Index;