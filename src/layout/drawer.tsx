import React, {memo} from "react";
import LayoutController from "./controller";
import {useTranslation} from "react-i18next";
import {MENUS} from "../constants";
import LangSwitcher from "../components/lang-switcher";
import {useDrawer} from "../stores/DrawerStore";

type DrawerProps = {}

const styles = {
    part: `text-center text-yellow-400 border-b border-b-primary-800 h-14 flex items-center justify-center relative`,
    link: `text-center text-yellow-400 border-b border-b-primary-800 h-14 flex items-center justify-center relative
                           after:content-[''] after:block after:absolute after:bottom-0 after:h-[0.1px] after:w-0 after:bg-yellow-400
                           after:transition-all after:duration-500 after:delay-0 hover:after:w-full`
}

const Drawer = ({}: DrawerProps) => {
    const {links} = LayoutController;
    const {t} = useTranslation("translation", {useSuspense: false});
    const {opened} = useDrawer(state => state);

    return <div className={`w-80 transition-all duration-500 h-screen bg-primary-700 font-heading p-5 flex flex-col items-center absolute lg:sticky lg:translate-x-0 -translate-x-full overflow-y-scroll ${opened && "translate-x-0 z-40"}`}>
        <div className="flex flex-col w-full">
            {
                links.map((item, index) => (
                    <a href={item?.link} key={index}
                       className={styles.link}>{t(item?.title)}</a>
                ))
            }
        </div>
        <div className="flex-1 flex items-center">
            <div className="rounded-full bg-black h-56 w-56 flex items-center justify-center">
                <div className="rounded-full border border-2 border-white h-44 w-44"></div>
            </div>
        </div>
        <div className="flex flex-col w-full">
            <div className={`${styles.link}`}>
                <LangSwitcher/>
            </div>
            <div className={`${styles.link} flex-col text-sm`}>
                <a href="tel:+237699295660">+237 699 29 56 60</a>
                <a href="tel:+237675373918">+237 675 37 39 18</a>
            </div>
            <a className={`${styles.link} flex-col text-sm`} href={MENUS.location}>
                <span>Cité Sic Cacao</span>
                <span>({t("addressText")})</span>
            </a>
            <div className={`${styles.part} flex-col text-sm text-black`}>
                <span>{t("monFriText")}: 07:00 - 02:00</span>
                <span>{t("satSunText")}: 07:00 - 02:00</span>
            </div>
        </div>
    </div>;

}

export default memo(Drawer);
