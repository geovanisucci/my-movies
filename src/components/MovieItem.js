import { Link } from "react-router-dom";

export const MoveItem = ({movie}) => (
    <li>
        <Link to={`movie/${movie.id}`}>{movie.title}</Link>
    </li>
);