export interface Store {
    id:number;
    state:string;
    city:string;
    neighborhood:string;
    delegation?:string;
    cp:string;
    address:string;
    image?:string;
    name:string;
    thumbs?:string[];
    numExt?:string;
    numInt?:string;
    active:boolean;
    position:google.maps.LatLngLiteral;
}
