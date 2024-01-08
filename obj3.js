const shape = {
    radius: 10,
    diameter() {
    return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius,
    };
    
    // console.log(shape.diameter());
    // console.log(shape.perimeter());

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
        // console.log(freddie.colorChange('orange'));
        console.log(Chameleon.colorChange('orange'));