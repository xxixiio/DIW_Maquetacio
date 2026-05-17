# DIW Maquetació – Restaurant Els Coberts

Pràctica desenvolupada per a l’assignatura de **Disseny d’Interfícies Web (DIW)**.
L’objectiu és aplicar tècniques de maquetació moderna amb HTML i CSS, fent especial èmfasi en la presentació visual i la interacció amb l’usuari.

## Branques

* **main**
  Versió final del projecte.
* **css_responsive**
  Pràctica 10: implementació d’estils responsive per adaptar el disseny a diferents dispositius.
* **multimedia**
  Pràctica 11: incorporació de transicions, animacions i contingut multimèdia (vídeo).

## Transicions

Totes les transicions tenen una variable per l'estandarització en tota la pàgina.
```css
:root {
  --transition: 0.08s ease-out;
}
```

- Classe `.image`. Per les imatges dins de la galeria de fotos

```css
.imatge:hover {
  transition: all var(--transition);
}

.imatge:hover {
  box-shadow: 0 2px 4px 3px rgba(0, 0, 0, 0.4);
  transform: scale(1.08) rotate(6deg);
  filter: grayscale(0.5);
}
```

- Classe `.menu__element` i `.menu__image`.

```css
.menu__element {
  filter: brightness(.7);
  transition: all var(--transition);
}

.menu__element:hover {
  transform: translateY(-1rem) rotate(1deg);
  filter: brightness(1);
}

.menu__element:hover > .menu__image-text {
  opacity: 1;
}

.menu__image-text {
  opacity: 0;
  transition: opacity var(--transition);
}```

## Animacions

- Classe `.hero__text`.

```css
.hero__text {
  opacity: 0.9;
  animation-name: hero-animation;
  animation-duration: .6s;
}

@keyframes hero-animation {
  from {
    opacity: 0%;
    transform: translateY(2rem);
    color: orange;
  } 
  to {
    transform: translateY(0);
    color: #fff;
  }
}
```

- Classe `.btn__reserva`.

```css
.btn__reserva:hover {
  animation-name: reservar-animacio;
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-direction: alternate-reverse;
}

@keyframes reservar-animacio {
  0% {
    background-color: var(--primary);
    transform: scale(1) translate(0, 0) rotate(0);
  }
  
  25% {
    background-color: rgb(97, 12, 22);
    transform: scale(1.2) translate(10px, -10px) rotate(10deg);
  }
  
  50% {
    background-color: rgb(1, 52, 94);
  }
  
  100% {
    background-color: #6d8d16;
    transform: scale(1.2) translate(-10px, 10px) rotate(-10deg);
  }
}```
