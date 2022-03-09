import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
<<<<<<< HEAD
=======
import { Observable } from "rxjs";
>>>>>>> 279bd74... commit para subir a gitlab

@Injectable({ providedIn: 'root' })
export class HttpService {

    constructor(private httpClient: HttpClient) {}

<<<<<<< HEAD
    public getBands = ()  => this.httpClient.get('http://localhost:3000/bands');
=======
    public getBands = () : Observable<any> => this.httpClient.get('http://localhost:3000/bands');
>>>>>>> 279bd74... commit para subir a gitlab
    
}