import Stripe from "stripe";


export interface ProductType {
    id: string;
    name: string;
    unit_amount: any;
    image: string;
    price_id?: string;
    currency?: any;
    decription? : string | null;
    metadata? : String.Metadata;
    quantity? : number;
}