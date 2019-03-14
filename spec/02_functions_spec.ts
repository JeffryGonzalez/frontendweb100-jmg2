describe('functions', () => {
    describe('parameters etc.', () => {

        it('you cannot overload functions in javascript', () => {

            function formatName(first: string, last: string, mi?: string): string {
                let fullName = `${last}, ${first}`;

                return mi ? fullName += ` ${mi}.` : fullName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');
            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');
        });
        it('default values for parameters', () => {
            function add(a: number = 5, b: number = 10): number {
                return a + b;
            }

            expect(add(2, 2)).toBe(4);
            expect(add(2)).toBe(12);
            expect(add()).toBe(15);
            expect(add(undefined, 5)).toBe(10);
        });
        it('takes an arbitrary number of parameters', () => {

            function add(a: number, b: number, ...rest: number[]): number {
                const firstTwo = a + b;
                return rest.reduce((x, y) => x + y, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });
        it('duck typing', () => {

            interface MessageHaver { message: string }
            function doIt(thing: MessageHaver) {
                console.log(thing.message);
            }

            // doIt("hi");
            const phoneCall = {
                message: 'Call me',
                from: 'Your Mom',
                when: '8:00 a.m.'
            }
            doIt(phoneCall);

            class PhoneCall {

                returned: boolean;

                constructor(public message: string, public from: string, private time: String) { }

                return() {
                    this.returned = true;
                }
            }

            const call2 = new PhoneCall('Your car is ready', 'Car Shop', '8:00 AM');
            call2.return();

            expect(call2.from).toBe('Car Shop');

            doIt(call2);

        });

        it('discriminated unions', () => {

            interface Action {
                type: string;
            }
            class NumberIncremented implements Action {
                readonly type = 'Increment'
                constructor(public incrementedBy: number) { }
            }

            class NumberDecremented {
                readonly type = 'Decrement'
                constructor(public decrementedBy: number) { }
            }

            class NumberReset {
                readonly type = 'Reset'
                constructor() { }
            }


            type Actions = NumberIncremented | NumberDecremented | NumberReset;
            const actions: Actions[] = [
                new NumberIncremented(3),
                new NumberIncremented(2),
                new NumberDecremented(1),
                new NumberReset(),
                new NumberIncremented(3),
                new NumberIncremented(2)
            ];

            let num = 0;
            actions.forEach(a => {
                switch (a.type) {
                    case 'Increment': {
                        num += a.incrementedBy;
                        return;
                    }
                    case 'Decrement': {
                        num -= a.decrementedBy;
                    }
                    case 'Reset': {
                        num = 0;
                    }
                }
            })

            expect(num).toBe(5);
        });
    });
    describe('array methods as higher ordered functions', () => {

    });
});
