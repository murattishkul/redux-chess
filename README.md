## React PGN Chess

![React PGN Chess](/resources/black-chess-pieces.jpg?raw=true)

React PGN Chess is a web chess board that displays PGN moves made by players. The moves are validated on the server with [PGN Chess](https://github.com/programarivm/pgn-chess), which is a chess board representation written with PHP.

![React PGN Chess](/resources/demo.gif)

### 1. Server

Initialise the chess server:

    php php/chess-server.php
    New ReactPgnChess game!

### 2. Client

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### 3. To Dos

> **Side Note**: There are a few todos still to be finished. Contributions are welcome!

1. `php/PgnChessGame.php` is only responding with `true` or `false` depending on whether or not a PGN move is valid, but it has to respond with `check` and `checkmate` too.

2. The GUI should be improved a little bit more (with colors or messages) accordingly.

3. `php/PgnChessGame.php` works in single-player mode only at this moment.

4. Review the pawn promotion.

5. Review and update the tests.

### 4. License

The MIT License (MIT) Jordi Bassagañas.

### 5. Contributions

Would you help make this app better?

- Feel free to send a pull request
- Drop an email at info@programarivm.com with the subject "React PGN Chess"
- Leave me a comment on [Twitter](https://twitter.com/programarivm)

Thank you.
