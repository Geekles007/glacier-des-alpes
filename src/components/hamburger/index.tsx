import React, {memo} from "react";
import {Menu, X} from "lucide-react";
import {useDrawer} from "../../stores/DrawerStore";

type HamburgerProps = {}

const Hamburger = ({}: HamburgerProps) => {
    const {switchValue, opened} = useDrawer(state => state);

    return <a onClick={() => switchValue(true)} className={"fixed left-4 top-4 bg-yellow-400 p-2 z-50 lg:hidden block"}>
        {
            opened ? <X size={20} /> : <Menu size={20} />
        }
    </a>

}

export default memo(Hamburger);
