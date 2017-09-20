var foo = () => {
    console.log(this.id);
}

var id = 1;

foo(); // 输出1

foo.call({ id: 2 }); // 输出1


// var bar = 'bar';
// var foo = function ()
// {
//     // ...
// }

// var baz = { bar, foo };