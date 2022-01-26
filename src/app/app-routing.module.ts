import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignComponent } from './campaign/campaign.component';
import { GroupComponent } from './group/group.component';
import { CreativeComponent } from './creative/creative.component';

const routes: Routes = [
  { path: 'campaign', component: CampaignComponent },
  { path: 'group', component: GroupComponent },
  { path: 'creative', component: CreativeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
