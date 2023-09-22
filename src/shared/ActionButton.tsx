import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types";

interface Props {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <AnchorLink
        className="  "
        onClick={ () => setSelectedPage (SelectedPage.OurServices)}
        href= {`#${SelectedPage.OurServices}`}
        >
            {children}

        </AnchorLink>




      
    )
}

export default ActionButton;