import { Http } from '@angular/http'
import { MEAT_API } from '../app.api'

import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){

    }

    findAll(): Observable<any[]> {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(r => r.json())
    }

    findById(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(r => r.json())
    }

    findReviewsByRestaurantId(id: string): Observable<any[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(r => r.json())
    }

    findMenuByRestaurantId(id: string): Observable<any[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(r => r.json())
    }
}