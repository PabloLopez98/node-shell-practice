
const pwdCmd = () => {
  process.stdout.write('prompt > ');
  process.stdin.on('data', (data) => {
    const cmd = data.toString().trim();
  
    if (cmd === 'pwd') {
      process.stdout.write(`Result: ${process.cwd()}`);
    } 
  
    process.stdout.write('\nprompt > ');
  
  });
}

module.exports = pwdCmd;