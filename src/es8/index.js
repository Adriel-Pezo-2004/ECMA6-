const data = {
    frontend: 'Oscar',
    backend: 'Rafa',
    design: 'Melany',
  }
  
  const entries = Object.entries(data);
  console.log(entries);
  console.log(entries.length);
  
  console.log("<--------------------->");
  
  const data2 = {
    frontend: 'Oscar',
    backend: 'Rafa',
    design: 'Melany',
  }
  
  const values = Object.values(data2);
  console.log(values);
  console.log(values.length);
  
  console.log("<--------------------->");
  
  const string = 'hello';
  console.log(string.padStart(8,'hi '));
  console.log(string.padEnd(10,' ----'));
  console.log('food'.padEnd(10,' ----'));
