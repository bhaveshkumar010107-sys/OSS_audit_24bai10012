const { exec } = require('child_process');
exec('npm list -g express', (err, stdout) => {
    console.log(stdout);
});