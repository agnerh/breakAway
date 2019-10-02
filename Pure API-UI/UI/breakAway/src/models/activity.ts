export class Activity {
    public id: number;
    public title: string;
    public type: ActivityType;
}

export enum ActivityType {
    Standard = 1,
    Silver = 2,
    Gold = 3
}