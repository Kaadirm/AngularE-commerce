export class QuickLinks {
    // field
    id: number;
    link: string;
    text: string;
    className: string;
      
    // constructor
    constructor(
        id: number,
        link: string,
        text: string,
        className: string
    ){
        this.id = id;
        this.link = link;
        this.text = text;
        this.className = className;
    }

    // methods

}