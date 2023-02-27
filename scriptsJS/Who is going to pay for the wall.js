const whoIsPaying = name => name.length <= 2 ? [name] : [name, name.substr(0, 2)];
