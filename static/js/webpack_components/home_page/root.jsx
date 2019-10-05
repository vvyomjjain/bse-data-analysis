import React from "react";
import ReactDom from "react-dom";

export class Root extends React.Component {
    render = () => {
        return <div>Home</div>;
    };
}

export const render = (element_id) => {
    ReactDom.render(<Root />, document.getElementById(element_id));
};
