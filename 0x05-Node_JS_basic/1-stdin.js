process.stdout.write('Welcome to Holberton School, what is your name? ');

process.stdin.on('readable', () => {
    const input = process.stdin.read();

    if(input) {
        process.stdout.write(`Your name is ${input}`)
    }
});

process.stdin.on('end', () => {
    process.stdout.write(`Thats the end. Thanks`)
})