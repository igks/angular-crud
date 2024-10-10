import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

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

  constructor(private router: Router) {}

  onEdit(id: number) {
    this.router.navigate([`/user/update/${id}`]);
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.userService.deleteUser(id).subscribe({
        next: () => alert('User delete successfully'),
        error: (error) => console.log(error),
      });
    }
  }

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
