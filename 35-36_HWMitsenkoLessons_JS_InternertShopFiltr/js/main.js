let doc = document;

let products = [
    {art: '001', foto: 'Eshli_gost_F', titel: 'модульна система', titel2: 'вітальня',  name: 'Ешлі', manufacturer: 'МФ Світ Меблів', price: '2500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '002', foto: 'Eshli_gost_F1', titel: 'модульна система', titel2: 'вітальня', name: 'Ешлі', manufacturer: 'МФ Світ Меблів', price: '2450', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '003', foto: 'LAZIO-with-bar', titel: 'модульна система', titel2: 'вітальня', name: 'Лаціо з баром', manufacturer: 'МФ Світ Меблів', price: '2500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '004', foto: 'LAZIO-with-chestofdravers-2d-1,8-light-provence', titel: 'модульна система', titel2: 'вітальня', name: 'Лаціо', manufacturer: 'МФ Світ Меблів', price: '2500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '005', foto: 'LAZIO-with-chestofdrawers-2d-1,3', titel: 'модульна система', titel2: 'вітальня', name: 'Лаціо', manufacturer: 'МФ Світ Меблів', price: '21500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '006', foto: 'LAZIO-with-chestofdrawers-2d-1,8-(2)', titel: 'модульна система', titel2: 'вітальня', name: 'Лаціщ', manufacturer: 'МФ Світ Меблів', price: '21500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '007', foto: 'LAZIO-with-tv-chestofdrawers-1,8', titel: 'модульна система', titel2: 'вітальня', name: 'Лаціо', manufacturer: 'МФ Світ Меблів', price: '2500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '008', foto: 'LIVORNO-with-chestofdravers-2d-1,3', titel: 'модульна система', titel2: 'вітальня', name: 'Ліворно', manufacturer: 'МФ Світ Меблів', price: '21500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '009', foto: 'LIVORNO-with-chestofdravers-2d-1,7-light-provence', titel: 'модульна система', titel2: 'вітальня', name: 'Ешлі', manufacturer: 'МФ Світ Меблів', price: '2500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '010', foto: 'Mod_Bianko_Grafit2', titel: 'модульна система', titel2: 'вітальня', name: 'Бянко', manufacturer: 'МФ Світ Меблів', price: '12500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '011', foto: 'Mod_Erica_01_Grafit', titel: 'модульна система', titel2: 'вітальня', name: 'Еріка', manufacturer: 'МФ Світ Меблів', price: '12500', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '012', foto: 'Mod_Erica_01_Wh_HD', titel: 'модульна система', titel2: 'вітальня', name: 'Еріка', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '013', foto: 'Mod_Erica_02_Grafit_HD', titel: 'модульна система', titel2: 'вітальня', name: 'Еріка', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '014', foto: 'Mod_Erica_05_Wh', titel: 'модульна система', titel2: 'вітальня', name: 'Еріка', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '015', foto: 'PARMA-with-chestofdravers-3d', titel: 'модульна система', titel2: 'вітальня', name: 'Парма', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '016', foto: 'PARMA-with-TV-chestofdravers-1,5', titel: 'модульна система', titel2: 'вітальня', name: 'Парма', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '017', foto: 'Praga_2_HR', titel: 'модульна система', titel2: 'вітальня', name: 'Прага', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '018', foto: 'Praga_HR', titel: 'модульна система', titel2: 'вітальня', name: 'Прага', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '019', foto: 'Rio_01_final', titel: 'модульна система', titel2: 'вітальня', name: 'Ріо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '020', foto: 'Rio_3_Black', titel: 'модульна система', titel2: 'вітальня', name: 'Ріо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '021', foto: 'Rio_stol', titel: 'модульна система', titel2: 'вітальня', name: 'Ріо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '022', foto: 'SELINA-bedroom-maple', titel: 'модульна система', titel2: 'спальня', name: 'Селіна', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '023', foto: 'SELINA-kidroom-maple-01', titel: 'модульна система', titel2: 'дитяча', name: 'Селіна', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '024', foto: 'SELINA-kidroom-maple-02', titel: 'модульна система', titel2: 'дитяча', name: 'Селіна', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '025', foto: 'Tereza', titel: 'модульна система', titel2: 'вітальня', name: 'Тереза', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '026', foto: 'Treviso (2)', titel: 'модульна система', titel2: 'вітальня', name: 'Тревізо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '027', foto: 'Treviso (3)', titel: 'модульна система', titel2: 'вітальня', name: 'Тревізо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '028', foto: 'Treviso_HR', titel: 'модульна система', titel2: 'вітальня', name: 'Тревізо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '029', foto: 'VIVALDI-Gostinaya-pino', titel: 'модульна система', titel2: 'вітальня', name: 'Вівальді', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '030', foto: 'VIVALDI-pino', titel: 'модульна система', titel2: 'вітальня', name: 'Вівальді', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '031', foto: 'VIVALDI-pino-nut', titel: 'модульна система', titel2: 'вітальня', name: 'Вівальді', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '032', foto: 'Б_янко 1', titel: 'модульна система', titel2: 'вітальня', name: 'Бянко', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '033', foto: 'Б_янко 3', titel: 'модульна система', titel2: 'вітальня', name: 'Бянко', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '034', foto: 'Валеріо_модульна', titel: 'модульна система', titel2: 'вітальня', name: 'Валеріо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '035', foto: 'Валеріо_модульна_02', titel: 'модульна система', titel2: 'вітальня', name: 'Валеріо', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '036', foto: 'Валеріо_спальня', titel: 'модульна система', titel2: 'вітальня', name: 'Валеріо', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '037', foto: 'Вероника', titel: 'модульна система', titel2: 'вітальня', name: 'Вероніка', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '038', foto: 'Кантрі вітальня біла', titel: 'модульна система', titel2: 'вітальня', name: 'Кантрі', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '039', foto: 'Кантрі вітальня Каштан', titel: 'модульна система', titel2: 'вітальня', name: 'Кантрі', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '040', foto: 'Кантрі Кабінет Білий 2021', titel: 'модульна система', titel2: 'кабінет', name: 'Кантрі', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '041', foto: 'Кантрі Кабінет Каштан 2021', titel: 'модульна система', titel2: 'кабінет', name: 'Кантрі', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '042', foto: 'Кантрі прихожа біла', titel: 'модульна система', titel2: 'передпокій', name: 'Кантрі', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '043', foto: 'Крістель Детская', titel: 'модульна система', titel2: 'дитяча', name: 'Крістель', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '044', foto: 'Крістель Кабинет', titel: 'модульна система', titel2: 'дитяча', name: 'Крістель', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '045', foto: 'Лофт 2020 дитяча', titel: 'модульна система', titel2: 'дитяча', name: 'Лофт', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '046', foto: 'Лофт, дитяча', titel: 'модульна система', titel2: 'дитяча', name: 'Лофт', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '047', foto: 'Омега_01', titel: 'модульна система', titel2: 'вітальня', name: 'Омега', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '048', foto: 'Омега_02', titel: 'модульна система', titel2: 'вітальня', name: 'Омега', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '049', foto: 'Палермо 2020 дитяча широка', titel2: 'дитяча', titel: 'модульна система', name: 'Палермо', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '050', foto: 'Палермо 2020 дитяча', titel: 'модульна система', titel2: 'дитяча', name: 'Палермо', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '051', foto: 'Палермо 2020 спальня широка', titel: 'модульна система', titel2: 'спальня', name: 'Палермо', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '052', foto: 'Прага-01', titel: 'модульна система', titel2: 'вітальня', name: 'Прага', manufacturer: 'МФ Світ Меблів', price: '12400', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '053', foto: 'Прага-02', titel: 'модульна система', titel2: 'вітальня', name: 'Прага', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'},
    {art: '054', foto: 'Призма', titel: 'модульна система', titel2: 'вітальня', name: 'Призма', manufacturer: 'МФ Світ Меблів', price: '24000', currency: 'грн.', cat: 'корпусні меблі'}  
];
let div = doc.createElement('div');
div.innerHTML = '';
div.className = 'showcase';
let container = doc.querySelector('.container');
container.appendChild(div);
let divProd = doc.createElement('div');
div.innerHTML = '';
divProd.className = 'produkts';
let divShowcase = doc.querySelector('.showcase');
divShowcase.appendChild(divProd);
let divProduct = doc.querySelector('.produkts');
let divF = doc.createElement('div');
divF.className = 'filtr';
divShowcase.appendChild(divF);
let filtr = doc.querySelector('.filtr');
let form = doc.createElement('form');
form.name = 'filter';
filtr.appendChild(form);
let formFilter = doc.forms.filter;

let productHtml = products.map(function(product){
    let productHtml = 
    `
    <div class="produkt">
    <div class="produkt__foto">
        <div class="foto">
            <img src="img/modular_systems/${product.foto}.jpg" alt="#">
        </div>
        <div class="icon">
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
            <i class="fas fa-balance-scale"></i>
        </div>
    </div>
    <div class="produkt__name">
        <div class="name">${product.titel} ${product.titel2} ${product.name}</div>
        <div class="art">артикул: ${product.art}</div>
    </div>
    <div class="produkt__price">
    ${product.price} ${product.currency}
    </div>
    </div>
`;
return productHtml;
})
productHtml.forEach(function(htmlElement){
    divProduct.insertAdjacentHTML('beforeend', htmlElement);
});
 
createFilter(products, 'titel2', 'selecttitel2', formFilter, 'Фільтр по виду');
createFilter(products, 'name', 'selectName', formFilter, 'Фільтр по назві');
createFilter(products, 'price', 'selectPrise', formFilter, 'Фільтр по ціні');


function createFilter(arr, key, selectName, form, selectTittel){
        let items = getUniq(key, arr);
        let selectItems = createSelect(items, selectName, selectTittel);
        form.insertAdjacentHTML('beforeend', selectItems);
}

function createSelect(optionsArr, selectName, selectTittel){
        let optionsItems = '';
        optionsArr.forEach(function(item){
                optionsItems += `<option value="${item}">${item}</option>`
        })
        let select =
        `
        <p class="select_tittel">${selectTittel}</p>
        <select name="${selectName}" id="">
                ${optionsItems}
        </select>
        `;
        return select;
}


function getUniq(key, sourceArr){
        let arr = [];
        sourceArr.forEach(function(item) {
                if (arr.indexOf(item[key]) === -1){
                        arr.push(item[key]);
                }
        });
        return arr
}

let inputRange = 
`
<input type="range" id="slider"  min="2000" max="25000" step="200">
<input type="text" id="valueSlider" value="">

`;
formFilter.insertAdjacentHTML('beforeend', inputRange);

//эта функция добавляет значение слайдера на инпут в инпуте range написать oninput="valueRange()"
/*function valueRange() {
    let slider = document.getElementById('slider'); //- это ползунок
    let valueSlider = document.getElementById('valueSlider'); // - input со значением
    valueSlider.value = slider.value;
};*/
console.log(formFilter[4]);
console.log(valueSlider.value)

formFilter[3].oninput = function(){
    valueSlider.value = slider.value;
    let valueInput = this.value;
    console.log(valueInput);
    let findСhild = doc.getElementsByClassName('produkt');
    //console.log(findСhild);
    while (findСhild[0]) {
            findСhild[0].parentNode.removeChild(findСhild[0]);
    }
    let resFilter = products.filter(function(item) {
            console.log(item.price);
            if (+item.price > +valueInput) {
                return true;
            };
            
            divProduct.innerHTML += 
            `
            <div class="produkt">
                <div class="produkt__foto">
                    <div class="foto">
                        <img src="img/modular_systems/${item.foto}.jpg" alt="#">
                    </div>
                    <div class="icon">
                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-balance-scale"></i>
                    </div>
                </div>
                <div class="produkt__name">
                    <div class="name">${item.titel} ${item.titel2} ${item.name}</div>
                    <div class="art">артикул: ${item.art}</div>
                </div>
                 <div class="produkt__price">
                ${item.price} ${item.currency}
                </div>
            </div>
            `;
    });

};

formFilter[0].oninput = function(){
    let valueInput = this.value;
    console.log(valueInput);
    let findСhild = doc.getElementsByClassName('produkt');
    console.log(findСhild);
    while (findСhild[0]) {
            findСhild[0].parentNode.removeChild(findСhild[0]);
    }
    let resFilter = products.filter(function(item) {
            //console.log(item);
            if (item.titel2 != valueInput) {
                    return true;
            };
            divProduct.innerHTML += 
            `
            <div class="produkt">
                <div class="produkt__foto">
                    <div class="foto">
                        <img src="img/modular_systems/${item.foto}.jpg" alt="#">
                    </div>
                    <div class="icon">
                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-balance-scale"></i>
                    </div>
                </div>
                <div class="produkt__name">
                    <div class="name">${item.titel} ${item.titel2} ${item.name}</div>
                    <div class="art">артикул: ${item.art}</div>
                </div>
                 <div class="produkt__price">
                ${item.price} ${item.currency}
                </div>
            </div>
            `;
    });
}
formFilter[1].oninput = function(){
    let valueInput = this.value;
    console.log(valueInput);
    let findСhild = doc.getElementsByClassName('produkt');
    console.log(findСhild);
    while (findСhild[0]) {
            findСhild[0].parentNode.removeChild(findСhild[0]);
    }
    let resFilter = products.filter(function(item) {
            //console.log(item);
            if (item.name != valueInput) {
                    return true;
            };
            divProduct.innerHTML += 
            `
            <div class="produkt">
                <div class="produkt__foto">
                    <div class="foto">
                        <img src="img/modular_systems/${item.foto}.jpg" alt="#">
                    </div>
                    <div class="icon">
                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-balance-scale"></i>
                    </div>
                </div>
                <div class="produkt__name">
                    <div class="name">${item.titel} ${item.titel2} ${item.name}</div>
                    <div class="art">артикул: ${item.art}</div>
                </div>
                 <div class="produkt__price">
                ${item.price} ${item.currency}
                </div>
            </div>
            `;
    });
}
formFilter[2].oninput = function(){
    let valueInput = this.value;
    console.log(valueInput);
    let findСhild = doc.getElementsByClassName('produkt');
    console.log(findСhild);
    while (findСhild[0]) {
            findСhild[0].parentNode.removeChild(findСhild[0]);
    }
    let resFilter = products.filter(function(item) {
            //console.log(item);
            if (item.price != valueInput) {
                    return true;
            };
            divProduct.innerHTML += 
            `
            <div class="produkt">
                <div class="produkt__foto">
                    <div class="foto">
                        <img src="img/modular_systems/${item.foto}.jpg" alt="#">
                    </div>
                    <div class="icon">
                     <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                        <i class="fas fa-balance-scale"></i>
                    </div>
                </div>
                <div class="produkt__name">
                    <div class="name">${item.titel} ${item.titel2} ${item.name}</div>
                    <div class="art">артикул: ${item.art}</div>
                </div>
                 <div class="produkt__price">
                ${item.price} ${item.currency}
                </div>
            </div>
            `;
    });
}