# @sexy-ui/tabs

A custom tabs component

The `Tabs` is a parent component to `TabList` which in turn houses individual `Tab` instances.

In `Tab` The first item of content is displayed as Tabs Title, and the second item must be a wrapper for multiple possible items --- it is supplied to the `TabPanels` and rendered inside `TabContent`

## Installation

```sh
yarn add @sexy-ui/tabs

# or

npm i @sexy-ui/tabs
```

## Import components

```jsx
import { Tabs, TabList, Tab, TabPanels, TabContent } from "@sexy-ui/react";
```

## Usage

```jsx
<Tabs>
  <TabList>
    <Tab>
      One
      <div>
        <p>Welcome to Tab 1</p>
      </div>
    </Tab>
    <Tab>
      <div>Two</div>
      <div>
        <p>Welcome to Tab 2</p>
        <p>How's college treating you these days?</p>
      </div>
    </Tab>
    <Tab>
      Three
      <div>
        <p>Welcome to Tab 3</p>
      </div>
    </Tab>
  </TabList>

  <TabPanels>
    <TabContent />
  </TabPanels>
</Tabs>
```

### Tab Style variants and color schemes

Tabs can be displayed with a few different variants for styling and each variant gets a custom color scheme!

```jsx
...
 <Tab border="hollow" density="moist">
      One
      <div>
        <p>Welcome to Tab 1</p>
      </div>
</Tab>
...
```



### Tab sizes

You can change the size of the sliders by passing `size` prop. We support 3 sizes
`sm`, `md`, `lg`
