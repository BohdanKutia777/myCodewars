const calculate = str => (eval(str.replace(/(plus)/gi,'+').replace(/(minus)/gi,'-'))).toString();