import React, {memo} from "react";
import {useTranslation} from "react-i18next";
import {ArrowDown} from "lucide-react";
import TitleBanner from "../../components/title-banner";
import MenuList from "../../components/menu-list";
import MapBox from "../../components/mapbox";

type HomeProps = {}

const Home = ({}: HomeProps) => {
    const {t} = useTranslation("translation", {useSuspense: false});

    return <div className={""}>
        <section className="banner relative">
            <img className={"h-full w-full object-cover z-10"}
                 src="https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                 alt="welcome"/>
            <div
                className="z-20 absolute inset-0 bg-primary-600/30 font-sans text-6xl sm:text-8xl text-yellow-400 flex items-center justify-center">
                <div className="max-w-3xl text-center">
                    {t("welcomeMessageText")}
                </div>
            </div>
            <a href={"#about"} className="absolute right-0 bottom-0 h-40 sm:h-56 w-56 sm:w-72 bg-white z-30">
                <ArrowDown className={"absolute left-4 top-4 animate-scrolling"} size={24}/>
                <span className={"font-heading absolute left-4 bottom-4"}>Scroll</span>
            </a>
        </section>
        <section id={"about"} className="p-2 sm:p-8 mt-24 mb-12">
            <div className={"p-2 sm:p-8 font-main text-lg sm:text-2xl text-slate-500"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea in, quia! Architecto asperiores,
                    aspernatur.</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam aut commodi culpa dolores
                    doloribus expedita illo iusto, minima, mollitia nesciunt praesentium quis rem reprehenderit
                    repudiandae, tempore unde vero vitae?</p>
                <br/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet consequuntur deserunt
                    dolor dolorem dolores dolorum ducimus et, impedit maiores nam neque, nesciunt nisi qui sapiente sint
                    ut vel vero?</p>
            </div>
        </section>
        <section id={"restaurant"} className="p-2 sm:p-8 mt-8 sm:mt-0">
            <TitleBanner image={"https://seeafricatoday.com/wp-content/uploads/2019/07/food34.jpg"} title={t("restaurantText")} />
            <MenuList />
        </section>
        <section id={"drinks"} className="p-2 sm:p-8 mt-8 sm:mt-0">
            <TitleBanner image={"https://seeafricatoday.com/wp-content/uploads/2019/07/food34.jpg"} title={t("drinksText")} />
            <MenuList />
        </section>
        <section id={"dessert"} className="p-2 sm:p-8 mt-8 sm:mt-0">
            <TitleBanner image={"https://seeafricatoday.com/wp-content/uploads/2019/07/food34.jpg"} title={t("dessertText")} />
            <MenuList />
        </section>
        <section id={"gallery"} className="p-2 sm:p-8 mt-8 sm:mt-0">
            <TitleBanner image={"https://seeafricatoday.com/wp-content/uploads/2019/07/food34.jpg"} title={t("galleryText")} />
            <MenuList />
        </section>
        <section id={"location"} className="h-[500px] mt-24 relative">
            <MapBox />
        </section>
    </div>

}

export default memo(Home);
