import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileService } from "../../app/shared/profile.service";
import { Profile } from "../shared/profile.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit ,OnDestroy {

  profiles: Profile[] = [];
  image:Profile

  private profileSubscription: Subscription;

  constructor(private profilesService: ProfileService) {}

  ngOnInit(): void {
    this.profilesService.getProfiles();
    this.profileSubscription = this.profilesService
      .getProfilesStream()
      .subscribe((profiles: Profile[]) => {
        this.profiles = profiles;
        console.log(this.profiles[0].imagePath);
       // this.image=this.profiles[0] // appel juste image 0
        
      });
  }

  ngOnDestroy() {
    this.profileSubscription.unsubscribe();
  }

}
