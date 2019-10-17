import { createLabel } from '../../barcode';

describe('Barcode', () => {
    it('createLabel: Should return div element with data of barcode', () => {
        const data = {
            itemName: "Eins",
            barcode: "RCP0000054200010893",
            itemsQuantity: 8
        }
        const result = createLabel(data);
        expect(result).toEqual('<div>RCP0000054200010893</div>');
    });
});