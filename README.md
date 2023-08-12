# Chiraag's Component Library 🎁

This is a collection of reusable React components designed to be easily distributed and consumed by different applications. The library is built using Rollup as the bundler and Babel for transpilation. Additionally, Storybook is used to visualize and showcase the components.

### [Deployment Link 🔗](https://ui-library.chiraag.dev)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Local Development](#local-development)
- [Storybook](#storybook)
- [Frontend Libraries](#frontend-libraries)
- [Prerequisites](#prerequesites)
- [Contributing](#contributing)
- [License](#license)

<a name="installation"></a>

## Installation 💿

To install the component library, you can use npm or yarn:

```bash
npm install @chiraag918/chiraags-component-library
```

<a name="usage"></a>

## Usage 🖥️

👉🏼 Add `.npmrc` file on the application's root folder with the following contents

```bash
  registry=https://registry.npmjs.org/
  @chiraag918:registry=https://npm.pkg.github.com
  //npm.pkg.github.com/:_authToken=<Authentication Token>
```

Note: Reach out to the author for the `Authentication Token` at [Author's email](chiraag@chiraag.dev)

👉🏼 Once the library is installed and `.npmrc` is added, you can import and use the components in your React application as follows:

```javascript
import {
	CardWrapper,
	Button,
	Modal,
} from "@chiraag918/chiraags-component-library";

const App = () => {
	// State to maintain open/close of Modal
	const [modalOpen, setModalOpen] = useState(false);

	// Function to open Modal
	const handleOpen = () => setModalOpen(true);

	// Function to close Modal
	const handleClose = () => setModalOpen(false);

	return (
		<>
			<Button title="Open Modal" onClick={handleOpen} />
			<CardWrapper
				width="200px"
				height="100px"
				borderRadius="16px"
				backgroundColor="#d6c9ff"
			>
				This is a Sample Card
			</CardWrapper>
			<Modal
				open={modalOpen}
				onClose={handleClose}
				header="Modal Title"
				width="50%"
				height="fit-content"
				position="center"
				closeOnBackgroundClick={true}
				disableScrollLock={true}
			>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Modal>
		</>
	);
};

export default App;
```

<a name="local-development"></a>

## Local Development 🧑🏻‍💻

To set up the local development environment and contribute to the library, follow these steps:

👉🏼 Clone the repository from GitHub:

```bash
git clone https://github.com/chiraag918/chiraags-component-library.git
```

👉🏼 Navigate to the project directory:

```bash
cd chiraags-component-library
```

👉🏼 Install the required dependencies:

```bash
npm install
```

👉🏼 Build the library using Rollup:

```bash
npm run build
```

👉🏼 Link the library to your local npm:

```bash
npm link
```

<a name="storybook"></a>

## Storybook 🖼️

The component library includes a Storybook to visualize and interact with the components. To start Storybook, run the following command:

```bash
npm run storybook
```

This will open the Storybook interface in your browser, allowing you to view and test each component in isolation.

<a name="frontend-libraries"></a>

## Frontend Libraries

[React JS(UI)](https://reactjs.org/docs/getting-started.html),
[Rollup.js](https://rollupjs.org/guide/en/),
[Babel](https://babeljs.io/docs/en/),
[sass](https://sass-lang.com/documentation/),
[npm](https://www.npmjs.com/),

<a name="prerequisites"></a>

## Prerequisites

For local developments, the application requires NodeJS (version 18.9.0). To make sure this is available on the local machine, try running the following command:

```bash
$ node --version
v18.9.0
```

<a name="contributing"></a>

## Contributing 🙏🏼

Contributions to improve the component library are welcome. To contribute, follow these steps:

- Fork the repository on GitHub.
- Create a new branch with a descriptive name for your feature or bug fix.
- Make your changes and commit them with a clear message.
- Push your branch to your forked repository.
- Open a pull request to the main repository, explaining the changes you made.

<a name="license"></a>

## License

[MIT](https://choosealicense.com/licenses/mit/)
