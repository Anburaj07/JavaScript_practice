const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
    };
    
    console.log(shape.diameter());
    console.log(shape.perimeter());

    class Chameleon {
        static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
        }
        
        constructor({ newColor = 'green' } = {}) {
        this.newColor = newColor;
        }
        }
        
        const freddie = new Chameleon({ newColor: 'purple' })
        console.log('freddie:', freddie.newColor)
        console.log(freddie.colorChange('orange'));
        console.log(Chameleon.colorChange('orange'));

        console.log(`${(x => x)('I love')} to program`);

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);


function bark() {
console.log('Woof!');
}

bark.animal = 'dog';
bark()
console.log(bark)