# eCommerce website built in AngularJS and Bootstrap, including custom CSS.

```
Installation instructions:

git clone repo
cd into folder
npm start

Testing:
npm test for Karma
npm run protractor for protractor.
```

```
As a User I can add a product to my shopping cart.

Steps:
1. Visit "http://localhost:8000/app/#/products"
2. Click Add to Basket
3. Product will be added to the cart
```

```
As a User I can remove a product to my shopping cart.

Steps:
1. Visit "http://localhost:8000/app/#/cart" or click on Cart in the navbar
2. Click remove
3. Product will be removed from the cart
```

```
As a User Ican view the totalprice for the products in my shopping cart.

In the navbar there is a total price figure which changes as you add items to the cart.

The total price figure is also displayed in the cart section of the app.
```

```
As a User Ican apply a voucher to my shopping cart.

In the cart section of the app, there is an apply discount text field with a submit button.

The codes are stored in a JSON file. To get discount, the codes are:

SUMMER5, SUMMER10, SUMMER15, HAPPYDAYS, DELOITTE. (Summer is my favourite season).
```

```
As a User I can view the total price for the products in my shopping cart with discounts applied.

Once the discount is applied, the total price in the navbar and cart section updates. I have presented it in currency format with angular filter feature.
```

```
As a User I am alerted when I apply an invalid voucher to my shopping cart.

If the discount code is invalid, the user is shown an error message below, likewise if the discount is valid, then they are shown a success message.
```

Please visit [Work](https://sleepy-basin-6579.herokuapp.com/home.html).

### Future developments
* Integrate a payment API, such as PayPal as I did for my Makers Academy final project.
* Create a native mobile app in Android or Swift. As I believe smartphone usage has increased and there is a demand for it.
* Use a SQL or NoSQL database to store the products. I have worked with Firebase, MongoDB and Postgres.
