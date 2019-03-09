'use strict'

class Hamburger {
    constructor(size, sauce, flavoring, mayo) {
        this.size = size;
        this.sauce = sauce;
        this.flavoring = flavoring;
        this.mayo = mayo;
    }

    countPrice() {
        let result = 0;

        if (this.size == 'small') {
            result += 50;
        } else {
            result += 100;
        }

        switch (this.sauce) {
            case 'cheese':
                result += 10;
                break;
            case 'salad':
                result += 20;
                break;
            case 'potatoes':
                result += 15;
                break;
        }

        if (this.flavoring) {
            result += 15;
        }

        if (this.mayo) {
            result += 20;
        }

        return result;
    }

    countCalories() {
        let result = 0;

        if (this.size == 'small') {
            result += 20;
        } else {
            result += 40;
        }

       switch (this.sauce) {
            case 'cheese':
                result += 20;
                break;
            case 'salad':
                result += 5;
                break;
            case 'potatoes':
                result += 10;
                break;
        }



        if (this.mayo) {
            result += 5;
        }

        return result;
    }
}

document.getElementById('submit').onclick = () => {
    let size = document.getElementById('size').value;
    let sauce = document.getElementById('sauce').value;
    let flavoring = document.getElementById('flavoring').checked;
    let mayo = document.getElementById('mayo').checked;

    let hamburger = new Hamburger(size, sauce, flavoring, mayo);
    document.getElementById('price').innerHTML = 'Стоимость Вашего заказа составляет: ' + hamburger.countPrice() + ' рублей';
    document.getElementById('calories').innerHTML ='Пищевая ценность: ' + hamburger.countCalories() + ' калорий';
};