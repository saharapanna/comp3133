const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);
const EventEmitter = require('events');
const convert = new EventEmitter();

convert.addListener('convert', (buffer) => {
    buffer.forEach(element => {
        console.log(element)
    });
    console.log('buffer converted')
})
convert.emit('convert', buf);
