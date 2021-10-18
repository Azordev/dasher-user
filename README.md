# dasher-user - Delivery Maps for your users

<!-- PROJECT SHIELDS -->
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues-open][issues-open-shield]][issues-url]
[![Issues-closed][issues-closed-shield]][issues-url]
[![Contributors][contributors-shield]][contributors-url]

<!-- PROJECT LOGO -->
| Dasher - User App |
| :---: |
| ![app-icon][] |
| ONLINE ACCESS SYSTEM FOR CUSTOMER AND CONSUMER MONITORING. |
| [🐞 Report a bug or 🙋‍♂️ request a feature][issues-url] |
| [![contributions welcome][contributions-welcome]][issues-url] [![License][badge-apache]][apache-license] |

- [dasher-user - Delivery Maps for your users](#dasher-user---delivery-maps-for-your-users)
  - [The Project](#the-project)
    - [Features](#features)
    - [Built With](#built-with)
  - [Create a .env file](#create-a-env-file)
  - [Advantages Of Styled-Components](#advantages-of-styled-components)
  - [Using the App](#using-the-app)
  - [How to run this project](#how-to-run-this-project)
    - [Prerequisites](#prerequisites)
    - [Run it (Quickstart with docker)](#run-it-quickstart-with-docker)
    - [Installing the project](#installing-the-project)
    - [Available Scripts](#available-scripts)
      - [`npm start`](#npm-start)
      - [`npm run build`](#npm-run-build)
    - [Learn More](#learn-more)
  - [Potential Features](#potential-features)
  - [Author](#author)
  - [Contributing](#contributing)
  - [Show your support](#show-your-support)
  - [License](#license)

## The Project

Do you want to know how your shipment is going and how long it will arrive? You just have to enter this app where you can review the travel of your shipment in real time, see the confirmation of departure and the confirmation of receipt.

### Features

![javascript][]
![react][]

- Basic `create-react-app` structure
- Sets `stylelint` on the repo
- Sets `eslint` rules
- Linters
- React
- React-DOM
- React-Create-App
- PropTypes
- ES6 syntax
- Export/import ES6+ notation

### Built With

- `create-react-app`
- `ESLint`
- `npm`
- `vscode` with _ESLint_ extension
- Linux/GNU, macOS, Windows
- Love and Passion for code


## Create a .env file
- Create a .env file.
- Put correct key.
  
## Advantages Of Styled-Components
- Easier management of CSS: With every bit of styling tied to a specific component, it is easier to know which CSS is applied This makes it easy to delete unused component styles.
- Using styled components if we change a variable value then it can change all the value.
- We can reuse same style component where we need and also we can use it conditionaly.
- Simple and dynamic styling: Through props and global themes supported in styled-components, styling is simple without manually managing dozens of classes.




## Using the App

- Open it in your browser.

## How to run this project

### Prerequisites

- `npm` 6.13 +
- `node` 14.17 +
- `docker` and `docker-compose` (optional)
- A Text Editor like VSCode
- A browser like Firefox or Chrome

### Run it (Quickstart with docker)

- Be sure to setup `docker-compose` and have `git` and `npm` working.
- Run this:

```sh
> git clone https://github.com/Azordev/dasher-user.git
> cd dasher-user
> npm i
> docker-compose build
> docker-compose up frontend
```

- Enter [localhost:3000][] in a browser for the frontend.

You can also test using docker, run `docker-compose up test` or `docker-compose run --rm test`

Not a fan of Docker or need more information? Continue for instructions to learn more about how to setup your PC for run the frontend!

We used `create-react-app` to initialize this project, so it is configurated to be easy to run. Just follow the following instructions.

### Installing the project

Now that you are set up, open a terminal and:

```sh
git clone https://github.com/Azordev/dasher-user.git
cd dasher-user
npm i && npm start
```

Then open [http://localhost:3000/](http://localhost:3000/) to see the app.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Potential Features

- [ ] \<Insert your great idea here!>.

## Author

| [Israel Laguan][author-github] | ![email-icon][] Email me to [contact@israellaguan.com][author-email] / ![linkedin-icon][] Connect to [my Linkedin][author-linkedin] |
|:---:|:---:|
| ![author-pic][] | ![banner][] |

## Contributing

[![contributions welcome][contributions-welcome]][issues-url]

🤝 Contributions, issues and feature requests are welcome!
Feel free to check the [issues page][issues-url].

## Show your support

🤗 Give a ⭐️ if you like this project!

- API: Powered by [Google Maps](https://developers.google.com/maps/documentation/javascript/overview)

- <https://blog.logrocket.com/deep-dive-into-lefthook-react-native/>
- <https://blog.logrocket.com/build-robust-react-app-husky-pre-commit-hooks-github-actions/>
- Favicon from [favicon.io](https://favicon.io/emoji-favicons/)
- Production deployment using [Netlify](https://app.netlify.com/sites/azordev-dasher-user/overview)
- <https://www.seoptimer.com/meta-tag-generator>
- <https://dev.to/nitzano/linting-docker-containers-2lo6?utm_source=lefthook>

## License

[![License][badge-apache]][apache-license]

📝 This project is licensed under the [Apache 2](LICENSE)\
Feel free to fork this project and improve it!

<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/Azordev/dasher-user?style=for-the-badge
[contributors-url]: https://github.com/Azordev/dasher-user/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/Azordev/dasher-user?style=for-the-badge
[forks-url]: https://github.com/Azordev/dasher-user/network/members
[stars-shield]: https://img.shields.io/github/stars/Azordev/dasher-user?style=for-the-badge
[stars-url]: https://github.com/Azordev/dasher-user/stargazers
[issues-open-shield]: https://img.shields.io/github/issues/Azordev/dasher-user?style=for-the-badge
[issues-closed-shield]: https://img.shields.io/github/issues-closed/Azordev/dasher-user?style=for-the-badge
[react]: https://img.shields.io/badge/React-16+-61DAFB?style=for-the-badge&logo=react
[javascript]: https://img.shields.io/badge/JAVASCRIPT-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript
[css]: https://img.shields.io/badge/style-CSS-1572B6?style=for-the-badge&logo=css3
[contributions-welcome]: https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=for-the-badge
[issues-url]: https://github.com/Azordev/dasher-user/issues
[badge-apache]: https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge
[apache-license]: https://opensource.org/licenses/Apache-2.0
[author-pic]: https://avatars2.githubusercontent.com/u/36519478?s=460&v=4
[author-github]: https://israel-laguan.github.io
[author-linkedin]: https://www.linkedin.com/in/israellaguan
[author-email]: mailto:contact@israellaguan.com
[linkedin-icon]: https://img.icons8.com/color/20/000000/linkedin.png
[email-icon]: https://img.icons8.com/color/20/000000/message-squared.png
[banner]: https://github.com/Israel-Laguan/Israel-Laguan/raw/master/docs/banner.jpg
[app-banner]: docs/app-banner.png
[app-icon]: public/dasher.123.png
[Icons8]: https://icons8.com/
[icons8-logo]: https://img.icons8.com/fluent/20/000000/icons8-new-logo.png
[api-logo]: https://spoonacular.com/images/spoonacular-logo-b.svg
