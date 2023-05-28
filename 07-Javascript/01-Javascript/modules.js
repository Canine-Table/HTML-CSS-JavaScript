import * as es6Modules from "./es6Modules.mjs"

document.getElementById('es6ModulesButton').onclick = () => {
    /**
     *      The idea behind a module is that it's a file of reusable code
     *      We can import to sections of pre-writen code to use whenever we want
     *      Great for any general utility value and functions
     *      Helps make code more reusable and maintainable
     *      Think of modules of seperate chapters of a book
     */

        let radius_ = es6Modules.radius()
        let PI_ = es6Modules._PI
        console.log((`\nthe radius of ${radius_} has an Area of ${es6Modules.getArea(radius_,PI_)}\n\n`));
        console.log(`\nthe radius of ${radius_} has a Circumference of ${es6Modules.getCircumference(radius_,PI_)}\n\n`);
        
} // ES6 Modules Button
