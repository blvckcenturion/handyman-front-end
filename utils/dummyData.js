import { faTruckLoading, faSink, faCarSide, faBolt, faHeartbeat, faHotdog, faHandSparkles, faWarehouse  } from "@fortawesome/free-solid-svg-icons"

export const AVAILABLE_CITIES = [
    'Cochabamba',
    'Santa Cruz',
    'La Paz',
    'Tarija',
    'Oruro',
    'Potosi',
]

export const SEARCH_RESULTS = [
    
]

export const CATEGORIES = [
    {
        name: "Transporte",
        icon: faTruckLoading,
        description: "Servicios de transporte de todo tipo de elementos",
    },
    {
        name: "Mecanica",
        icon: faCarSide,
        description: "Servicios de mantenimiento y reparacion mecanica",
    },
    {
        name: "Fontaneria",
        icon: faSink,
        description: "Instalacion y mantenimiento de redes de tuberias.",
    },
    {
        name: "Electricidad",
        icon: faBolt,
        description: "Instalacion y reparaciones relacionadas a elementos electricos",
    },
    {
        name: "Salud",
        icon: faHeartbeat,
        description: "Servicios relacionados a la salud tanto mental como fisica"
    },
    {
        name: "Catering",
        icon: faHotdog,
        description: "Servicios de catering y servicios de alimentos"
    },
    {
        name: "Limpieza",
        icon: faHandSparkles,
        description: "Servicios de limpieza y mantenimiento de instalaciones"
    },
    {
        name: "Construccion",
        icon: faWarehouse,
        description: "Servicios de construccion y mantenimiento de instalaciones"
    }
]