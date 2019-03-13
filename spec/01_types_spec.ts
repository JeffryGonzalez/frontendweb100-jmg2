describe('types', () => {
    describe('declaring variables', () => {
        it('using the let keyword', () => {
            let name: string | number = 'Jeff';

            expect(name).toBe('Jeff');

            name = 'Buffy';

            expect(name).toBe('Buffy');

            name = 1138;

            expect(name).toBe(1138);

            let x: number | boolean;
        });
        it('a const keyword', () => {

            const PI = 3.14;

            const favoriteNumbers = [1, 2, 3, 4, 5, 6];

            // favoriteNumbers = [20,108];

            favoriteNumbers[0] = 108;

            const movie = {
                title: 'Star Wars IV',
                director: 'Lucas',
                yearReleased: 1978
            };

            movie.yearReleased = 1977;

        });
        it('why using var is bad for your health', () => {
            const age = 22;
            let tacos;
            if (age > 21) {
                var message = 'Old Enough!';
                // let message = 'Old Enough!';
            }

            expect(message).toBe('Old Enough!');

            expect(tacos).toBeUndefined();
        });

    });
    describe('literals in typescript', () => {

        it('numeric literals', () => {
            let x: number;
            x = 12;
            x = 3.0;
            x = 3_000_000;
            x = 0xff;
            x = 0b10101;
            x = 0o744;

        });
        it('has booleans', () => {
            let x: boolean;
            x = true;
            x = false;

            expect("").toBeFalsy();
            expect(-1).toBeTruthy();

        });
        describe('string literals', () => {
            it('does not care if you use single or double quotes', () => {

                const f1 = "Bob";
                const f2 = 'Bob';
                expect(f1).toBe(f2);

                const f3 = "His name is Bob O'Connor";
                const fb = 'His name is Bob O\'Connor';
                const f4 = 'She said "Is it lunch time yet?"';
                const f4b = "She said \"Is it lunch time yet?\"";

            });
            it('has template string', () => {
                const f1 = "Bob";
                const f2 = `Bob`;
                expect(f1).toBe(f2);

                const f3 = `Multi-

line 
                
                strings!`;

                console.log(f3);

                const title = 'Walden', author = 'Thoreau';

                const info = `That book is called ${title} by ${author}`;
                console.log(info);

            });

        });
    });

    describe('arrays', () => {
        it('has them', () => {
            const things = [];
            things[0] = 'Morning!';
            things[1] = 99;
            things[999] = things;
            expect(things[999][0]).toBe('Morning!');

            const numbers = [1, 12, 3];
            // numbers[18] = 'Tacos';

            const friends: string[] = [];

            friends[0] = 'David';
            friends[1] = 'Reggie';

            const stuff: Array<number | string> = [5, 6, 'yogurt'];
            // const stuff: (string | number)[] = [5, 6, 'yogurt'];

            const lotteryNumbers: Array<number> = [];


        });
    });
});