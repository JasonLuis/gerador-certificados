import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './_components/navbar/navbar';
import { CommonModule } from '@angular/common';

import { BaseUi } from './_components/base-ui/base-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, CommonModule, BaseUi], // CommonModule é necessário para usar *ngIf
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('gerador-certificados');
  exibeNavbar: boolean = false;
}
