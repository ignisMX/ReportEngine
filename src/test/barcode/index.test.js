import { createLabel, flatLabels, createLabelGrid } from '../../barcode';

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

    it('flatLabels: Should return all labels in an array', () => {
        const data = [
            {
                itemName: "Eins",
                barcode: "RCP0000054200010893",
                itemsQuantity: 8
            },
            {
                itemName: "Zwei",
                barcode: "RCP0000054200020894",
                itemsQuantity: 12
            }
        ];

        const result  = flatLabels(data);
        expect(result).toHaveLength(20);
    });

    it('createLabelGrid', () => {
        const data = [
            {
                itemName: "Eins",
                barcode: "RCP0000054200010893",
                itemsQuantity: 8
            },
            {
                itemName: "Zwei",
                barcode: "RCP0000054200020894",
                itemsQuantity: 12
            }
        ];

        const result = createLabelGrid(data);
        const labels = '<div>RCP0000054200010893</div><div>RCP0000054200010893</div>'+
        '<div>RCP0000054200010893</div><div>RCP0000054200010893</div><div>RCP0000054200010893</div>'+
        '<div>RCP0000054200010893</div><div>RCP0000054200010893</div><div>RCP0000054200010893</div>'+
        '<div>RCP0000054200020894</div><div>RCP0000054200020894</div><div>RCP0000054200020894</div>'+
        '<div>RCP0000054200020894</div><div>RCP0000054200020894</div><div>RCP0000054200020894</div>'+
        '<div>RCP0000054200020894</div><div>RCP0000054200020894</div><div>RCP0000054200020894</div>'+
        '<div>RCP0000054200020894</div><div>RCP0000054200020894</div><div>RCP0000054200020894</div>';
        expect(result).toEqual(labels);
    });
});