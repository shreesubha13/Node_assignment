const EventEmitter = require("events");

const eventEmitter = new EventEmitter();

const Message = (channelName) => {
     console.log(`Thanks For Subscribing to ${channelName}`);
};

eventEmitter.addListener("subscribe", Message);

eventEmitter.emit("subscribe", "College Wallah");
