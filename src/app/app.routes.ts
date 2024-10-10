import { Routes } from '@angular/router';
import { UserComponent } from './pages/user/user.component';
import { PostComponent } from './pages/post/post.component';
import { AddUpdateUserComponent } from './pages/add-update-user/add-update-user.component';

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
  {
    path: 'user/add',
    component: AddUpdateUserComponent,
  },
  {
    path: 'user/update/:id',
    component: AddUpdateUserComponent,
  },
];
