const nicknameGenerator = (name) => name.length < 4 ? "Error: Name too short" : name[2].match(/[aeuio]/) ? "Error: Name too short" : name.slice(0,3);