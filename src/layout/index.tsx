import React, {memo} from "react";
import {Outlet} from "react-router-dom";
import Drawer from "./drawer";

type LayoutProps = {}

const Layout = ({}: LayoutProps) => {

    return <div className={"grid grid-cols-12"}>
        <div className="col-span-3 relative">
            <div className="sticky w-full">
                <Drawer />
            </div>
        </div>
        <div className="col-span-9">
            <div className="h-screen overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    </div>

}

export default memo(Layout);
