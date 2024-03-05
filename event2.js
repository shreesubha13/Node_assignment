const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const Message = (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", Message);

console.log("Calling event listner before removing the event.");
eventEmitter.emit("subscribe", "College Wallah");

console.log("Calling event listner after removing the event.");
eventEmitter.removeListener("subscribe", Message);

eventEmitter.emit("subscribe", "College Wallah");

