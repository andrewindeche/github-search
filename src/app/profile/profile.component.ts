import { Component,OnInit} from '@angular/core';
import { GitService } from 'src/app/git.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  Profile:any;
  repository:any;
  followers:any;
  following:any;
  username:string;
  notFound=false;

  constructor(private service: GitService) { }

  searchUser() {
  this.service.updateFields(this.username);
  this.service.getProfileData()
    .subscribe(profile => {
      // console.log(profile);
      this.Profile = profile;
    }, error => {
      this.notFound = !this.notFound;
    });
  // clears input field
  this.username = '';

  this.service.getRepoData()
    .subscribe(repos => {
      this.repository = repos;
      // console.log(repos);
    });

  this.service.getFollowers()
    .subscribe(followers => {
      this.followers = followers;
    })

  this.service.getFollowing()
    .subscribe(following => {
      this.following = following;
    })
}

  ngOnInit() {
  }
 }
