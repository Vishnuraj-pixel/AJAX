const getTodos = (resource) => {
    
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
        // console.log(request); 
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.response);
                resolve(data);
            }else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });
    
        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
        request.open('GET', resource);
    
        request.send();
    });
};

getTodos('todos.json').then(data => {
    console.log('promise resolved: ',data);
    return getTodos('todos-1.json'); 
}).then(data => {
    console.log('promise 2 resolved: ', data);
    return getTodos('todos-2.json');
}).then(data => {
    console.log('promise 3 resolved: ', data)
}).catch(err => { 
    console.log('promise rejected: ', err); 
});


// getTodos((err, data) => {
//     console.log('callback fired');
//     if (err) {
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });

// getTodos('todos.json',(err, data) => {
//     console.log(data);
// });

// const getSomething = (resolve, reject) => {
//     return new Promise(() => {
//         // fetch something
//         resolve('some data');
//         reject('some error');

//     })
// }

