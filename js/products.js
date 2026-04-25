// Base de datos de productos con soporte para Categorías (Rama)
window.productsData = [
    {
        id: 1,
        name: "ESTAÑO",
        category: "Soldadura",
        description: "Distintos Porcentajes: 33% / 40% / 50%. Excelente calidad para soldadura industrial.",
        image: "images/Imagen1.png",
        basePrice: 0,
        priceDisplay: "Consultar",
        stock: 50,
        variants: [{ name: "33%", price: 0 }, { name: "40%", price: 0 }, { name: "50%", price: 0 }],
        link: "#"
    },
    {
        id: 2,
        name: "DECAPANTES Y FUNDENTES",
        category: "Químicos",
        description: "No corrosivos. Para distintas aplicaciones: Estaño, Bronce, Aluminio.",
        image: "images/Imagen3.png",
        basePrice: 1500,
        priceDisplay: "$1.500",
        stock: 20,
        variants: [{ name: "Estaño", price: 1500 }, { name: "Bronce", price: 1800 }, { name: "Aluminio", price: 2000 }],
        link: "#"
    },
    {
        id: 3,
        name: "TACHOS PLÁSTICOS",
        category: "Radiadores",
        description: "Para reparación y fabricación de radiadores. Calidad original y variedad de modelos.",
        image: "images/Imagen5.png",
        basePrice: 0,
        priceDisplay: "Consultar",
        stock: 100,
        variants: [],
        link: "#"
    },
    {
        id: 4,
        name: "HERRAMIENTAS DE SOLDADURA",
        category: "Herramientas",
        description: "Accesorios y herramientas especializadas para el rubro industrial y automotriz.",
        image: "images/Imagen2.png",
        basePrice: 0,
        priceDisplay: "Consultar",
        stock: 15,
        variants: [],
        link: "#"
    },
    {
        id: 5,
        name: "PANALES Y RADIADORES",
        category: "Radiadores",
        description: "Amplio stock en panales para automotores e industria pesada.",
        image: "images/Radiador.png",
        basePrice: 0,
        priceDisplay: "Consultar",
        stock: 30,
        variants: [],
        link: "#"
    },
    {
        id: 6,
        name: "INSUMOS VARIOS",
        category: "Otros",
        description: "Todo lo necesario para la mantenimiento y reparación de sistemas de enfriamiento.",
        image: "images/Imagen4.png",
        basePrice: 0,
        priceDisplay: "Consultar",
        stock: 200,
        variants: [],
        link: "#"
    }
];
