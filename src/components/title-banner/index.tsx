import React, {memo} from "react";

type TitleBannerProps = {
    title: string;
    image: string;
}

const TitleBanner = ({title, image}: TitleBannerProps) => {

    return <div className={"relative mb-28"}>
        <div className="h-80 sm:h-[600px] overflow-hidden sm:grayscale transition-all duration-500 sm:hover:grayscale-0">
            <img src={image} alt={title} className={"w-full h-full object-cover object-center"}/>
        </div>
        <div className="flex items-center font-sans bg-yellow-400 h-16 sm:h-24 px-4 text-3xl sm:text-5xl absolute left-12 -bottom-8">
            {title}
        </div>
    </div>

}

export default memo(TitleBanner);
