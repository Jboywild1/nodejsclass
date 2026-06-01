const args = process.argv.slice(2);

args.forEach((arg) => {

  if (process.env[arg] === undefined) 
      console.log(`${arg} is invalid`);
    else
      console.log(process.env[arg]);
});