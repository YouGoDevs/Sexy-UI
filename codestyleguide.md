<h1 align="center"> Code Style Guide </h1>

<table>
<tr>
<td>
<tr>
<td>
Hey! Welcome to our code style guide! This is a quick read intended to help you understand what patterns we favor for writing components. Let's take a dive in!
<tr/>
<td/>

The main idea of this guide is to ensure uniformity in everyone's build process. Meaning components, containers, wrappers, styling, stories and tests all follow the same pattern and conventions

Uniformity also ensures maintainers can very easily reference changes and new contributors can easily add to a codebase without much conflict.

We'll be covering...

- [ ] Folder Structures and namings
- [ ] Component Patterns with Typescript
- [ ] Variable and Method namings
- [ ] Parent-Child nesting
- [ ] Name Casing Choices
- [ ] Styling and Style Props
- [ ] Code comment styles
- [ ] Code review process

To view the active discussion around this guide, please visit [this link](https://github.com/YouGoDevs/Sexy-UI/discussions/19)

</td>
</tr>
</table>

<hr/>
<br/>

### **Folder Structures and Namings** 

The general structure of the project has individual components placed in the ``/packages`` folder inside the project ``src``

Each component in the `packages`` folder contains a source(src) folder which contains folders of individual sub-components

here's how it looks!

Our project favors flat folder structures, meaning every component is contained in a private folder along with everything else related to it. Let's take an accordion component for example

```
    -> Component (folder)
        +  Component.tsx
        +  Component.props.ts
        +  Component.test.tsx
        +  ComponentStyles.tsx
        +  Component.stories.ts
        +  Component.wrappers.tsx
```

In our opinion, this structure makes it easier to account for private and global components without conflicting locations - Kindly let us know if you disagree! 

Open an [Issue](https://github.com/YouGoDevs/Sexy-UI/issues) here

<br/>

### **Component Patterns with Typescript**

For every React component created, there should be component props defined using an interface. An example is ->

```jsx
    interface AccordionProps {
        children: ReactNode[];
        visibilityRef: React.RefObject<HTMLDivElement>;
        index: number;
        setActiveAccordion: (index: number) => null;
        active: boolean;
        single: boolean;
    }

    export const Accordion = ({
        children,
        visibilityRef,
        index,
        setActiveAccordion,
        active,
        single,
    }: AccordionProps) => {
    //Component Code...
    }
```
Read more about Typescript Interfaces [here](https://www.typescriptlang.org/docs/handbook/interfaces.html)

### **Typing** 

Components should also have explicit typings for props, state variables, and function return values.

Use typescript [generics](https://www.typescriptlang.org/docs/handbook/2/generics.html) when you are expecting dynamic props or inputs...or when unaware of the prop types or arguments...

For a guideline of React and Typescript props, checkout -> (link)

If you need to get familiar with Typescript more, please checkout this youtube series -> [No Bs TS](https://www.youtube.com/watch?v=LKVHFHJsiO0&list=PLNqp92_EXZBJYFrpEzdO2EapvU0GOJ09n)

### **State Management** 

When implementing state transfer between components, we favor React internals like useContext and customHooks to avoid extra peer dependencies. To get more familiar with React context, please visit on [Context API](https://reactjs.org/docs/context.html)

### **Syntax Version** 

For code uniformity, we opt to align with modern es6 standards when declaring function expressions and components. 

Read about Es6 [here](https://www.freecodecamp.org/news/write-less-do-more-with-javascript-es6-5fd4a8e50ee2/)

Meaning, we favor

```jsx
const myContextHandler = () => {};
```

Over

```jsx
function myContextHandler() {}
```

### **Interface Props**

Inline with parameters or using React.FC<ComponentProps>

```jsx
      export const Accordion = ({
        children,
        visibilityRef,
        index,
        setActiveAccordion,
        active,
        single,
    }: AccordionProps) => {

OR   export const Accordion: React.FC<AccordionProps> = ({
        children,
        visibilityRef,
        index,
        setActiveAccordion,
        active,
        single,
    }) => {

```

### **Exports**

When exporting components from a file, the default export should be the most recently declared component in a file.

We also avoid confusing patterns by creating separate files for each component needs and exclusively exporting only ``ONE`` component per file.

For every component, we also provide an ``index`` file for easier import paths when used in other components.

<br/>

### **Variable and Method Namings**

``SexyUI's`` naming convention focuses on complete clarity for variables, methods, classes etc. The goal is to ensure the variable name fully describes exactly what action or purpose it represents.

Examples of inaccurate variable names 

```jsx
    const [formValue, setFormValue] = useState('')

    const contentFunction

    const switchModes

    const tabMain -  for styled component

```

A better way to name these will be

```jsx
    const [usernameInput, setUserNameInput] = useState('');

    const setContentHandler;

    const toggleDarkMode

    const StyledTab - styled component

```

<br/>

### **Letter Casing Choices**

- Capital casing for directory and parent compoents
- use lowercase for helper/utility files and hooks

```jsx
    Accordion.tsx 

    // is preferred for components over accordion.tsx


utils...
    useStore.ts 

    // is the favord convention for utility and helper files like custom hooks
    
```
  <br/>

### **Styling, Styled Components and Style Props**

``SexyUI`` uses Styled components to implement ``styling``, ``props``, and ``theme-providers``.

We favor a flex-first approach to styling to enable easier debugging, but we also have no real limitations for creative freedom with CSS!

Read up on flex-box [here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

To learn more about styled components, take a look at the official [documentation](https://styled-components.com/)


**Attributes**

In order to avoid confusion when debugging components, we provide the names of Styled components in data-attributes. Here's an example

```jsx
<article data-sexyui="StyledArticle">...</article>
```

**Media Queries**

We favor in-line media queries for each individual components. Here's an example

```
const StyledTab = `styled.div
      display: inline-block;
      border-radius: 3px;
      padding: 0.5rem 0;
      margin: 0.5rem 1rem;
      width: 11rem;
      background: transparent;
      color: white;
      border: 2px solid white;

      @media screen and (min-width: 720px) {
         /* insert rule-set */
      } 
    `
```


<br/>

### **Code Comment Styles**

For readability and accessibility, we define a couple approaches to commenting code and providing ``component-level`` documentation. The general idea is making sure anyone can read through and understand your process, making it easier to debug or learn from it.

When building out a ``component``, use ``block`` comments to explain what that component represents and its use-case.

Here's an example of using block components to introduce a component

```jsx
...

/*
  This component acts a wrapper for for each accordion instance 
  Contains multiple instances of accordion.js and tracks the active instance via index
  
  This container houses the useRef
*/



export const AccordionContainer = ({ children, allowSingle }) => {
  const visibilityRef = useRef();

...
```

Use ``inline`` comments to highlight important implementation details as you code.

<br/>

### **Code Review Process**

Code review on pull-requests can be setup via the discord server or zoom meetings.

We have two preferred approaches to code-review

- Mentor-contributor code-review (usually anonymous)
- Peer code review (with server devs)

The goal of review sessions is to provide constructive feedback on your contributions before deciding to integrate them with the project.

Our mentors and maintainers will always do their best to provide properly informed reviews as we recognize that open-source is a continuous learning process for everyone.


Thanks for taking a read! We'll be available for any other questions in this [discussions](https://github.com/YouGoDevs/Sexy-UI/discussions/19) board. 

Feel free to highlight any mistakes you see or let us know any contributions you have.

``Welcome to SexyUI!``