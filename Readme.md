# Bobady game

This is a simple trick or treat game for parties. It is developed in TypeScript and uses Vite.

## Functionality

- Add 3 players or more and start the game
- A random player is chosen to pick between a question or a challenge
- The player who chooses question gets a question to be answered in 10 seconds with Yes or No answer
- The player who chooses challenge gets a challenge and other players have to decide if it's achieved or not.
- After 10 rounds the player with the most points wins. If there is a tie, the game continues until there is a winner.

## Avatars
The avatars in version 0.9 are taken from [Gartic Phone](https://garticphone.com/) where I took the inspiration for the design. 

## Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm run dev` to start the development server

## Build
Run `npm run build` to build the project. The build will be in the `dist` folder.

## React Context API
The player management is implemented using React Context API. 

### Context files overview
- `src/context/UsersContext.tsx` - It simply defines the UserContext to provide an consume the global state.
- `src/context/UsersProvider.tsx` - Wrapper component to provide the UserContext to the whole application.
- `src/context/usersReducer.ts` - The reducer function is a pure function that takes the previous state and an action, and returns the next state. This is where the logic for the state management is implemented. There is a few actions that can be dispatched to the reducer to update the global state.

## Questions and Challenges
Questions and challenges are stored in json files in the `src/data` folder. 

## Stack

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [Styled Components](https://styled-components.com/)
- [React-Confetti](https://www.npmjs.com/package/react-confetti)


## Backlog

- Add more languages
- Add avatars
- Store challenges and questions in a database
- Categories for questions and challenges
- Add penalties

Thanks for taking a look at the project. If you have any suggestions or want to contribute, feel free to open an issue or a pull request.