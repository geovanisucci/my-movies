import { MoveItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MoveItem movie={m}></MoveItem>)}
        </ul>
    </section>
);