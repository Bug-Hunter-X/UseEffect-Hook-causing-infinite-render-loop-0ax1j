# React useEffect Hook Bug

This repository demonstrates a common bug in React applications related to the `useEffect` hook. The bug arises from an incorrect use of the dependency array, leading to an infinite render loop.

## Bug Description
The `MyComponent` component fetches data from an API using `useEffect`. However, the dependency array is missing, causing the effect to run on every render. This leads to an infinite loop because fetching the data triggers a re-render, which again triggers the effect, and so on.

## Solution
The solution involves correctly specifying the dependency array in `useEffect`. An empty array `[]` indicates that the effect should run only once after the initial render, while including specific dependencies makes the effect run only when those dependencies change.  In this case, there are no direct dependencies so an empty array is appropriate.

## How to Reproduce
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.
4. Observe the infinite render loop in the console.
5. Uncomment the solution in `bugSolution.js` to fix the issue.