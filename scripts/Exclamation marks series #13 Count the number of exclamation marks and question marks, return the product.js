const product = string => (string.match(/\?/g)||[]).length*(string.match(/!/g)||[]).length;