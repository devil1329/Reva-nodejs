import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimeService } from '../anime.service';

@Component({
	selector: 'app-login-registration',
	templateUrl: './login-registration.component.html',
	styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit{

	registerObj : any = {
		username : '',
		email : '',
		password : ''
	};
	loginObj : any = {
		email : '',
		password : ''
	};
	
	constructor(private router : Router, private animeService : AnimeService){}
	ngOnInit(): void {
	    
	}
	data! : any;
	log! : string;
	onRegister(){
		this.animeService.register(this.registerObj).subscribe(
			response => {
			const message = response.body.message;
			alert(message);
			},
			error => {
				alert('Error occurred!!! \nMight be already registered!!! ');
			})
		this.registerObj = {
			username : '',
			email : '',
			password : ''
		};
	}
	onLogin(){
		this.animeService.login(this.loginObj).subscribe
		(response => {
			this.data = response;
			console.log(this.data)
			if(this.data.status == 200)
					this.router.navigate(['/Home']);
		},
		error=>{
			alert("Wrong Credentials");
		})
	}
}
