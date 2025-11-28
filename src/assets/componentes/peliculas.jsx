import { useEffect, useState } from "react";

export default function Peliculas() {
    const [peliculas, setPeliculas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPeliculas = async () => {
            setLoading(true);
            try {
                const results = await fetch("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman");
                const data = await results.json();

                if (!results.ok) {
                    throw new Error(`HTTP error! status: ${results.status}`);
                }
                if (!data || !data.results) {
                    throw new Error("No se encontraron resultados");
                }

                setPeliculas(data.results);
            } catch (e) {
                console.error("Error fetching peliculas:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchPeliculas();
    }, []);

    if (loading) {
        return <p>Cargando peliculas...</p>;
    }

    return (
        <div className="UqedqedIU">
            {peliculas.map((pelicula) => (
                <div key={pelicula.id}>
                    <p>{pelicula.title}</p>
                </div>
            ))}
        </div>
    );
}
