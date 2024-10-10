import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../models/User';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-update-user',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './add-update-user.component.html',
  styleUrl: './add-update-user.component.css',
})
export class AddUpdateUserComponent implements OnInit {
  private userService = inject(UserService);
  private userId: string = '0';

  user: User = new User();

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      console.log(params['id']);
    });
  }

  ngOnInit(): void {
    this.populateUser();
  }

  populateUser() {
    if (this.userId) {
      this.userService.getUserById(Number(this.userId)).subscribe({
        next: (user) => (this.user = user as User),
        error: (error) => console.log(error),
      });
    } else {
      this.user = new User();
    }
  }

  onSubmit() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        console.log(res);
        alert('User added successfully');
        this.router.navigate(['/user']);
      },
      error: (error) => console.log(error),
    });
  }
}
