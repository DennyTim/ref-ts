import { User } from './User';
import { Company } from './Company';

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    color: string;
    markerContent(): string;
}

export class CustomMap {
    private googleMap: google.maps.Map;

    constructor(divId: string) {
        //Построить карту с начальной точкой и масштабированием
        this.googleMap = new google.maps.Map(document.getElementById(divId), {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addMarker(mappable: User | Company): void {
        // Добавить маркеры на карту
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });
        
        //Добавить контент в инфо окно
        const infoWindow = new google.maps.InfoWindow({
            content: mappable.markerContent()
        });

        marker.addListener('click', () => {

            infoWindow.open(this.googleMap, marker);
        });
    }
}
