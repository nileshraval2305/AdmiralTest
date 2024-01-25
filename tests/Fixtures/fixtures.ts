import { test as basetest} from '@playwright/test';


import LoginPage from '../../pages/Login/login.page';
import HomePage from '../../pages/HomePage/home.page';
import CartPage from '../../pages/Cart/cart.page';

type pages = {
	
	loginpage: LoginPage;
    homepage:HomePage;
    cartpage:CartPage;
}

const testpages = basetest.extend<pages>({

	
	 async loginpage({page}, use) {
		await use(new LoginPage(page));
	},
	
    async homepage({page}, use) {
		await use(new HomePage(page));
	},
    async cartpage({page}, use) {
		await use(new CartPage(page));
	}
});
export const test = testpages;
