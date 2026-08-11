import { Component } from '@angular/core';
import { Demo11NgContentEnfant } from "../demo11-ng-content-enfant/demo11-ng-content-enfant";

@Component({
  selector: 'app-demo11-ng-content-parent',
  imports: [Demo11NgContentEnfant],
  templateUrl: './demo11-ng-content-parent.html',
  styleUrl: './demo11-ng-content-parent.css',
})
export class Demo11NgContentParent {}
