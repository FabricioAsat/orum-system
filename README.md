# Orum System Website

Sitio web institucional de **Orum System**, desarrollado con tecnologías modernas para ofrecer una experiencia rápida, responsiva y atractiva.

## 🛠 Tecnologías Utilizadas

- **React** + **TypeScript** — UI declarativa y tipado seguro.
- **TailwindCSS** — Estilado moderno y altamente personalizable mediante clases utilitarias.
- **React Router DOM** — Navegación client-side sin recargas.
- **Vite** — Bundler ultrarrápido para desarrollo.
- **Bun** — Empaquetador ligero y eficiente usado junto a Vite.

## 📦 Instalación

Asegurate de tener [Bun](https://bun.sh/) instalado globalmente:

```bash
bun --version
```

Luego cloná el repositorio y ejecutá:

```bash
bun install
bun dev
```

Esto iniciará el servidor de desarrollo en `http://localhost:5173`.

## 🚀 Scripts Disponibles

- `bun dev` — Inicia el servidor de desarrollo.
- `bun run build` — Genera una versión optimizada para producción.
- `bun run preview` — Previsualiza el sitio ya compilado.

## 🌐 Estructura del Proyecto

```
├── src/
│   ├── components/     # Componentes reutilizables (botones, inputs, layouts, etc.)
│   ├── pages/          # Vistas de navegación (Home, About, Contact, etc.)
│   ├── layout/         # Mantener el mísmo conteiner en todas las rutas
│   ├── routes/         # Definiciones de rutas con React Router
│   ├── assets/         # Imágenes y SVGs optimizados
│   ├── utils/          # Funciones de ayuda
│   └── App.tsx         # Componente raíz
├── index.html
└── bun.lockb
```

## 🎨 Personalización

El diseño utiliza un sistema de colores basado en el tema de Orum:

- `bg-background`, `text-text-main`, `text-placeholder`, `bg-primary`, etc.
- Definidos en `index.css` como variables CSS para mantener consistencia visual.

## 🧩 Funcionalidades Destacadas

- Animaciones fluidas con `framer-motion`.
- Formulario de contacto con modal informativo.
- Secciones con imágenes SVG personalizadas.
- Responsive Design adaptado para dispositivos móviles y escritorio.

## 📬 Contacto

Desarrollado por [Fabricio Asat](mailto:fabricioasat00@gmail.com)  
Sitio oficial: [Orum System](https://www.orum-system.com)

---

> Este proyecto está en constante desarrollo. ¡Contribuciones y sugerencias son bienvenidas!
