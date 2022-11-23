import React, {memo} from "react";
import ListItem from "./list-item";

type MenuListProps = {}

const MenuList = ({}: MenuListProps) => {

    return <div className={""}>
        {
            [1,2,3,5].map((item, index) => {
                return <ListItem key={index} />
            })
        }
    </div>

}

export default memo(MenuList);
