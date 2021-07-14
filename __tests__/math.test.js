const math = require("../lib/math");

// TestWatcher('checks to see if 2 plus 3 equals 5') 

test('checks to see if 2 plus 3 equals 5', () => {
    expect(math.add(2,3)).toBe(5);
})

