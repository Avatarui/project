import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { ProfileComponent } from './profile/profile.component';
import { ToptenComponent } from './topten/topten.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UserRatingComponent } from './user-rating/user-rating.component';
import { InfoprofileComponent } from './infoprofile/infoprofile.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'login', component: LoginComponent},
    { path: 'createaccount', component: CreateaccountComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'topten', component: ToptenComponent},  
    { path: 'userinfo', component: UserinfoComponent},  
    { path: 'gallory', component: GalleryComponent},  
    { path: 'user-rating', component: UserRatingComponent},  
    { path: 'info-profile', component: InfoprofileComponent},  
];
