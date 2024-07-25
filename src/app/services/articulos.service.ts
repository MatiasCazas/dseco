import { HttpClient } from "@angular/common/http";
import { ARTICULOS } from "../../enviroments/enviroment";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ArticulosService {

    constructor(
        private http: HttpClient
    ) {}

    getAllArticulos(){
        return this.http.get<any[]>(ARTICULOS)
    }

}
