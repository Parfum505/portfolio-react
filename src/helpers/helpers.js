import React from "react";

export function splitToSpan(str, index = null) {
    const title = str.split("");
    return title.map((item, i) => {
        if(item === " ") {
            return <span key={i} >{item}</span>
        } else if(Number.isInteger(index) && i >= index) {
            return <span key={i} className="letter text-secondary">{item}</span>
        }  else {
            return <span key={i} className="letter">{item}</span>
        }
    });
}