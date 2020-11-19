let userName = 'Anton';
console.log(userName);
userName = null;
console.log(userName);

for (let i = 0; i < 5; i++) {
    const infoR = `${userName}_${i}`;
    userName = `${userName}_${i}`;
    console.log('infoR =', infoR);
}

console.log('userName =', userName);
// console.log('infoR =', infoR);
