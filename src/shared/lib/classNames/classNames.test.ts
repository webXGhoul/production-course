import { classNames } from 'shared/lib/classNames/classNames';
describe("classNames", () => {
    test('with only params', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with additional params', () => {
        const expectedClass = 'someClass first second';
        expect(classNames('someClass', {}, ["first", "second"])).toBe(expectedClass);
    });
    test('with mods', () => {
        const expectedClass = 'someClass first second hovered';
        expect(classNames('someClass', { hovered: true, scrollable: false }, ["first", "second"])).toBe(expectedClass);
    });
    test('with mods undefined', () => {
        const expectedClass = 'someClass first second hovered';
        expect(classNames('someClass', { hovered: true, scrollable: undefined }, ["first", "second"])).toBe(expectedClass);
    });
});