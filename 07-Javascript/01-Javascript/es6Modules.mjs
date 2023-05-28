export const _PI = 3.14159;
export const radius = () => window.prompt('enter a value');

export const getCircumference = function getCircumference(radius,PI=_PI) {
    return PI * radius;
}

export const getArea = function getArea(radius,PI=_PI) {
    return PI * Math.pow(radius, 2);
}