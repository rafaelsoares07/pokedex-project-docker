// ImageTypeFilters.js
import React from 'react';

export default function ImageTypeFilters({ key, item, onClickFunction, active }) {
    const formatUrlType = (url) => {
        const texto = url.split("/")[url.split("/").length - 1];
        return texto.split(".")[0];
    };

    return (
        <img
            onClick={onClickFunction}
            title={formatUrlType(item)}
            className={`w-12 cursor-pointer ${active ? 'grayscale-0 scale-100 hover:scale-90' : 'grayscale scale-90 hover:scale-100'}`}
            src={item}
            key={key}
        />
    );
}
