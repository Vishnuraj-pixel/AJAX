function a (callback) {
    console.log("inside function a");
    // callback();
    callback(b());
}

function b () {
    console.log("inside function b");
}

// a(b);

a(function () {
    console.log("inside function");
})

const posts = [
    {
        id: 1, title: "introduction"
    },
    {
        id: 2, title: "Chapter-1"
    },
    {
        id: 3, title: "Chapter-2"
    }
]