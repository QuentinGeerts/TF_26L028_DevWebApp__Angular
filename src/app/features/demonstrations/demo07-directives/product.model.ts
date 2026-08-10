export interface Product {
    id : number;
    name : string;
    price : number;
    stock : number;
}

export interface ProductFull{
    id : number;
    name : string;
    price : number;
    stock : number;
    promo : boolean;
}