var objects;
(function (objects) {
    var Person = (function () {
        function Person(name) {
            this._name = name;
        }
        Person.prototype.speaks = function () {
            console.log(this._name + " says hello");
        };
        return Person;
    })();
    objects.Person = Person;
})(objects || (objects = {}));
//# sourceMappingURL=person.js.map