# Infinite Scroll

An infinite list with Github search API.

Demo site: https://ashleyyang0610.github.io/Infinite-scroll/

### Get Start

#### Libs dependencies

-   Node: v12.13.1
-   Yarn: v1.19.2

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
#### 1. Use "windowing" handle large datasets display
The windowing means we only demonstrate the elements which can see by the user then once user scrolling we dynamic change it with the next correspond elements.

![](https://github.com/ashleyyang0610/Infinite-scroll/blob/master/assets/react-window.gif)

[How does windowing work?](https://bvaughn.github.io/forward-js-2017/#/12/1) by Brian Vaughn

pros: Reduce DOM elements. Only create elements the user can see.

cons: Unable to search the item which isn't rendered. 

#### 2. Make the scroll "really" infinite (The flow of infinite scroll is self-designed)
<img src="https://github.com/ashleyyang0610/Infinite-scroll/blob/master/assets/infinite_scroll_flow_v2.png" width="500">

The threshold of the scroll offset equals to `per_page`.

#### 3. Handle momentum-based scrolling
The `per_page` which used in API is calculated by browser view height. 
```
useEffect(() => {
    const wrapperHeight = document.querySelector('.infinite-list').offsetHeight;

    dispatch({
        type: UPDATE_PAGE_SIZE,
        payload: Math.ceil(wrapperHeight / ITEM_SIZE) * 15
    });
}, [dispatch]);
```

`Math.ceil(wrapperHeight / ITEM_SIZE)`: The amount of visible items.

API `page_size`is visible amount times 15.

### Other highlights

-   First use [react hooks](https://zh-hant.reactjs.org/docs/hooks-intro.html), [react-redux hooks](https://react-redux.js.org/next/api/hooks) in this project.
-   First use [pipeable operators](https://github.com/ReactiveX/rxjs/blob/master/docs_app/content/guide/v6/pipeable-operators.md) in redux-observable (rxJS@^5.5)


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

-   Normalize responsed data first before update to the store.
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

### References

-   https://developer.github.com/v3/search/#search-repositories
-   https://developer.github.com/v3/search/#rate-limit
-   https://developer.github.com/v3/#pagination
-   https://bvaughn.github.io/forward-js-2017/#/12/1
