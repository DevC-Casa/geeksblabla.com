<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.geeksblablas.com">
    <img alt="Gatsby" src="https://raw.githubusercontent.com/DevC-Casa/geeksblabla.com/master/static/images/logo.png" width="200" />
  </a>
</p>
<h1 align="center">
  GeeksBlabla Website
</h1>

Geeksblabla is a webinar where we meet to share and learn about awesome topics from the best.

We Invite knowledgable and interesting people who are not always known to the public so that they share with us their experience.

We talk about the hottest new topics and explain it to the community in a way that is simple and approachable.

The website is built using [Gatsbyjs](http://gatsbyjs.org)

## 🚀 Quick start

1.  **Fork and clone the project**

    ```sh
    git clone git@github.com:your-username/geeksblabla.com.git
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd geeksblabla.com/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 🧐 Want to contribute ?

If you want to contribute check out the [help wanted](https://github.com/devC-Casa/geeksblabla.com/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22+sort%3Aupdated-desc) issues for things that need fixing, or suggest some new features by opening new issues.

## Add New Episode ?

1.  **Follow the Quick start 👆**
2.  **Create a new episode folder**

    - Duplicate an existing episode folder and rename it with the correct episode number `epX`

    - open `index.md` and Make sure to update the following info :

      - Episode date, time, duration
      - Episode Title : Facebook live stream episode title.
      - Tags : At least 1
      - isNext : always `false`. `true` means the episode is the next one and should appear on the footer.
      - video : Facebook video id

3 . **Add Episode Notes && Links**

```
date: 2019-03-28
time: 20h
duration: "1:48"
title: "Open Source with Yassine Elouafi"
tags: ["open source", "dev"]
isNext: false
video: "2254365704624093"
published: true
podcastUrl:
description: "A simple description of the episode like the following"
notes: "0:00 - Intro
0:03 - The history of web and W3C?
	...
1:57 - when you can find trending web technologies?
"
guests: 
    - name: 'guest name 1'
      link: 'https://example.com'
    - name: 'guest name 2'
      link: 'https://example.com'
prepared: 
links: 
    - title: 'W3C'
      url: 'https://www.w3.org/' 
    - title: 'Reactjs'
      url: 'https://reactjs.org'    
```
In the end, the episode markdown file should look like : 👇

```
---
date: 2019-03-21
time: 20h
duration: "1:09"
title: "Introduction to Open Source"
tags: ["open source", "dev"]
isNext: false
published: true
video: "2244351238958873"
url:
podcastUrl:
description: "A simple description of the episode like the following"
notes: "0:00 - Intro
0:03 - The history of web and W3C?
	...
1:57 - when you can find trending web technologies?
"
guests: 
    - name: 'guest name 1'
      link: 'https://example.com'
    - name: 'guest name 2'
      link: 'https://example.com'
prepared: 
links: 
    - title: 'W3C'
      url: 'https://www.w3.org/' 
    - title: 'Reactjs'
      url: 'https://reactjs.org'  
```

4.**Open the source code and start editing!**

Navigate to `http://localhost:8000/blablas` and Make sure the episode page works as expected

## Licensing

The code in this project is licensed under MIT license.
