# @sexy-ui/carousel

A custom slider carousel component

The `CarouselContainer` and `Slider` are parent and child components, each Slider component added to the CarouselContainer is added to an array and accessed via an index property.

## Installation

```sh
yarn add @sexy-ui/carousel

# or

npm i @sexy-ui/carousel
```

## Import components

```jsx
import { Slider, CarouselContainer } from "@sexy-ui/react";
```

## Usage

```jsx
<CarouselContainer>
      <Slider>Hello</Slider>
      <Slider>Hello Me</Slider>
      <Slider>Hello You</Slider>
      <Slider>Bruh...</Slider>
</CarouselContainer>

```

### Slider variants and color schemes

Sliders come in a few different variants for styling and each variant has a color scheme

```jsx
<CarouselComponent variant="manual" bg="red">
  <Slider>First</Slider>
  <Slider>Second</Slider>
  <Slider>Third </Slider>
</CarouselComponent>

```

### Activated Carousels

By default, `Carousels` are activated automatically. This means when you use the arrow keys to change sliders, when the carousel container is activated and focused.

```jsx
<CarouselComponent isManual={true} bg="red">
  <Slider>First</Slider>
  <Slider>Second</Slider>
  <Slider>Third </Slider>
</CarouselComponent>

```

### Slider sizes

You can change the size of the sliders by passing `size` prop. We support 3 sizes
`sm`, `md`, `lg`
