import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Card } from '../../models/card';
import { Title } from '@angular/platform-browser';
import { Tag } from '../../models/tags';

@Component({
  selector: 'app-porfolio',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './porfolio.component.html',
  styleUrl: './porfolio.component.css',
  providers: []
})
export class PorfolioComponent {
  projects: Card[] = [
    {
      id: 1,
      name: 'Ego-Task Frontend',
      summary: "Simulador de organizador de tareas para los estudiantes que quieran organizar sus tareas y puedan ver su historial a traves del sitio web, en donde compañeros podran participar para ayudarse mutuamente",
      description: "Ego Task es una aplicación web diseñada para optimizar la organización y gestión de tareas tanto individuales como en equipo. Desarrollada con HTML, CSS, TypeScript y Angular, esta plataforma permite a los usuarios crear, asignar y monitorear tareas en tiempo real, asegurando una colaboración eficiente dentro de un entorno intuitivo y moderno.",
      projectLink: 'https://github.com/CesarTapia10/proyecto_organizador-frontend-',
      tags: [Tag.HTML, Tag.CSS, Tag.TYPESCRIPT, Tag.ANGULAR],
      pictures: ["assets/ego-task-front1.png", "assets/ego-task-front2.png", "assets/ego-task-front3.png", "assets/ego-task-front4.png", "assets/ego-task-front5.png","assets/ego-task-front6.png"]
    },
    {
      id: 2,
      name: 'Ego-Task Backend API',
      summary: 'API que se encarga de la gestión de usuarios,  gestión de tareas, control de acceso, seguridad y autenticación. Asegurando una comunicacion fluida con el frontend, utilizando los verbos http(GET, POST, PUT, DELETE)',
      description: 'El backend de Ego Task es el núcleo del sistema, encargado de gestionar la lógica de negocio y la comunicación entre la base de datos y el frontend. Está desarrollado utilizando Node.js con Express para la creación de APIs RESTful, y utiliza Java para garantizar un código más seguro y escalable. La base de datos se maneja con PostgreSQL, para mejorar con la necesidad del proyecto.',
      projectLink: 'https://github.com/CesarTapia10/Proyecto_orgaizador-bakend-',
      tags: [Tag.SPRINGBOOT, Tag.SPRINGJWT, Tag.FASTAPI, Tag.SPRINGSECURITY, Tag.SPRINGWEB, Tag.POSTGRESQL, Tag.POSTMAN, Tag.RESTAPI, Tag.JPA, Tag.JAVA],
      pictures: ["assets/Ego-task-API1.png", "assets/Ego-task-API2.png"]
    },
   

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('BC | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }
}
