# INSURA - Guía de Implementación y Auditoría

Este proyecto ha sido refactorizado para mejorar su rendimiento, SEO y funcionalidad, manteniendo la estética original sugerida.

## 1. Auditoría Técnica

### Conectores y Navegación
- **Estado**: Bueno. Se han corregido enlaces de ancla y se ha implementado un sistema de navegación dinámica.
- **Mejora**: Los enlaces de "Contacto" ahora abren un modal interactivo en lugar de solo saltar al pie de página.

### Código y Rendimiento
- **Redundancias**: Se detectó la carpeta `owl/` sin uso activo. Se recomienda eliminarla si no se planea usar carruseles.
- **Rendimiento (CRÍTICO)**: Las imágenes `engranajes.png` y `portfolio.png` superan los 10MB.
  - *Acción recomendada*: Convertirlas a formato WebP o JPG comprimido (máximo 500KB para fondos).
- **JS**: Se movió la lógica inline de scroll a `js/main.js` para mejor organización.

### SEO Técnico
- Se agregaron etiquetas `meta description` y `meta keywords`.
- Se mejoró la jerarquía de etiquetas `alt` en imágenes.
- Se configuró el atributo `lang` correctamente en ambas versiones.

---

## 2. Instrucciones de Implementación

### Formulario de Contacto
1. **Configuración de Email**: 
   - **Opción A (Recomendada)**: Registrar una cuenta en [EmailJS](https://www.emailjs.com/), crear un Service ID y un Template ID. Insertar el Public Key en el script del pie en `index.html`.
   - **Opción B (Servidor propio)**: Si tu hosting soporta PHP, el archivo `contact.php` ya está configurado para enviar correos a `info.insura@gmail.com`.
2. **Uso**: Haz clic en cualquier botón "Contacto" para abrir el modal.

### Catálogo de Productos
- Los productos ahora se cargan desde `js/products.js`. Esto facilita la edición manual sin tocar el HTML.
- Puedes cambiar nombres, descripciones y enlaces de compra en un solo lugar.

### Sistema de Carga (Admin Panel)
- Abre el archivo `admin.html` en tu navegador.
- Podrás agregar, editar o eliminar productos visualmente.
- El panel genera un bloque de código. Solo debes copiarlo y pegarlo en `js/products.js` para actualizar el sitio.

---

## 3. Estructura de Archivos
- `index.html` / `indexen.html`: Páginas principales.
- `styles.css`: Estilos (mejorados con clases de utilidad).
- `js/main.js`: Lógica de comportamiento y renderizado.
- `js/products.js`: Base de datos de productos.
- `admin.html`: Panel de administración visual (opcional).
- `contact.php`: Backend para correos (opcional).