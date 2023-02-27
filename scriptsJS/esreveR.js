const reverse = array => {
    return array.reduce(function(a, b) {
      return [b].concat(a)
    }, []);
  }