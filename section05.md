# Working With Components, Props, and JSX

32. Section Overview

33. Rendering the Root Component and Strict Mode
Rendering the project in strict mode will call rendering twice in order to find bugs.

```
<React.StrictMode><App /></React.StrictMode>
```

34. Before We Start Coding: Debugging
Use ESLint

35. Components as Building Blocks

36. Creating And Reusing a Component

37. What is JSX?
	It is declarative: describe what UI should look like using JSX, based on the data
	It is an abstraction of the DOM: we never touch the DOM
	UI as reflection of current data

38. Creating More Components

39. JavaScript Logic in Components

40. Separation of Concerns
  one technology per file x one component per file

41. Styling React Applications

42. Passing and Receiving Props

43. Props, Immutability, and One-Way Data Flow
  Props is data coming from the outside, and can only be updated by the parent component
  State is internal data that can be updated by the component's logic.
  One-way dataflow

44. CHALLENGE #1: Profile Card (v1)

45. The Rules of JSX

46. Rendering Lists
.map

47. Conditional Rendering With &&
Check for quantity in a list numPizza > 0

48. Conditional Rendering With Ternaries
? :
49. Conditional Rendering With Multiple Returns

50. Extracting JSX Into a New Component

51. Destructuring Props

52. React Fragments
<> </>

<React.Fragment key='anything'> </React.Fragment >

53. Setting Classes and Text Conditionally	

v54. Section Summary

55. CHALLENGE #2: Profile Card (v2)
<https://codesandbox.io/p/sandbox/react-challenge-dev-profile-final-v2-e8zj9o?file=%2Fsrc%2Findex.js>