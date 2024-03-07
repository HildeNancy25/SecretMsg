let Secretmsg = ['hello', 'dear', 'friends', 'its been', 'long', 'time'];
console.log(Secretmsg.length);
Secretmsg.push('to','Program');
Secretmsg[1] = 'Dearest';
// checking changes made
console.log(Secretmsg);

const remove = Secretmsg.shift();
console.log(Secretmsg);
console.log(remove);

Secretmsg.unshift('Programming');
console.log(Secretmsg);

Secretmsg.splice(3,3,'know');
console.log(Secretmsg.join(' '));

