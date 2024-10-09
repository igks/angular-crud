import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private userService = inject(UserService);

  isLoading: boolean = true;
  users: any = [];

  ngOnInit() {
    this.userService.getAllUser().subscribe({
      next: (user) => {
        console.log(user);
        this.users = user;
        this.isLoading = false;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
