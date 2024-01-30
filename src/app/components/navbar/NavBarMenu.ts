export class NavBarMenu {
    // field
    id: number;
    link: string;
    text: string;
    className: string;
    isPopUp: boolean;
    popUpMenu?: { 
        id: number;
        link: string;
        text: string;
        className: string;
    }[]

    // constructor
    constructor(
        id: number,
        link: string,
        text: string,
        className: string,
        isPopUp: boolean,
        popUpMenu?: { 
            id: number;
            link: string;
            text: string;
            className: string;
        }[]
    ){
        this.id = id;
        this.link = link;
        this.text = text;
        this.className = className;
        this.isPopUp = isPopUp;
        this.popUpMenu = popUpMenu;
        this.className = className;
    }

    // methods

}