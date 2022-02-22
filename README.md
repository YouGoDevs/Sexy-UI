<p align="center">
  <a href="https://github.com/Geller99/Sexy-Ui">
   
  </a>
</p>

<h1 align="center">Build Fast, Scale High -  Just Plug and Play UI Components </h1>

<br>

<p align="center">
  <img alt="Language grade: JavaScript" src="https://img.shields.io/lgtm/grade/javascript/g/chakra-ui/chakra-ui.svg?logo=lgtm&logoWidth=18"/>
</p>
<br />

Sexy-UI simplifies the first step in your production process by providing super-accessible plug and play UI components.

## Looking for the documentation? 📝

Each package has a super detailed description of how it's meant to be used - including a useCase file you can import into the main App.tsx as a sample implementation!

Latest version (v0)

## Features 🚀

- Multiple Styling Options
- Super Fast Load times
- Industry Standard Accessibility
- Dark Mode Enabled
- Responsive!
- Premium Documentation

## Support Sexy-UI 💖

We are sincerely appreciative of anyone looking to provide code review or write issues or even provide mentoring as we build out this project!

### Individuals

Geller Micael

### Organizations

YouGo Fullstack Mentoring Group
Inked-in Technical Writing Community

## Installing Sexy UI

To get started using Sexy-UI Components, install the
`@sexy-ui/react` package and its peer dependencies:

```sh
$ yarn add @sexy-ui/react styled-components framer-motion@^5

# or

$ npm i @sexy-ui/react styled-components framer-motion@^5
```

## Usage

To start using the components, please follow these steps:

1. Wrap your application with the `SexyProvider` provided by
   **@sexy-ui/react**.

```jsx
import { SexyProvider } from '@sexy-ui/react'

// Do this at the root of your application
const App = ({ children }) => {
  return <SexyProvider>{children}</SexyProvider>
}
```

Optionally, you can wrap your application with the `ToggleColorsProvider` so you
can toggle between light and dark mode within your app.

2. Here's how to use components:

```jsx
import { Button } from '@sexy-ui/react'

const useCase = () => {
  return <Button>This Button just got sexier! </Button>
}
```

## CodeSandbox Templates

We are currently building out accessible templates for rapid usage with CodeSandbox and CodePen.

## Contributing

Looking to contribute? Marvelous!

Take a peek at our [contributions guide](https://github.com/YouGoDevs/Sexy-UI/blob/QA/contributionsguide.md) to get started or join the mentoring server to get all your questions answered!

## Contributors

Big Thanks to our amazing Gang of Thieves!

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/Geller99"><img src="/" width="64px;" alt=""/><br /><sub><b>Geller99</b></sub></a><br /><a href="https://github.com/chakra-ui/chakra-ui/commits?author=segunadebayo" title="Code">💻</a> <a href="#maintenance-gellermicael" title="Maintenance">🚧</a> <a href="https://github.com/sexy-uicommits?author=gellermicael" title="Documentation">📖</a> <a href="#example-gellermicael" title="Examples">💡</a> <a href="#design-gellermicael" title="Design">🎨</a></td>
    
  </tr>
  
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the
[all-contributors](https://github.com/all-contributors/all-contributors)
specifications.

## License

MIT © [Geller Micael](https://github.com/Geller99)
