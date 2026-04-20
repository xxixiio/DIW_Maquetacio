# DIW Maquetació – Restaurant Els Coberts

Pràctica desenvolupada per a l’assignatura de **Disseny d’Interfícies Web (DIW)**.
L’objectiu és aplicar tècniques de maquetació moderna amb HTML i CSS, fent especial èmfasi en la presentació visual i la interacció amb l’usuari.

## Transicions
Totes les transicions tenen una variable per l'estandarització en tota la pàgina.
```css
:root {
  --transition: 0.08s ease-out;
}
```

- Classe `.imatge`. 
    - Per les imatges dins de la galeria de fotos

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

- 2

## Animacions

- 1

- 2
