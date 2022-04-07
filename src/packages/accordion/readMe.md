# @sexy-ui/accordion

A custom tabs component

The `AccordionContainer` is a parent component to `Accordion`.


For clarity, we provided `TitleWrapper` for tab titles which we advise to limit to simple text tags
And `ContentWrapper` which is more flexible and can nest multiple layers of content depending on your implementation needs

## Installation

```sh
yarn add @sexy-ui/Accordion

# or

npm i @sexy-ui/Accordion
```

## Import components

```jsx
import {
  Accordion,
  AccordionContainer
} from "@sexy-ui/react";
```

## Usage

```jsx
<AccordionContainer allowSingle={false}>
  <Accordion>
    <h1>Hello</h1>
    <div>Yerrrr</div>
  </Accordion>
  <Accordion>
    <h1>Hello</h1>
    <div>Yerrrr</div>
  </Accordion>
  <Accordion>
    <h1>Hello</h1>
    <div>Yerrrr</div>
  </Accordion>
  <Accordion>
    <h1>Hello</h1>
    <div>Yerrrr</div>
  </Accordion>
</AccordionContainer>
```

### Accordion Style variants and color schemes

Tabs can be displayed with a few different variants for styling and each variant gets a custom color scheme!

```jsx
...
 <Accordion border="hollow" density="moist">
      One
      <div>
        <p>Click to Close! </p>
      </div>
</Accordion>
...
```

### Accordion sizes

You can change the size of the sliders by passing `size` prop. We support 3 sizes
`sm`, `md`, `lg`
