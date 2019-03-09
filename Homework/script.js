'use strict';

class GoodsItem {
    constructor (img, title, description, price) {
        this.img = img;
        this.title = title;
        this.description = description;
        this.price = price;
    } 
    render (){
        return  `<div class='goods-item'>
                    <img>${this.img}</img>
                    <h3>${this.title}</h3> 
                    <p class='desc-text'>${this.description}</p>
                    <p class='price-text'>${this.price} $</p> 
                    <button class='buy-good'>Купить</button>
                </div>`;
    }
}

class GoodsList {
    constructor () {
        this.goods = [];
    }
    fetchGoods() {
        this.goods = [
        {
            img: "<img src='img/img1.jpg'>",
            title: 'LIB TECH',
            description: 'Lib Tech X Lost Round Nose Fish Redux Surfboard - Clear',
            price: 758
        },
        {
            img: "<img src='img/img2.jpg'>",
            title: 'CHANNEL ISLANDS',
            description: 'Channel Islands Bonzer 3D Surfboard - White',
            price: 842
        },
        {
            img: "<img src='img/img3.jpg'>",
            title: 'PYZEL',
            description: 'Pyzel Gremlin Futures 5 Fin Surfboard',
            price: 678
        },
        {
            img: "<img src='img/img4.jpg'>",
            title: 'FOURTH SURFBOARDS',
            description: 'Fourth Surfboards Charge 2.0 Base Construction FCS II 5 Fin Surfboard',
            price: 543
        },
        {
            img: "<img src='img/img5.jpg'>",
            title: 'SOFTECH',
            description: 'Softech Softtech Flash Performance FCS II Surfboard',
            price: 260
        },
        {
            img: "<img src='img/img6.jpg'>",
            title: 'BIC',
            description: 'Bic Shortboard Surfboard',
            price: 248
        },
        ];
    }

    render () {
        let listHtml = '';
        this.goods.forEach(good => {
            const goodItem = new GoodsItem (good.img, good.title, good.description, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
//Задание 2. Добавляю метод, определяющий суммарную стоимость всех товаров
    countTotalPrice(){
        let totalPrice = 0;
        for (let i = 0; i < this.goods.length; i++){
            totalPrice += this.goods[i].price;
        }
        return totalPrice;
    }
}

//Задание 1. Добавить пустые классы для корзины товаров и элементы корзины товаров.

class Cart {
    constructor (){
        this.goods
    }
    render(){}
    countTotalNumber(){}
    countTotalPrice(){}
    removeFromBasket(){}
    clearBasket(){}


}

let totalCheck = new GoodsList();
totalCheck.fetchGoods();
console.log('Общая стоимость всех товаров: ' + totalCheck.countTotalPrice() + '$');



const list = new GoodsList();
list.fetchGoods();

window.onload = () => {
    list.render();
};

