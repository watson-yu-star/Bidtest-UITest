import { expect, test } from '@playwright/test';
import {users} from '../test-data/users.json'

test('register account',async({request})=>{
   
     for(let i=0;i<users.length;i++){
        let newUser = {
            name: 'bidtestuser',
            email: `bidtest${i}@test.com`,
            password: 'password123',
         };

          const response = await request.post('http://localhost:4000/auth/register', {
               data: newUser,
            });
          if(response.status() == 201){
            console.log(newUser.email);
            console.log('account created');
          }else if(response.status() == 409){
            console.log(newUser.email);
            console.log('existing account');
          }else{
            console.log('error');
            expect(response.status()).toEqual(200);
          }

     }
      
});