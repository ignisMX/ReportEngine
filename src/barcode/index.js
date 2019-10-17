export const createLabel = (data) => {
    return `<div>${data.barcode}</div>`;
}

export const flatLabels = (data) => {
    let labels = [];
    data.forEach(element => {
        for (let index = 0; index < element.itemsQuantity; index++) {
            labels.push({itemName: element.itemName, barcode: element.barcode});            
        }
    });

    return labels;
}

export const buildSheet = () => {
    let file = readFile('../html/index.html');
    
}