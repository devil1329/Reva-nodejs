import { Injectable } from '@angular/core';
import { HttpClient, JsonpInterceptor } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AnimeService {

	constructor(private http: HttpClient) { }
	strUrl: string = "http://localhost:8030/reva/api/v1/anime";

	getAnime(animeFor: string): Observable<any> {
		return this.http.get(`${this.strUrl}/get-anime/${animeFor}`);
	}

	register(registerObj : any) : Observable<any> {
		const headers = { 'content-type': 'application/json' };
		const body = JSON.stringify(registerObj);
		return this.http.post(this.strUrl + `/register`, body, { 'headers': headers, observe : 'response' });
	}

	login(loginObj: any): Observable<any> {
		const headers = { 'content-type': 'application/json' };
		const body = JSON.stringify(loginObj)
		return this.http.post(this.strUrl + '/login', body, { 'headers': headers, observe : 'response' })
	}

}
