import React, {memo} from "react";
import {Outlet} from "react-router-dom";
import Drawer from "./drawer";
import Hamburger from "../components/hamburger";

type LayoutProps = {}

const Layout = ({}: LayoutProps) => {

    return <div className={"flex w-screen"}>
        <Drawer />
        <div className="flex-1">
            <div className="h-screen w-full overflow-y-scroll  scroll-smooth">
                <Outlet />
            </div>
        </div>
        <Hamburger />
    </div>

}

export default memo(Layout);
