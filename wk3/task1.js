const buffer_array = Buffer.from([8, 6, 7, 5, 3, 0, 9])
const buffer_string = Buffer.from("I'm a string!", "utf-8");
const buf1=buffer_string.toString();
const buf2=buffer_string.toString('hex');
const buf3= buffer_string.toString('utf-8', 0, 10);
const joined_buffer = Buffer.concat([buffer_array,buffer_string]);
const json = JSON.stringify(buffer_string);


console.log(buffer_array);
console.log(buffer_string);
console.log(buf1);
console.log(buf2);
console.log(buf3);
console.log(joined_buffer);
console.log(json);
