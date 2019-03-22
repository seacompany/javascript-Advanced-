'use strict';
/*Работаем с VUE.JS

//Реализация через промис

function makeGETRequest(url) {

    const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open('GET', url, true);
    xhr.send();

    return new Promise((resolve, reject) => {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                };
                reject(new Error('Error'));
            }
        };
    });
};


/*
// Использую метод Fetch
function status(response) {
    if (response.status >= 200 && response.status < 300){
        return Promise.resolve(response);
    } else {
        return Promise.reject (new Error (response.statusText))
    }
}

function json (response) {
    return response.json();
}
*/

/*

class GoodsItem {
    constructor(img, title, description, price) {
        this.img = img;
        this.title = title;
        this.description = description;
        this.price = price;
    }
    render() {
        return `<div class='goods-item'>
                    <img>${this.img}</img>
                    <h3>${this.title}</h3> 
                    <p class='desc-text'>${this.description}</p>
                    <p class='price-text'>${this.price} $</p> 
                    <button class='buy-good'>Купить</button>
                </div>`;
    }
}


class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }
    fetchGoods() {
        //Использую классические промисы
         return makeGETRequest('https://api.myjson.com/bins/1dzoea').then((goods) => {
            this.goods = goods;
            this.filteredGoods = goods;
            this.render();
            return true;
        }).catch (() => {
            return false;
        })
    }
        /* Использую метод Fetch
        fetch('https://api.myjson.com/bins/1dzoea')
            .then(status)
            .then(json)
            .then((goods) => {
                this.goods = goods;
                this.render();
            })
            .then(function(data) {
                console.log('Request succeeded with JSON response', data);
            })
            .catch (function (error) {
                console.log('Request failed', error);
            })
        */

/*

    filterGoods(value){
        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.title))
        this.render();
    }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
            const goodsItem = new GoodsItem(good.img, good.title, good.description, good.price);
            listHtml += goodsItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    countTotalPrice() {
        /*
        return this.goods.reduce((totalPrice, good) => {
            if(!good.price) return totalPrice;
            return totalPrice += good.price;
            },0);
        */

/*
        let priceArray = [];
        this.goods.forEach(good => priceArray.push(good.price));
        let totalPrice = priceArray.reduce((sum, current) => {
            return sum + current;
        }, 0);
        return totalPrice;
    }
}

//классы для корзины товаров и элементы корзины товаров.

class CartItem extends GoodsItem {
    constructor() {
        super()
    }
    render() {
        return `<div class='cart-item'>
                    <img>${this.img}</img>
                    <h3>${this.title}</h3> 
                    <p class='desc-text'>${this.description}</p>
                    <p class='price-text'>${this.price} $</p>
                </div>`;
    }
}

class Cart {
    constructor() {
        this.goods = [];
    }
    add(good) {
        this.goods.push(good);
        this.render();
    }

    remove(good) {
        const goodIndex = this.goods.findIndex(item => item.title = good.title);
        this.goods.splice(goodIndex, 1);
        this.render();
    }

    render() {
        let listHtml = '';
        this.goods.forEach(good => {
            const cartItem = new CartItem(good.img, good.title, good.description, good.price);
            listHtml += cartItem.render();
        });
        document.querySelector('.cart-list').innerHTML = listHtml;
    }
}


const list = new GoodsList();

window.onload = async () => {
    const searchButton = document.querySelector('.search-button');
    const searchInput = document.querySelector('.goods-search');
    searchButton.addEventListener ('click', () => {
        const value = searchInput.value;
        list.filterGoods(value);
    });

    try {
        await list.fetchGoods();
        console.log(`Общая стоимость всех товаров: ${list.countTotalPrice()}$`);
    } catch (err) {
        console.log(err);
    }
}
*/

const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart:[]
    },

    computed: {
        emptyCart(){
            if (this.isVisibleCart.length != 0) {
                return this.isVisibleCart;
            }
        }
    },

    methods: {
        makeGETRequest(url) {
            const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xhr.open('GET', url, true);
            xhr.send();

            return new Promise((resolve, reject) => {
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            resolve(JSON.parse(xhr.responseText));
                        };
                        reject(new Error('Error'));
                    }
                };
            });
        },

        filterGoods(value){
            this.searchLine = value;
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title))
        },

        clickHandler(){
            const value = searchLine.value;
            filterGoods(value);
        }
    },
    async created(){
        try{
            this.goods = await this.makeGETRequest('https://api.myjson.com/bins/1dzoea');
            this.filteredGoods = this.goods;
        } catch(err){
            console.error(err);
        }
        
    }
});