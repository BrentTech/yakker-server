![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Socket.io Basics

### Author: Brent W.


### Links and Resources
* [repo](https://github.com/BrentTech/yakker-server)
* [backend](https://lab-28-yakker.herokuapp.com/)
* [front-end](https://codesandbox.io/s/n4w38m4r6m) (Code Sandbox)

### Modules (Front End)
###### `index.js`
Renders app.js to the DOM
###### `app.js`
Exports App with TrollJohn.js component
###### `troll.js`
Component that connects to Socket.io, emits events, and renders Words components and other JSX markup. Maintains state for words and typed input.
###### `words.js`
React component with JSX markup for button and message. Maintains state to toggle if message is like or not.

### Modules (Back End)
###### `server.js`
Basic Socket.io server. Stores 1000 message history, and emits events/payloads based on client connections and events.
