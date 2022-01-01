const names = {
    name:'Adriel',
    age: 17,
    country: 'PE'
  };
  
  let { country, ...all } = names;
  console.log(all);
  
  console.log('<---------------------->');
  
  const names2 = {
    name:'Adriel',
    age: 17
  };
  
  const names3 = {
    ...names2,
    country: 'PE'
  };
  
  console.log(names3);
  
  console.log('<---------------------->');
  
  const helloWord = () => {
    return new Promise((resolve,reject) => {
      (true)
        ? setTimeout(() => resolve(`Hello World`), 3000)
        : reject(new Error('Test Error'))
    });
  };
  
  //Promesas
  helloWord()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('FIN DEL PROGRAMA'))
  
  console.log('<---------------------->');
  
  //Fechas
  const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
  const match = regexData.exec('2004-07-15');
  const year = match[1];
  const month = match[2];
  const day = match[3];
  
  console.log(year,month,day);