import { MoveItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <section>
        <ul>
            {movies.map(m => <MoveItem title={m.title}></MoveItem>)}
        </ul>
    </section>
);