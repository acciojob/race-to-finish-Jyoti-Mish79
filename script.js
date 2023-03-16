

// Do not change the code above this
// add your promises to the array `promises`
const promises = Array.from({ length: 5 }, () => Math.random() * 4000 + 1000)
  .map((ms, i) => new Promise(resolve => setTimeout(() => resolve(`Promise ${i + 1} resolved`), ms)));

Promise.any(promises)
  .then(result => {
    document.getElementById('output').innerText = result;
  });
