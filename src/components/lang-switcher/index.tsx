import React, {memo, useCallback, useEffect} from "react";
import {Globe} from "lucide-react";
import i18n from "i18next";

type LangSwitcherProps = {}

const LangSwitcher = ({}: LangSwitcherProps) => {
    const [lang, setLang] = React.useState<string | null>(i18n.language || "en");

    useEffect(() => {
        i18n.changeLanguage(lang ?? i18n.language).then(r => {
            console.debug("lang changed", r);
        });
    }, [lang]);

    const handleLangChange = useCallback(() => {
        setLang(oldLang => oldLang === "fr" ? "en" : "fr");
    }, [setLang]);

    return <button className={"flex gap-1 text-yellow-400 uppercase font-normal"} onClick={handleLangChange}>
        <Globe size={22} color={"black"} /> <strong>{lang}</strong>
    </button>

}

export default memo(LangSwitcher);
