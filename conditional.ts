type A = null;
type B = undefined;

type C = A extends null ? true : false; // expected to be false


type RichPeoplesVehicle = {
    bike:string;
    car:string;
    boat:string;
}

// type checkVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

type checkVehicle<T> = T extends keyof RichPeoplesVehicle ? true : false;

type HasVehicle = checkVehicle<"bike">; // expected to be true