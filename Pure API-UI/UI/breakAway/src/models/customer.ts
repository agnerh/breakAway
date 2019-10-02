export class Customer {
    public id: number;
    public title: string;
    public firstName: string;
    public lastName: string;
    public type: CustomerType;
}

export enum CustomerType {
    Standard = 1,
    Silver = 2,
    Gold = 3
}