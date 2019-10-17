import { readFile } from '../../pdf';

describe('Barcode', () => {
    it('readFile: Should return content of index.html as string', () => {
        const result = readFile('../templates/html/index.html');

        expect(result.includes('<!DOCTYPE html>')).toBeTruthy();
        expect(result.includes('<html lang="en">')).toBeTruthy();
        expect(result.includes('<head>')).toBeTruthy();
        expect(result.includes('<meta charset="utf-8" />')).toBeTruthy();
        expect(result.includes('<title>Inventory Studio</title>')).toBeTruthy();
        expect(result.includes('</head>')).toBeTruthy();
        expect(result.includes('<body>')).toBeTruthy();
        expect(result.includes('<div id="root"></div>')).toBeTruthy();
        expect(result.includes('</body>')).toBeTruthy();
        expect(result.includes('</html>')).toBeTruthy();
    });
});