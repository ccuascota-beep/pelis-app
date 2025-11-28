import {useEffect, useState} from "react";

export default function peliculas() {
    const [peliculas, setPeliculas] = useState([])
    const [loading, setLoading] = useState(true)

    const traerImagenPeliculas = async () => {

        try {
            const result = await fetch(`https://imdb.iamidiotareyoutoo.com/search?q=Spiderman`)
            const data = await result.json()


            const listaPeliculas = data.description;
            const promesasPeliculas = listaPeliculas.map ( async (pelicula) => {
                const img = await (data.description["#IMG_POSTER"])
                return {
                    ...pelicula,
                    imagen: img
                }
            })

    const peliculas = async () => {
        try {
            const results = await fetch("https://imdb.iamidiotareyoutoo.com/search?q=Spiderman")
            const data = await results.json()

            setPeliculas(data.results)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        peliculas()
    }, []);

    return (
        <div className="UIU"></div>
    )
 }

