const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => resolve('Do Something Async'), 4000)
      : reject(new Error('Test Error'))
  })
}

const doSomething = async () => {
  const something = await doSomethingAsync()
  console.log(`${something}1`);
}

console.log('Before 1');
doSomething();
console.log('After 1');

const anOtherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(`${something}2`);
  } catch (error) {
    console.log(error)
  }
}

console.log('Before 2');
anOtherFunction();
console.log('After 2');