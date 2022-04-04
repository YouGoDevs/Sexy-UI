# @sexy-ui/carousel

A custom carousel component

The `Carousel` and `Slider` are parent and child components, each Slider component added to the Carousel is added to an array and accessed via an index property.

## Installation

```sh
yarn add @sexy-ui/carousel

# or

npm i @sexy-ui/carousel
```

## Import components

```jsx
import { Slider, Carousel } from "@sexy-ui/react";
```

## Usage

```jsx
<Carousel>
      <Slider>Hello</Slider>
      <Slider>Hello Me</Slider>
      <Slider>Hello You</Slider>
      <Slider>Bruh...</Slider>
</Carousel>

```

### Slider variants and color schemes

Sliders come in a few different variants for styling and each variant has a color scheme

```jsx
<Carousel variant="manual" bg="red">
  <Slider>First</Slider>
  <Slider>Second</Slider>
  <Slider>Third </Slider>
</Carousel>

```

### Activated Carousels

By default, `Carousels` are activated automatically. This means when you use the arrow keys to change sliders, when the carousel container is activated and focused.

```jsx
<Carousel isManual={true} bg="red">
  <Slider>First</Slider>
  <Slider>Second</Slider>
  <Slider>Third </Slider>
</Carousel>

```

### Slider sizes

You can change the size of the sliders by passing `size` prop. We support 3 sizes
`sm`, `md`, `lg`
