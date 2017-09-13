Store.factory('Order',  ["$http", function($http) {
  this.globalDiscount=7;
  this.purchases = [
    {
      id:0,
      name: "Телефон",
      price: 100,
      discount: 0
    }, {
      id:1,
      name: "Магнитофон",
      price: 200,
      discount: 0
    }, {
      id:2,
      name: "Миелофон",
      price: 400,
      discount: 0
    }
  ];

    this.add = function (newItem) {
      this.purchases.push (newItem);
      this.update();
    }

    this.update = function(discount){
      if(arguments.length===1){
        this.globalDiscount=discount;
      }

      var prods = this.purchases; // масиив товаров
      var sum = 0; //сумма всех товаров до скидки
      var globDis = this.globalDiscount; //Глобальная скидка
      var localDis;//локальная скидка
      var SumLocalDis = 0;//сумма локальных скидок
      var remainDis;//отсаток скидки
      var expensPrice = 0;//наибольшая цена
      var expenstEl; //Номер наиболее дорогого товара

      for (var num in prods) {//подсчет всей суммы товаров до скидки
        sum += prods[num].price;
      }
      if(sum<globDis){//На случай если скидка слишком большая
        for (var num in prods) {
          prods[num].discount=prods[num].price;
        }
      }else{
        for (var num in prods) {//подсчет локальных скидок
          price= prods[num].price;
          if(expensPrice < price) {//Проверка на наибольшую цену
            expensPrice=price;
            expenstEl=num;
          }
          localDis=Math.round(price/sum*globDis);
          prods[num].discount=localDis;
          SumLocalDis+=localDis;
        }
        remainDis=globDis-SumLocalDis;//отсаток скидки
        this.purchases[expenstEl].discount+=remainDis//добавление отсатка скидки
      }
    }

    return {
      globalDiscount: this.globalDiscount,
      purchases: this.purchases,
      add: this.add,
      update: this.update,
    };

}]);