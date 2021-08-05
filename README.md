# Pathfinder

### Difficulty: 🟣 Easy

## Project URL

🚀 You can check the project working in the following link: https://wfercanas.github.io/Pathfinder/

## Project Description

This app provides the user the use case of looking for a route between two places defined through a search form. The app uses the Google Maps API to provide an autocomplete functionality when the user is typing for a place, get the geolocation of both places, get the route between those two points, render a Google Maps map and render in it the route found for the places that were submitted.
The routes are not confined to a specific region, it works worldwide. A place can be an address or the name of a known location.

## Installation

In order to make a local installation, you should execute:

```bash
npm install
npm run start
```

## Technologies used

React (Hooks), Styled-Components, Storybook.

## Special challenges

1. Define a context to control the state of the application. The implementation creates two contexts, one for the map and its services (like rendering routes) and another for the controls provided in the UI.
2. When using the controls provided in the UI, the app state changes in "complex" ways. For such cases was necessary to replace the useState Hook with multiple individual states, to the use of useReducer for controlling one compact state which controls different state changing scenarios.
3. Separate the logic of the components from its presentational view. You will find Container components with the logic calling its presentation-only component counterpart.
4. The use of context instead of props requires a special treatment of stories in Storybook.

## Key Concepts

1. ReactDOM.createPortal()
2. React.createContext()
3. Hooks: useContext(), useState(), useEffect(), useReducer()
4. Google Maps API: libraries and its services: autocompleteService, geocoderService, directionsService.
