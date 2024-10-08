import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  private userService = inject(UserService);

  isLoading: boolean = true;

  ngOnInit() {
    this.userService.getAllUser().subscribe((user) => {
      console.log(user);
      this.isLoading = false;
    });
  }
}
