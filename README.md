# usefocuswithin

React Hook to detect if an element or its descendent element has focus. Similar to css [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within) pseudo-class behaviour.

Currently, only change of focus with mouse 'click' event is processed. If focus is changed with `Tab` or any other means then the `isFocusWithin` will not update.

[Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)

## Installation

#### npm

`npm install usefocuswithin`

#### yarn

`yarn add usefocuswithin`

## Usage

```js
import React from "react";
import { usefocuswithin } from "usefocuswithin";

function App() {
  const targetRef = React.useRef(null);
  const isFocusWithin = usefocuswithin(targetRef);

  return (
    <div
      ref={targetRef}
      style={{ border: `1px solid ${isFocusWithin ? "green" : "red"}` }}
    >
      <input></input>
    </div>
  );
}
```

## API

### usefocuswithin(target, options?)

#### Arguments

| Argument | Type                                                 | Required? | Description                                                          |
| -------- | ---------------------------------------------------- | --------- | -------------------------------------------------------------------- |
| target   | <code>React.RefObject<T> &#124; T &#124; null</code> | Yes       | A React ref created by `useRef()` or an HTML element                 |
| options  | [`Object`](#options)                                 | Yes       | Configuration options for the hook. See [`Options`](#options) below. |

#### Returns `boolean`

This hook returns `true` if the element in `ref` or any of its descendent element is focused, otherwise `false`.

#### Options

| Property | Type    | Description                                                |
| -------- | ------- | ---------------------------------------------------------- |
| mouse    | boolean | Detects change of focus due to mouse click event.          |
| keyboard | boolean | Detects change of focus due to `Tab` keypress on keyboard. |
