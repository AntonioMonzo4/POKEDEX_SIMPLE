# POKEDEX_SIMPLE
El proyecto es una aplicación web de búsqueda de Pokémon que permite a los usuarios buscar información sobre diferentes Pokémon utilizando su nombre o ID. Aquí tienes una descripción detallada del proyecto:

### Descripción del Proyecto: Pokémon Search App

#### Objetivo
El objetivo de la aplicación es proporcionar a los usuarios una interfaz sencilla para buscar información sobre Pokémon, mostrando detalles como su nombre, ID, peso, altura, estadísticas (HP, ataque, defensa, etc.) y tipos. La aplicación utiliza la API de Pokémon (PokeAPI) para obtener los datos necesarios.

#### Funcionalidades Principales

1. **Interfaz de Usuario**:
   - **Campo de entrada**: Un campo de texto donde los usuarios pueden ingresar el nombre o ID de un Pokémon. Este campo tiene el atributo `required`, lo que significa que no se puede dejar vacío al realizar la búsqueda.
   - **Botón de búsqueda**: Un botón que, al ser clicado, inicia la búsqueda del Pokémon ingresado.
   - **Visualización de información**: La aplicación muestra información detallada sobre el Pokémon buscado, incluyendo:
     - Nombre del Pokémon.
     - ID del Pokémon.
     - Peso y altura.
     - Estadísticas (HP, ataque, defensa, ataque especial, defensa especial, velocidad).
     - Tipos de Pokémon.
     - Imagen del sprite del Pokémon.

2. **Manejo de Búsquedas**:
   - Al hacer clic en el botón de búsqueda, se realiza una solicitud a la PokeAPI para obtener los datos del Pokémon especificado.
   - Si el Pokémon no se encuentra, se muestra un mensaje de alerta "Pokémon not found".
   - Si se encuentra el Pokémon, la aplicación actualiza la interfaz con la información correspondiente.

3. **Validación de Entrada**:
   - El campo de entrada es obligatorio, lo que garantiza que los usuarios no puedan realizar búsquedas sin ingresar un valor.
   - Se manejan los errores de búsqueda mostrando alertas apropiadas.

#### Estructura de Archivos

- **index.html**: Contiene la estructura HTML de la aplicación, incluyendo los elementos necesarios para la búsqueda y la visualización de información.
- **styles.css**: Contiene estilos CSS para mejorar la apariencia de la aplicación, incluyendo colores, tipografía, espaciado y disposición de elementos.
- **script.js**: Contiene la lógica de JavaScript para manejar la búsqueda de Pokémon, realizar solicitudes a la API, y actualizar el DOM con la información obtenida.

#### Tecnologías Utilizadas
- **HTML**: Para la estructura básica de la aplicación.
- **CSS**: Para el diseño y la presentación visual.
- **JavaScript**: Para la lógica de la aplicación y la interacción con la API.
- **PokeAPI**: Para obtener datos sobre Pokémon.

### Conclusión
La aplicación de búsqueda de Pokémon es un proyecto interactivo que combina diseño web, manipulación del DOM y consumo de APIs. Permite a los usuarios explorar información sobre sus Pokémon favoritos de manera fácil y rápida, además de mejorar sus habilidades de programación y desarrollo web.
