import {IMenu} from "../../models/IMenu";
import {MENUS} from "../../constants";

class LayoutController {

    links: IMenu[] = [
        {
            title: "restaurantText",
            link: MENUS.restaurant
        },
        {
            title: "drinksText",
            link: MENUS.drinks
        },
        {
            title: "dessertText",
            link: MENUS.dessert
        },
        {
            title: "galleryText",
            link: MENUS.gallery
        },
        {
            title: "locationText",
            link: MENUS.location
        }
    ]

}

export default new LayoutController();
