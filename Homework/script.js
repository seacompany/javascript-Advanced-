'use strict';

const goods = [{
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
    }
];



const renderGoodsItem = (img, title, description, price) =>
    `<div class='goods-item'>
        <img>${img}</img>
        <h3>${title}</h3> 
        <p class='desc-text'>${description}</p>
        <p class='price-text'>${price} $</p> 
        <button class='buy-good'>Купить</button>
    </div>`;

const renderGoodsList = list => {
    const goodsList = list.map(item => renderGoodsItem(item.img, item.title, item.description, item.price));
    document.querySelector('.goods-list').innerHTML = goodsList.join(' ');
};

window.onload = () => {
    renderGoodsList(goods);
};