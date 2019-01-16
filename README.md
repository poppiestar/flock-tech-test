This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## Assumptions

The first major assumption I've taken is that the API will eventually resolve with a positive
result. Because of this, I simply brute force calling the endpoint until it eventually gives
a response. Obviously, this is not the ideal situation - ideally, I'd retry the endpoint 
gradually and eventually fail after a certain number of tries, keeping the data stale. This
was going to be my approach, which is why I've included a 'lastUpdated' value in the response
as I was going to cache the API values until the 'lastUpdated' value becomes more recent.

In an even more ideal world, I wouldn't be making the API calls in the container component
either. I'd prefer to manage side-effects separately to the components, using something like
redux-saga and caching the results in a redux store.

The most obvious feature to add based on this API would be to show the further details of each
drone, whether you click through to a separate page or show a popup window when you hover over
each row. Something along those lines.
