import {test} from '../Fixtures/fixtures';
import * as testdata from '../../testdata/test-data.json';
import { expect } from '@playwright/test';

test.describe('Validate Home page functinality', () => {
    test('Validate total items in list', async ({ loginpage,homepage }) => {
              
        await test.step('Navigate to URL', async () => {
            await loginpage.navigateToUrl(testdata.URL);
        })
        await test.step('Enter username and password', async () => {
            await loginpage.doLogin(testdata.username,testdata.password);
        })
       
        await test.step('Validate Products title is available after successful login', async () => {
            await expect(loginpage.validate_login_success).toHaveText('Products');
        })
        await test.step('Getting total number of products from list', async () => {
             expect(await homepage.getProductlist()).toEqual(testdata.products)

        })
    })
    
    test('Using the Add to Cart button, confirm that an item has been added.', async ({ loginpage,homepage }) => {
              
        await test.step('Navigate to URL', async () => {
            await loginpage.navigateToUrl(testdata.URL);
        })
        await test.step('Enter username and password', async () => {
            await loginpage.doLogin(testdata.username,testdata.password);
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
    })

})