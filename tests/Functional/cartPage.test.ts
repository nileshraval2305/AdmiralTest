import { test } from '../Fixtures/fixtures';
import * as testdata from '../../testdata/test-data.json';
import { expect } from '@playwright/test';


test.describe('Validate Cart Page functionality', () => {
    test('Validate item can successfully added in to Add to cart', async ({ loginpage, homepage,cartpage }) => {

        await test.step('Navigate to URL', async () => {
            await loginpage.navigateToUrl(testdata.URL);
        })
        await test.step('Enter username and password', async () => {
            await loginpage.doLogin(testdata.username, testdata.password);
        })

        await test.step('Validate Products title is available after successful login', async () => {
            await expect(loginpage.validate_login_success).toHaveText('Products');
        })
        await test.step('Getting total number of products from list', async () => {
            expect(await homepage.getProductlist()).toEqual(testdata.products)

        })
        await test.step('Select item is added in to cart', async () => {
            await homepage.addtoCart();

        })
        await test.step('Validate Add to cart after add an item', async () => {
            await homepage.validateAddtoCart();
        })
        
        await test.step('Click on Add to cart Button', async () => {
            await homepage.addtoCart_Click();
        })

        await test.step('Validate item name is cart', async () => {
            await expect(cartpage.inventory_ItemName).toHaveText(testdata.selectProduct)
        })

        await test.step('Validate item price is cart', async () => {
            await expect(cartpage.inventory_ItemPrice).toHaveText(testdata.Productprice)
        })
    })

})