const { Component } = require("react");

export function LI({ contact}) {
    const {name, number } = contact;
    return <li>
        <p>{name}</p><span>:</span><p>{number}</p>
    </li>
}


