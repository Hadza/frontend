<img width="120" alt="Desktop" src="https://user-images.githubusercontent.com/13852315/109897383-3c907b00-7c58-11eb-94c4-de56bfaebecd.png">

## Front end (TEESH Project)

### Overview

This test consists on implementing a simple view following a design handoff with basic requirements. This is a basic example of the daily job a Front end Developer does here at . Depending on the project, we can use different libraries, frameworks and approaches, but essentially it always comes down to the use of HTML, CSS and Javascript on a Ruby on Rails environment to implement a design and/or client needs, using clean and maintainable code.

### Requirements

- The final website should look exactly like the one [in the design handoff](https://www.figma.com/file/l0p8DQtkhKoJJdoMXjoGrh/TELOSLABS---FRONTEND-TEST-ON-RAILS?node-id=470%3A275) for the specified screen sizes. It should be pixel perfect for those resolutions.
- The final delivery should be in a fork repository in Github. This should be shared trough a link via email, alongside a short summary about any opinions and thoughts you had while working on this project.
- Nothing should look broken at any specific point. There is lack of specification for screens between mobile and desktop. This is on purpose. Use your best judgement to make it look correct.
- The content of the hero, the sections and the CTA should be vertically aligned from the sides. The image on the CTA and the background colors are the exception.
- The content of the hero, the sections and the CTA shouldn’t get wider than `1312px`. The image on the CTA, and the background colors are the exception.

### Frequently Asked Questions

- **Can I use Bootsrap, jQuery or a similar frontend framework/library?** No, for the purposes of this test it is better if everyone uses just the essentials.
- **Can I use Bootstrap, Tailwind, Bulma or a similar CSS framework/library?** No. All styles should be custom made, but CSS pre-processors are permitted.
- **Which copy should I use inside each point in the why us section?** You can use any text you want, such as “lorem ipsum”.
- **Do I need to use the Roboto font?** Yes, you can import it via Google Fonts.
- **Is there any flexibility on the font-sizes and line heights?** No, these should follow what's defined in the design handoff.

### Como correrlo
- Ejecuta el comando gem install bundler si no lo tienes instalado
- Ejecuta el comando bundle install
- Ejecuta el comando rails s para iniciar el servidor

### Comentarios

Al analizar la tarea entiendo que el desarrollo se haría mayormente en css y javascript puro, esto ya lo había trabajado de esta manera al hacer algunos templates de wordpress pero como tengo tiempo trabajando con frameworks o librerías tuve que volver a tomarle el hilo.

Lo que fue nuevo para mi fue que se desarrollaba en una base de ruby on rails, al inicio del desarrollo me tomo un tiempo encontrar de qué manera se conectaba todo en ruby y entender el concepto de las gems y como funciona en sí ruby on rails, una vez que entendí lo básico ya pude avanzar más.

El próximo reto fue tratar de dejar el diseño pixel perfect para las resoluciones especificadas, en esta parte se me complicó un poco más, principalmente en los textos, por alguna razón aunque utilizara el mismo font size se miraba más chico o más grande.

En general me parecio una prueba entretenida, en especial la parte del modal donde ya tuve que traer informacion y trabajar el DOM con ella.

## Desktop
<img width="1440" alt="Desktop" src="https://github.com/Hadza/frontend/blob/180ccbac47d744b3544a18e5482bf7ed56818d6b/desktop%20view.png">

## Mobile
<img width="375" alt="Mobile" src="https://github.com/Hadza/frontend/blob/180ccbac47d744b3544a18e5482bf7ed56818d6b/mobile%20view.png">



