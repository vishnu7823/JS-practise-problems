//object declaration,access,delete

const dogtypes = {
    name:"greatdane",
    color:'merliqueen',
    age:'4',
    dob :'07/08/2003 '
}

dogtypes.place = "trichy"
dogtypes.age = '2'
delete dogtypes.dob;

console.log(dogtypes.color);
console.log(dogtypes['dob']);
console.log(dogtypes)
