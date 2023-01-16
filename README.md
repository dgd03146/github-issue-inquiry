# Github Issue Inquiry

## Deployed link

<a href="[https://starlit-snickerdoodle-9d0b9e.netlify.app](https://starlit-snickerdoodle-9d0b9e.netlify.app/)" target="_blank">https://starlit-snickerdoodle-9d0b9e.netlify.app/</a>

# How to set up and run your environment

## Configuration Settings

1. It is recommended to run on NodeJS 16.14.2.
2. Create the .env file in the root directory and insert the value as follows:

```
REACT_APP_GITHUB_TOKEN=<your-key>

```

## Installation

```
npm ci

```

## Execute

```
npm start

```

# Directory structure

```
📦src
┣ ┣ 📂Components
┣ ┣ 📂Pages
┃ ┃ ┣ 📂Detail
┃ ┃ ┣ 📂Home
┃ ┃ ┣ 📂NotFound
┣ ┣ 📂Routes
┣ ┣ 📂lib
┃ ┃ ┣ 📂api
┃ ┃ ┣ 📂hooks
┃ ┃ ┣ 📂store
┃ ┃ ┗ 📂styles

```

# Implementation

## 1. **Implement Infinite Scrolls by using the Intersection Observer API**

- I used it because I thought it was more convenient to understand the code than scroll animation.
- The Intersection Observer can control Data Fetching using the entry.isIntersecting value being observed when a component (or HTML tag) you decide to observe is exposed on the viewport.
- The API is used to create a hook called [useIntersection] (../wanted-assignment2/src/lib/hooks/useIntersection.ts) to control Data Fetching using externally managed server status values.

## 2. Context API

- When managing global health, the provider is placed outside of the router, not inside the router, for greater manageability.
- Custom hook makes it easier to use the state managed by Context in components.

## 3. HTTP API

- The context and API logic were separated, and the API created a GithubRequestService class and used separate interests.
- You can use numeric keys by applying issue as a Map type, and compared to the existing key, only the first issue that is imported is imported from the Github REST API, and the issue that is already called is reused.

## 4. Error and loading processing

- In the case of errors, we provided not only the NotFound page but also a separate page if another error occurs.
- In the case of loading, user convenience was provided by showing the loading spinner when data was first loaded and when data was additionally loaded according to scrolling.

## 5. Request and display data according to specified conditions

- Using the octokit package, which is the utilkit recommended in the official document of github rest api, the data were sorted in the way that the official document guided by giving the config values sort: "comments" and state: "open".
- In addition, the method of sorting by the filter function or map function of JavaScript is to use the client's resources in the end, so we adopted a method of requesting data by giving the option of octokit.

## 6. Reactive Web Implementation

- Media queries were used to implement the layout to vary with device size.
- The device size value was saved in the me provider of styled-componentst.

## 7. Common Header

- Rather than placing the header in the layout surrounding the entire viewport after receiving children, the component corresponding to the layout path other than the header is displayed with the output function of react-router-dom to prevent the header component from being rerendered.

# Usage Library

### Production

- @octokit/rest
    
    It is suggested by github Rest API Document, so I used it as an HTTP Client.
    
- styled-components
    
    Used for CSS style.
    
- react-icons
    
    I installed and used it to use svgicon.
    
- react-markdown
    
    Markdown was used to convert to HTML tags.
    
- react-syntax-highlighter
    
    The code block written in markdown was converted to HTML to create a CSS style, which was used to make it easier for users to see code blocks.
    
- rehype-raw
- remark-gfm
- react-router-dom
    
    It was used to design page movement between SPAs more conveniently on react.
    

### Dev

- eslint
- prettier
- husky
