import {test} from '../Fixtures/fixtures';
import * as testdata from '../../testdata/test-data.json';
import { expect } from '@playwright/test';


test.describe('Validate Login page functinality', () => {
    test('Enter correct username and password', async ({ loginpage }) => {
        await test.step('Navigate to URL', async () => {
            await loginpage.navigateToUrl(testdata.URL);
        })
        await test.step('Enter username and password', async () => {
            await loginpage.doLogin(testdata.username,testdata.password);
        })
       
        await test.step('Validate Products title is available after successful login', async () => {
            await expect(loginpage.validate_login_success).toHaveText('Products');
        })
        
    })
    
})
