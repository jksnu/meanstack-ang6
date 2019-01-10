export class ContactModel{

    public _id: string = "";
    public isContactAdded: boolean = false; 
    public userId: string = "";
    public name: string = "";
    public email: string = "";
    public phone: string = "";
    public address: string = "";
    public income: number = 0;
    public createdDate: string = "";
    public modifiedDate: string = "";

    constructor(){ }
}