# **Code Style Guide**

Once you're done preparing your repo for changes, we'd love to quickly show you around the general guidelines and patterns in our codebase.

The main idea of this guide is to ensure uniformity in everyone's build process. Meaning components, containers, wrappers, styling, stories and tests all follow the same pattern and conventions.

Uniformity also ensures maintainers can very easily reference changes and new contributors can easily add to a codebase without much conflict.

We'll be covering

- Folder Structures and namings
- Component Patterns with Typescript
- Variable and Method namings
- Parent-Child nesting
- Name Casing Choices
- Styling and Style Props
- Code comment styles
- Code review process

To view the active discussion around this guide, please visit (link)

<hr/>
<br/>

### **Folder Structures and namings** (img)


Our project favors flat folder structures, meaning every component is contained in a private folder along with everything else related to it. Let's take an accordion component for example

```
    -> component (folder)
        +  component.tsx
        +  component.props.ts
        +  component.test.tsx
        +  componentStyles.tsx
        +  component.stories.ts
        +  component.wrappers.tsx
```

In our opinion, this structure makes it easier to account for private and global components without conflicting locations - Kindly let us know if you disagree! (support ticket)

<br/>

#### **Component Patterns with Typescript**


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
 
Read more about Typescript Interfaces here -> (link)
```

### **Typing** -> 

Components should also have explicit typings for props, state variables, and function return values. 
Use typescript generics when you are expecting dynamic props or inputs...or when unaware of the prop types or arguments...
For a guideline of React and Typescript props, checkout -> (link)

If you need to get familiar with Typescript more, please checkout this youtube series -> (link)

State Management -> When implementing state transfer between components, we favor React internals like useContext and customHooks to avoid extra peer dependencies. To get more familiar with React context, please visit -> (link)


### **Syntax Version** -> 

For code uniformity, we opt to align with modern es6 standards when declaring function expressions and components

Meaning, we favor
```jsx
const myContextHandler = () => {}
```

Over 
```jsx
function myContextHandler () {

}

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



### **Exports** ->

Default export should be the most recently declared component in a file.
We choose to avoid circular dependencies by creating separate files for each component needs -> 
So instead of exporting component and component styles to stories fromt t
Export one thing per file
index file for global exporting





<br/>


#### **Variable and Method Namings**

SexyUI's naming convention focuses on complete clarity for variables, methods, classes etc. The goal is to ensure the variable name fully describes exactly what action or purpose it represents.

Examples of inaccurate names ->

```jsx
    const [formValue, setFormValue] = useState('')

    const contentFunction

    const switchModes

    const tabMain -  for styled component

```


A better way to name these will be ->

```jsx
    const [usernameInput, setUserNameInput] = useState('');

    const setContentHandler;

    const toggleDarkMode

    const StyledTab - styled component

```

<br/>

#### **Letter Casing Choices**

- Capital casing for directory and parent compoents
- use lowercase for helper/utility files and hooks
<br/>

### **Styling and Style Props**

- Inline Media Queries
- Flex First Approach
- Using custom attributes for wrapper components
- Use Provided theme wrappers and pre-defined screen sizes

<br/>

### **Code comment styles**

Use name of Styled component as attribute...

Use Block Comment to introduce components and explain what they represent
Use inline comments to highlight changes as you go

<br/>


### **Code review process**

Code review is conducted in multiple ways, we have isolated reviews and peer-reviews