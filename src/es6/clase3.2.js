// ----CLASE 3.2-----

const promise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve("Sucessfully");
        } else {
            reject("Ups! Something Wrong!");
        }
    });
}

promise()
  .then(response => console.log(response))
  .then(() => console.log("Good Job!"))
  .catch(error => console.log(error));