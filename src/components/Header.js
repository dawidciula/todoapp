import React from "react";

function Header(props)
{
    if (props.whichHeader === 'h1') {
        return <h1>{props.content}</h1>;
    }
    if (props.whichHeader === 'h2') {
        return <h2>{props.content}</h2>;
    }
    if (props.whichHeader === 'h3') {
        return <h3>{props.content}</h3>;
    }
    if (props.whichHeader === 'h6') {
        return <h6>{props.content}</h6>;
    }

    return <h1>{props.content}</h1>;
}

export default Header