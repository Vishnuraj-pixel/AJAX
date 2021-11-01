fetch('todos.json').then((response) => {
    console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log('rejected', err);
});


const getTodos = async () =>{
    
    const response = await fetch('todos.json');
    const data = await response.json();

    return data;
};

// getTodos().then(data => {
//     console.log('resolved: ', data);
// })


// OR


console.log(1);
console.log(2);
getTodos()
.then(data => console.log('resolved: ', data));
console.log(3);
console.log(4);
