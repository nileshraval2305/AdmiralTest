import { Page, Locator } from '@playwright/test';

export default class CartPage {
    readonly page: Page;
    readonly inventory_ItemName: Locator;
    readonly inventory_ItemPrice: Locator;


    constructor(page: Page) {
        this.page = page;
        this.inventory_ItemName = page.locator('.inventory_item_name');
        this.inventory_ItemPrice = page.locator('.inventory_item_price');



    }

   async getItemName()
   {
    await this.inventory_ItemName.textContent();
   }

   async getItemPrice()
   {
    await this.inventory_ItemPrice.textContent();
   }

}