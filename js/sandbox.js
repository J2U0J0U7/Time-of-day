const d = new Date();
let hour = d.getHours();

if(hour<12){
    console.log('It is morning.')
} else if(hour < 17) {
    console.log('It is Afternoon')
} else {
    console.log('it is night time')