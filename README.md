# Infinite Scroll

An infinite list with Github search API.

### Get Start

#### Clone Git repository

```
git clone https://github.com/ashleyyang0610/Infinite-scroll.git
```

#### Development mode

Install dependencies and run the app in the development mode:

```
yarn install
yarn start
```

or

```
npm install
npm start
```

#### Production mode

To build the app for production. The bundled files will be generated to the `build` folder:

```
yarn build
```

### Supported Browsers

The functions of the app has been tested exactly in below browsers:

-   [x] Chrome
-   [x] Safari
-   [x] Firefox
-   [x] iOS Safari
-   [x] Mobile Chrome

### The Designs

### 3rd Party Libs

-   [React v16.12.0](https://reactjs.org/)
-   [Redux v4.0.4](https://redux.js.org/)
-   [react-redux](https://react-redux.js.org/)
-   [redux-observable](https://redux-observable.js.org/)
-   [react-window](https://github.com/bvaughn/react-window)
-   [react-virtualized-auto-sizer](https://github.com/bvaughn/react-virtualized-auto-sizer)
-   [styled-components](https://www.styled-components.com/)
-   [react-debounce-input](https://www.npmjs.com/package/react-debounce-input)
-   [Font Awesome](https://fontawesome.com/)

### What's Next?

-   Better handling of Github API maximum length 1000
-   Error handling (notifications or toasts info)
-   Better user experience/layout for mobile
-   Better handling when user scroll too fast but the API hasn't responsed
-   Handling list container resizing.
    -   Re-calculate page size when container height changed.
    -   Update list container height when window resize on mobile Chrome.
-   Unit test, storybook, etc.

### Known Issues

-   The Github search API is only able to fetch first 1000 data
-   The API calls still reaches rate limit in "very" abnormal scrolling situation
-   The total amount of serach result shows "0" before API response
