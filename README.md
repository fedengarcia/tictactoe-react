# TIC TAC TOE - REACT JS

## Tecnologias utilizadas:
    
    React JS
    Material
    Firebase
    Sass

## Scripts

En el directiorio del proyecto, se puede ejectuar el siguiente comando:

### `npm start`

Para ejecutar la app en modo de desarrollo.
Abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.


## TIC TAC TOE
La applicacion contiene 5 paginas que se detallan a continuacion:

### Pagina de inicio - Componente: (GameModeContainer) - Path:"/"
    Contiene:
        - Boton Multiplayer
        - Boton Computer
        - Boton Ver Reglas
        - Boton Ranking

###  Pagina para cargar datos de jugadores - Componente: (PlayerInfoContainer) - Path("/PlayerInfo/gameType")
    Contiene:
        - Form para jugadores
        - Boton ejecutador del juego
        - Boton para volver atras 
        - Manejo de errores de nombres de jugadores


### Pagina de jugabilidad - Componente: (TicTacToe) - Path("/Game/gameType")
    Contiene:
        - Header
        - Logica del juego
        - Componente para mostrar resultado del juego
        - Componente para manejar Turnos
        - Componente para mostrar nombres de los juegadores
        - Componente del tablero de juego

### Pagina de relgas del juego - Componente: (GameRulesContainer) - Path("/Rules")
    Contiene:
        - Reglas del juego
        - Titulo

### Pagina del ranking del juego - Componente: (GameRankingContainer) - Path("/Rules")
    Contiene:
        - Titulo
        - Navbar
        - Ranking de Perdedores
        - Ranking de Ganadores
        - Ranking de Puntos
        - Ranking de Empates

    Nota: El ranking fue armado solo para el modo de juego multiplayer.    

### helpers.js
   Vrificar si hay un ganador y retornar un objeto con el resultado del juego.

### gameContext.js
    Guardar jugadores, tipo de juego y modelar los datos obtenidos de la base de datos.

### Firebase
    Guardar documentos de jugadores que ganaron, perdieron y empataron.


