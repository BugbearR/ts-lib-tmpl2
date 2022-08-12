import {hello} from "../src/hello";

test('Hello, world!', () => {
    expect(hello('world')).toBe('Hello, world!');
});
