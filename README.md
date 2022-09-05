<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/shikhar13012001/hackathon">
    <img src="https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/standard%20(2).gif" alt="Logo" >
  </a>

  <h3 align="center"></h3>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[scs](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/Screenshot%20(274).png)

<!-- right here description-->

This project is build with WEBRTC , simple-peer library and socket.io , using node js as backend and reactjs as frontend library , for styling MUI and Tailwindcss is used.
simple-peer library is used for peer to peer connection .
socket.io is used for signaling server , it is used to exchange information between peers , like ice candidates , offer and answer , and other information.
WEBRTC is used for media streaming , it is used to stream video and audio between peers.

## Features

-   Login and signup using Firebase
-   Start a Meet
-   Turn on/off video
-   Turn on/off mic
-   Video Conferencing (Multiple users can join at the single time)
-   Get the count of participants

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

[![Neact][node.js]][node-url]
[![Express][express.js]][express-url]
[![React][react.js]][react-url]
[![MongoDB][mongo.db]][mongo-url]
[![Redux Toolkit][redux]][redux-url]
[![Material UI][material-ui]][material-ui-url]
[![Tailwind CSS][tailwind-css]][tailwind-css-url]
[![Firebase][firebase]][firebase-url]
[![Socket.io][socket.io]][socket-url]
[![Simple-peer][simple-peer]][simple-peer-url]
[![WebRTC][webrtc]][webrtc-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

-   npm
    ```sh
    npm install npm@latest -g
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/shikhar13012001/hackathon.git
    ```
2. Install NPM packages
    ```sh
    npm install
    ```
3. Enter your API in `firebase.js`
    ```js
    const firebaseconfig ={
     apiKey: '********************',
     authDomain:: '********************',
     projectId: : '*******************',
     storageBucket: : '********************',
     messagingSenderId: : '********************',
     appId: : '********************',
    }
    ```
4. Start the frontend
    ```js
    npm start
    ```
5. switch to backend branch
    ```sh
    git checkout backend
    ```
    
6. install NPM packages
    ```sh
    npm install
    ```


7. start the server
    ```sh
    npm run dev
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
##  ScreenShots 
![Screenshot1](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/Screenshot%20(274).png)
![Screenshot1](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/Screenshot%20(275).png)
![Screenshot1](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/Screenshot%20(276).png)
![Screenshot1](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/screenshot.jpeg)
![Screenshot1](https://raw.githubusercontent.com/shikhar13012001/hackathon/main/public/assets/Screenshot%20(278).png)

## Usage

<!-- add screen shots -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

See the [open issues](https://github.com/shikhar13012001/hackathon/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Project Link: [https://github.com/shikhar13012001/hackathon](https://github.com/shikhar13012001/hackathon)

contributors :<br>
Ayush Russiya<br>
Shikhar Gupta<br>
Suyash Vikram Singh<br>
Sanket Diwate<br>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments
-   [React Icons](https://react-icons.github.io/react-icons/search)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[next-url]: https://nextjs.org/
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[laravel-url]: https://laravel.com
[bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[bootstrap-url]: https://getbootstrap.com
[jquery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[jquery-url]: https://jquery.com
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: https://user-images.githubusercontent.com/80644262/178795979-add73ca5-6d76-44e7-9e5d-1a2e6db5b940.jpg
[react.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactjs.org/
[node.js]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[mongo.db]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongo-url]: https://www.mongodb.com/
[redux]: https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white
[redux-url]: https://redux-toolkit.js.org/
<!-- webrtc simplepeer firebase urls -->
[webrtc]: https://img.shields.io/badge/WebRTC-333333?style=for-the-badge&logo=WebRTC&logoColor=white
[webrtc-url]: https://webrtc.org/
[simple-peer]: https://img.shields.io/badge/SimplePeer-333333?style=for-the-badge&logo=SimplePeer&logoColor=white
[simple-peer-url]:https://www.npmjs.com/package/simple-peer
[firebase]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black
[firebase-url]: https://firebase.google.com/

[socket.io]: https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socketdotio&logoColor=white
[socket-url]: https://socket.io/
[material-ui]: https://img.shields.io/badge/Material--UI-0081CB?style=for-the-badge&logo=material-ui&logoColor=white
[material-ui-url]: https://material-ui.com/
[tailwind-css]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[tailwind-css-url]: https://tailwindcss.com/


## Reference 
https://www.youtube.com/watch?v=JhyY8LdAQHU&list=PLK0STOMCFms4nXm1bRUdjhPg0coxI2U6h&index=4
