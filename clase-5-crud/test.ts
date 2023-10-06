import {
    listaLotes,
    Lote
} from "./db"

const imprimirIdLotes = ():number[] => {
    const listaIdLotes = listaLotes.map((lote) => {
        return lote.id
    });
    return listaIdLotes
}; 

const imprimirProvinciaLotes = (): string[] => {
    const listaProvinciasLote = listaLotes.map((lote) => {
        return lote.provincia
    });
    return listaProvinciasLote
}

const imprimirEstadoLote = (): string | string[] => {
    const listaEstadosLote = listaLotes.map((lote) => {
        return lote.status
    });
    return listaEstadosLote;
};

const agregarLote = (lote: Lote): Lote[] => {
    listaLotes.push(lote);
    return listaLotes;
}

const idDeLotes = imprimirIdLotes();
const provinciaLotes = imprimirProvinciaLotes();
const estadoLotes = imprimirEstadoLote();

console.log(agregarLote({id: 1324, provincia: "Mendoza", status: "Bueno", size: 1426}));