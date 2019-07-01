# Advanced React Lecture

## React Hooks

A Hook is a function that allows us to **hook** into a variety of features from within functional components.

If we want to be able to use features like state and lifecycle methods from within a functional component, we can use a couple of Hooks that React has built in called ***useState*** and ***useEffect***.

We can destructure these hooks off of React by writing the following
```js 

import React, {useEffect, useState} from "react";

```

## useState 

- useState allows us to have state in our functional component. 

```js
    function counter(){
        // count is the state value that will be initialized with a starting value of 0
        // setCount is the method we will use to update the count variable
        let [count, setCount] = useState(0) 
        return(
            <div>
                Current count: {count}
                <button 
                onClick = {() => setCount(count += 1)}>Increment
                </button>
            </div>
        )
    }
```

## useEffect

- useEffect allows us to perform side effects in our component. It will run any time a component updates, mounts, or unmounts to the DOM. 
    - Thus, you can think of useEffect as ***componentDidUpdate***, ***componentDidMount***, and ***componentWillUnmount*** all in one.

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Enhancing performance with useEffect

useEffect runs every time the component changes in any way. This could mean using a lot of computing power over and over again when we don't always need it to. 

In order to get past this, we are able to pass a second argument to useEffect that React will use to determine whether or not it should re-render.

```js
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

In the above example, useEffect will only run when count changes. If count is 5 on the first render and then changes to 6, our effect will take place. If count stays the same, we wont run our effect.

## Building your own hooks

An important part of programming is creating reusable code that will help us build our projects more efficiently. If you have a certain process that you find yourself reusing a lot, it would be a good idea to turn that process into a hook that you can use in other React components.

### useAxios hook

```js

    import { useState, useEffect } from 'react';
import axios from 'axios';
// default params to handle use cases
const useAxios = (url, method = 'get', body = null, initialData = []) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios(url, {
            method,
            body
        }).then(response => {
            setData(response.data);
        })
        // if the url or method changes, recall the effect
    }, [url, method, body])

    return data
}
```

### Pro tip on making your own hooks
- Hook names should always start with **use**
  - React uses this convention to distinguish your function as a hook.


# Memoization

Memoization is a technique used to optimize expensive functions by storing it's previously computed results. This saves us time and computing power when we call a function with the same paramaters multiple times.

[Memo example](https://repl.it/@hirschzd01/memo-example)


We can incorporate this technique in our React components by utilizing tools that React gives us called **memo** and **PureComponent**. 

### PureComponent


```js

import React, {PureComponent} from "react"

  // The Hello class will only re-render if it's props are changed.
export default class Hello extends PureComponent{
  render(){
    return(
      <p>{this.props.name}</p>
    )
  }
}

```

### React.memo

```js

```


