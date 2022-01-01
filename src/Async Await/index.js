const helloFun = () => {
    return new Promise((resolve,reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'),3000)
        : reject(new Error('Test Error'))
    })
  };
  
  const helloAsync = async () =>{
    const hello = await helloFun();
    console.log(hello);
  }
  
  helloAsync();
  
  const otherAsync = async () =>{
    try {
      const hello2 = await helloFun();
      console.log(hello2);
    } catch (error) {
      console.log(error);
    }
  };
  
  otherAsync();