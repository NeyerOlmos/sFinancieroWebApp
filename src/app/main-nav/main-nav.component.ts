import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../modules/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
      roles: string[];
  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService, private router: Router) {
    if(!this.authService.isLogged()){
      this.router.navigateByUrl('/Auth/SignIn');
    } else {
      
    }
  }

logOut(){
  this.authService.logOut();
}
hasPermission(_module: string,action?: string){
  return this.authService.hasPermission(sessionStorage.getItem('roles') ,_module,action);
}
isLogged(){
  return this.authService.isLogged();
}
}
