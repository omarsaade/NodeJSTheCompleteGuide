//    class
const { AsyncLocalStorage } = require("async_hooks");
const EventEmitter = require("events");
// instance or object
const emitter = new EventEmitter();
//emit : produce something  / Making a noise

//Register a listener
// on bta3mul addListener
emitter.on("messageLogged", () => {
  console.log("Listener called");
});

//Raising an event here.
emitter.emit("messageLogged");
