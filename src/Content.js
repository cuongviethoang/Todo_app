import { useContext } from "react";
import { ThemeContent } from "./ThemeContact";

import "./App.css";
function Content() {
    const context = useContext(ThemeContent);
    return (
        <p className={context.theme}>
            hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </p>
    );
}

export default Content;
