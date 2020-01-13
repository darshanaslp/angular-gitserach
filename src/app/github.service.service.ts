import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class GithubService {
	private userName = 'Taigers';
	private clientId = '';
	private clientSecret= '';
  
  constructor(private _http:HttpClient) {
    
    
   }

   getUser() {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this._http.get('https://api.github.com/users/' + this.userName + '?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret);
  }
   

   getRepos(){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
   	return this._http.get('https://api.github.com/users/' + this.userName + '/repos?client_id='
   + this.clientId + '&client_secret=' + this.clientSecret);
	}
	updateUser(userName:string){
		this.userName = userName;

   }

}

