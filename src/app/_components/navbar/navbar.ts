import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar', // o seletor do componente
  imports: [], // outros componentes ou módulos que este componente utiliza
  templateUrl: './navbar.html', // o arquivo HTML do componente
  styleUrl: './navbar.css', // o arquivo CSS do componente
})

// a classe do componente, onde você pode adicionar lógica e propriedades
export class Navbar implements OnInit {
  ngOnInit(): void {
    this.mensagem();
  }

  mensagem() {
    console.log('Mensagem do Navbar');
  }
}
