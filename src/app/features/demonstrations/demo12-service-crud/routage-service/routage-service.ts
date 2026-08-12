import { Component } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref } from "@angular/router";

@Component({
  selector: 'app-routage-service',
  imports: [RouterOutlet, RouterLinkWithHref],
  templateUrl: './routage-service.html',
  styleUrl: './routage-service.css',
})
export class RoutageService {}
