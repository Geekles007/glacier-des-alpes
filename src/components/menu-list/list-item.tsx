import React, {memo} from "react";

type ListItemProps = {}

const ListItem = ({}: ListItemProps) => {
    const money = 4000;

    return <div className={"grid grid-cols-12 font-heading"}>
        <div className="col-span-2 flex items-center justify-center border">{money.toLocaleString('en-US', {maximumFractionDigits:2})} XAF</div>
        <div className="col-span-10 p-8 border">Beef∙Chipotle-Beer-Beef + Smokey Peppers</div>
    </div>

}

export default memo(ListItem);
