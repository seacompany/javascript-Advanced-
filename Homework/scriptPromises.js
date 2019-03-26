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
        <h3>{{good.title}}</h3>
        <p class='desc-text'>{{good.description}}</p>
        <p class='price-text'>{{good.price}} $</p>
        <button class='buy-good'>Купить</button>
    </div>
    `
});


const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        isVisibleCart: false
    },

    methods: {
        filterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.goods.filter(good => regexp.test(good.title))
        },

        toggleCartVisibility() {
            this.isVisibleCart = !this.isVisibleCart;
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

    },
    async created() {
        try {
            this.goods = await this.makeGETRequest('https://api.myjson.com/bins/1dzoea');
            this.filteredGoods = this.goods;
        } catch (err) {
            console.error(err);
        }

    }
});