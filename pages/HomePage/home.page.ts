import { Page, Locator } from '@playwright/test';
import * as testdata from "../../testdata/test-data.json";

export default class HomePage {
    readonly page: Page;
    readonly productList: Locator;
    readonly shoppingCart: Locator;
    readonly totalItems: Locator;
    readonly validateCarticon:Locator;

    constructor(page: Page) {

        this.page = page;
        this.productList = page.locator(".inventory_item_description a");
        this.shoppingCart = page.locator('#shopping_cart_container');
        this.totalItems = page.locator(".inventory_item");
        this.validateCarticon = page.locator('.shopping_cart_badge');
    }

    async getProductlist() {
        // await this.page.waitForSelector('.inventory_item_description');
        await this.productList.first().waitFor();
        const total = await this.productList.allTextContents();
        console.log(total)
        return total;
    }
    async addtoCart() {
        await this.page.waitForSelector('.inventory_item_description');
        await this.productList.first().waitFor();
        const count = await this.totalItems.count();
        console.log(count)
        for (let i = 0; i < count; ++i) {

            if (await this.totalItems.locator(".inventory_item_name").nth(i).textContent() === testdata.selectProduct) {
                await this.totalItems.nth(i).locator('.btn_primary').click();
                break;
            }
        }

    }

    async validateAddtoCart() {
        // await this.page.waitForSelector('.inventory_item_description');
        await this.validateCarticon.isVisible();
    }
    async addtoCart_Click() {
        // await this.page.waitForSelector('.inventory_item_description');
        await this.shoppingCart.click()
    }

}