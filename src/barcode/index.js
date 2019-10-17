import { readFile } from '../pdf';

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

export const createLabelGrid = (data) => {
    let labels =  flatLabels(data);
    labels = labels.map(element => createLabel(element));
    labels = labels.join('');
    return labels;
}

export const createSheet = (labels) => {
    let file = readFile('../templates/html/index.html');
    return file.replace('content',labels);
}