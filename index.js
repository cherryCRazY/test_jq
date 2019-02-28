var $$ = function(selector) {
    return new $$.factory(selector);
};

//extends Array
Object.setPrototypeOf($$.prototype, Array.prototype);

$$.prototype.toArray = function(arr) {
    return this.slice.call(arr);
};

$$.prototype.addClass = function(className) {
    for (var i = 0; i < this.length; i++) {
        this[i].classList.add(className);
    }
    return this;
};

$$.prototype.hide = function() {
    return this.addClass("hide");
};

//factory create new $$ object
$$.factory = function(selector) {
    if (!selector) {
        return this;
    }
    var elems = this.toArray(document.querySelectorAll(selector));
    for (var i = 0; i < elems.length; i++) {
        this[i] = elems[i];
    }
    this.length = elems.length;

    return this;
};

//set factory.prototype, so factory can use $$ methods
Object.setPrototypeOf($$.factory.prototype, $$.prototype);

//Checking
console.log($$("#test") instanceof $$);
console.log($$("#test") instanceof Array);
console.log($$("#test").hide() instanceof $$);
console.log($$("#test").addClass("red") instanceof Array);
console.log($$("li").addClass("red"));
console.log($$("li").map(el => el));
