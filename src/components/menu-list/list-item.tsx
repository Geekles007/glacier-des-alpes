import React, {memo} from "react";

type ListItemProps = {}

const ListItem = ({}: ListItemProps) => {
    const money = 4000;

    return <div className={"flex font-heading"}>
        <div className="w-24 flex items-center justify-center border">{money.toLocaleString('en-US', {maximumFractionDigits:2})} XAF</div>
        <div className="flex-1 p-8 border">Beef∙Chipotle-Beer-Beef + Smokey Peppers</div>
    </div>

}

export default memo(ListItem);
