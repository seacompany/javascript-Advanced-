'use strict';

Vue.component('goods-list', {
    props: ['goods'],
    template: `
      <div class="goods-list">
        <goods-item v-for="good in goods"
        :key='good.id'
        :good="good"></goods-item>
      </div>
    `
});


Vue.component('goods-item', {
    props: ['good'],
    template: `
        <div class="goods-item">
            <h3>{{good.product_name}}</h3>
            <p class='price-text'>{{good.price}} $</p>
            <button class='buy-good'>Купить</button>
        </div>
    `
});

Vue.component('search', {
    data(){
        return {
            searchLine : ''
        }
    },
    template: `
        <div class="search">
            <form @submit.prevent="$emit('search', searchLine)"> 
                <input type="text" class="goods-search" v-model='searchLine'>
                <button class="search-button" type="submit">Искать</button>
            </form>
        </div>
    `
});

Vue.component('cart',{
    
    template: `
        <div class="cart">
            <button class='cart-button' >Корзина</button>
        </div>
    `
});
/*
Vue.component('cart-list',{
    template: `
        <div class="cart">
            <button class='cart-button'>Корзина</button>
        </div>
    `
});

Vue.component('cart-item',{
    template: `
        <div class="cart">
            <button class='cart-button' >Корзина</button>
        </div>
    `
});

*/
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        goodsInCart: [1],
        cartInfo: false,
        
    },

    computed:{
        toggleCart() {
            if (this.goodsInCart.length === 0) {
                return false;
            } else {
                return true;
            }
        }
    },

    methods: {
        
        filterGoods(value) {
            const regexp = new RegExp(value, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name))
        },

        
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

        makePostRequest(url, data) {
            const xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')

            xhr.send(data);

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

    },
    async created() {
        try {
            this.goods = await this.makeGETRequest('/catalogData');
            this.filteredGoods = this.goods;
        } catch (err) {
            console.error(err);
        }

    }
});