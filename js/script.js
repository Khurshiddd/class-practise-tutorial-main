window.addEventListener('DOMContentLoaded', () => {
    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector, ...classes){
            this.src = src,
            this.alt = alt,
            this.title = title,
            this.descr = descr,
            this.price = price,
            this.classes = classes,
            this.parent =  document.querySelector(parentSelector)
            this.transfer = 11.000;
            this.changToUSD()
        }
        changToUSD() {
            this.price = this.price * this.transfer
        }
        render() {
            const element = document.createElement('div')
            if (this.classes.length === 0) {
                this.classes = 'menu__item'
                element.classList.add(this.classes)
            }else {
                this.classes.forEach(className => element.classList.add(className))
            }
            element.innerHTML = `
            <div class="menu__item">
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> $</div>
                </div>
            </div>
            `
            this.parent.append(element)
        }
    }
    new MenuCard(
        'img/tabs/audi.jpg',
        'Audi',
        'Audi',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero soluta quia molestias fugit dolorem voluptatem explicabo ipsam tempore, reprehenderit iure accusamus obcaecati in!',
        1000000,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/bmw.jpg',
        'BMW',
        'BMW',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero soluta quia molestias fugit dolorem voluptatem explicabo ipsam tempore, reprehenderit iure accusamus obcaecati in!',
        100000,
        '.menu .container'
    ).render()
    new MenuCard(
        'img/tabs/merc.jpg',
        'Mers',
        'Mers',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus vero soluta quia molestias fugit dolorem voluptatem explicabo ipsam tempore, reprehenderit iure accusamus obcaecati in!',
        100800,
        '.menu .container'
    ).render()
})