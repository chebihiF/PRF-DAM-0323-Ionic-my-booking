import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false ;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCrtl: LoadingController
    ) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true
    this.authService.logIn();
    this.loadingCrtl.create({
      keyboardClose: true,
      message: 'Loggin in ...'
    }).then(loadingEl => {
      loadingEl.present();
      setTimeout(()=>{
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/places/tabs/discover');
      },2500);
    })



  }

}
