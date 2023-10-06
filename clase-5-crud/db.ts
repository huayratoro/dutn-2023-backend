interface Lote {
    id: number;
    provincia: string;
    status: string;
    size: number;
    pathKml?: string;
    pathProductosDisponibles?: string[] 
};
  
// db
const listaLotes: Lote[] = [
    {id: 26301, provincia: "Buenos Aires", status: "Bueno", size: 1000, pathProductosDisponibles: ['ndvi', 'pp', 'heladas']},
    {id: 19217, provincia: "Santa Fe", status: "Malo", size: 1800, pathProductosDisponibles: ['ndvi', 'pp', 'heladas']},
    {id: 91025, provincia: "Salta", status: "Sup", size: 9175, pathProductosDisponibles: ['ndvi', 'pp', 'heladas']},
];

export { Lote, listaLotes }