const env = import.meta.env;

const MENUS = {
    location: "#location",
    restaurant: "#restaurant",
    drinks: "#drinks",
    dessert: "#dessert",
    gallery: "#gallery",
}

const MAP_BOX_TOKEN = env.VITE_MAP_BOX_TOKEN

export {
    MENUS,
    MAP_BOX_TOKEN
}
