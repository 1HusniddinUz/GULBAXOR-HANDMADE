import React from "react";
import "../../assets/Navbar.css";
import {useTranslation} from "react-i18next";
const Navbar = () => {
    const {t , i18n} = useTranslation();
    return (
        <nav>
            {/*<a href="/" style={{ width: "20%" }}>*/}
            {/*  <img*/}
            {/*    width="100%"*/}
            {/*    height="auto"*/}
            {/*    style={{ objectFit: "cover" }}*/}
            {/*    src="https://i.ibb.co/PZ6t1W66/cebaf008-edd3-4303-a200-03ce4914ac46-removalai-preview.png"*/}
            {/*    alt="NaqshbandHunarmadlari Logo"*/}
            {/*  />*/}
            {/*</a>*/}
            <h1>GULBAHOR-HANDMADE</h1>
            <ul>
                <li>
                    <a href="/">{t(`headersec`)}</a>
                </li>
                <li>
                    <a href="#OurProducts">{t(`products`)}</a>
                </li>
                <li>
                    <a href="#Footer">{t(`contact`)}</a>
                </li>
            </ul>
            {/* LANG PROVIDER */}
            <div className="lang_switcher_mobile">
                <a href="tel:+998997234487" target="_blank" rel="noopener noreferrer">
                    {t(`phone`)} +998(99) 723 44 87
                </a>
                <select
                    id="select"
                    onChange={(e) => i18n.changeLanguage(e.target.value)}
                    defaultValue="ru"
                >
                    <option value="ru">🇷🇺 Русский</option>
                    <option value="en">🇬🇧 English</option>
                    <option value="uz">🇺🇿 O'zbek</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;
