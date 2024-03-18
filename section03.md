# A First Look at React

8. Section Overview

9. Why Do Front-End Frameworks Exist?
old way: server side rendering (JQuery)
then: client side rendering (Single-page aplication SPA)

piece of data = piece of state

Problems with vanila JS:
- requires lots of dom manipulation and traversing (imperative): "spaguetti code"
- data (state) is usually stored in the DOM, shared accross entire app: hard to reason + bugs

10. React vs. Vanilla Javascript
In Vanilla Js we need to manually set values and sync data in DOM

11. What is React?
It is a extremely popular, declarative, component-based, state-driven Javascript library for building user interfaces, created by Facebook
Components are the building blocks of user interfaces in React
- React is very good at rendering components on a webpage (UI) based on their current state.
- Keeping the UI in sync with state, by re-rendering (reacting) when state changes.

12. Setting up our developing environment
NodeJs
VSCode pluggins

13. Pure React

14. A Quick Look at React's Official Documentation
Read <https://react.dev/learn/escape-hatches>

15. Setting Up a New React Project: The Options
create-react-app (slow and outdated)
vite: modern build tool

16. Setting Up a Project With Create-React-App

```
npx create-react-app <project_name>
npm start
```

