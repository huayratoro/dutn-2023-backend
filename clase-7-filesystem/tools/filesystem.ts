// para usar los archivos en local
import fs from "node:fs"
import { v4 as uuid } from "uuid"

// fs.readFileSync

const data = fs.readFileSync("./database/films.json", "utf-8");
const parsedData = JSON.parse(data);

const mappedFilms = parsedData.map((pelicula: any) => {
    return {
            ...pelicula, id: uuid()
        }
});

// se reescribe el objeto en local! 
fs.writeFileSync("./database/films.json", JSON.stringify(mappedFilms))
