export class Alert {
    public message: string;
    public type: AlertsType;
}

export enum AlertsType {
    Primary = 1,
    Secondary = 2,
    Success = 3,
    Danger = 4,
    Warning = 5,
    Info = 6,
    Light = 7,
    Dark = 8
}
  