// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    this.eventsRegistry = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.eventsRegistry[eventName]) {
      this.eventsRegistry[eventName].push(callback);
    } else {
      this.eventsRegistry[eventName] = [callback];
    } 
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.eventsRegistry[eventName]) {
      this.eventsRegistry[eventName].forEach(function(cb){
        cb();
      })
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.eventsRegistry[eventName]){
      this.eventsRegistry[eventName] = [];
    }
  }
}

module.exports = Events;
