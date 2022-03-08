# @sexy-ui/tabs

A custom tabs component

The `Tabs` is a parent component to `TabList` which in turn houses individual `Tab` instances.

In `Tab` The first item of content is displayed as Tabs Title, and the second item must be a wrapper for multiple possible items --- it is supplied to the `TabPanels` and rendered inside `TabContent`

For clarity, we provided `TitleWrapper` for tab titles which we advise to limit to simple text tags
And `ContentWrapper` which is more flexible and can nest multiple layers of content depending on your implementation needs

## Installation

```sh
yarn add @sexy-ui/tabs

# or

npm i @sexy-ui/tabs
```

## Import components

```jsx
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabContent,
  TitleWrapper,
  ContentWrapper,
} from "@sexy-ui/react";
```

## Usage

```jsx
  <TabList>
        <Tab>
          <TitleWrapper>One </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 1</p>
          </ContentWrapper>
        </Tab>
        <Tab>
          <TitleWrapper>Two </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 2</p>
          </ContentWrapper>
        </Tab>
        <Tab>
          <TitleWrapper>Three </TitleWrapper>
          <ContentWrapper>
            <p>Welcome to Tab 3</p>
          </ContentWrapper>
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
