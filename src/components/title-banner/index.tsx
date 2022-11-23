import React, {memo} from "react";

type TitleBannerProps = {
    title: string;
    image: string;
}

const TitleBanner = ({title, image}: TitleBannerProps) => {

    return <div className={"relative mb-28"}>
        <div className="h-[600px] overflow-hidden grayscale transition-all duration-500 hover:grayscale-0">
            <img src={image} alt={title} className={"object-cover object-center"}/>
        </div>
        <div className="h-40 flex items-center font-sans bg-yellow-400 h-24 px-4 text-5xl absolute left-12 -bottom-12">
            {title}
        </div>
    </div>

}

export default memo(TitleBanner);
