import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';

export const routes: Routes = [
  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'post',
    component: PostComponent,
  },
];
