// Optional chaining

const user = {};
console.log('user: ', user?.profile?.email);

if (user?.profile?.email) {
    console.log('email!',);
} else {
    console.log('fail');
}