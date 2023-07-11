## Overview

This is a repo to test Authorize.net's SDK functions to complete transactions and to store sensitive user info in their PCI-approved CIM database (customer info manager).

The code is written in a basic React frontend bootstrapped by Next.js.
The backend is a node-express server written in typescript.

1. First run `npm i` to install dependencies
2. To spin up front-end, run `npm run dev`.
3. To spin up backend, first fill in `.env` values based on the `.env.sample` file. Then run `npx nodemon server/index.ts`

Now you can call API by clicking UI button on localhost server in browser.

## Tasks to get Done

1. Implemment [Charge Credit Card](https://developer.authorize.net/api/reference/index.html#payment-transactions-charge-a-credit-card:~:text=Payment%20Transactions%20page.-,Charge%20a%20Credit%20Card,-Use%20this%20method) [DONE]
2. Implement [Create Customer Profile](https://developer.authorize.net/api/reference/index.html#customer-profiles-create-customer-profile:~:text=Create%20Customer%20Profile) - Dev [Guide](https://developer.authorize.net/api/reference/features/customer-profiles.html)
3. Add/Delete [Payment Profile](https://developer.authorize.net/api/reference/index.html#customer-profiles-create-customer-payment-profile:~:text=RESPONSE%20FIELD%20DESCRIPTION-,Create%20Customer%20Payment%20Profile,-Use%20this%20function) to CustomerProfile
4. Add/Delete [Shipping Profile](https://developer.authorize.net/api/reference/index.html#customer-profiles-create-customer-shipping-address:~:text=RESPONSE%20FIELD%20DESCRIPTION-,Create%20Customer%20Shipping%20Address,-Use%20this%20function) to CustomerProfile
5. Implement [CHARGE A CUSTOMER PROFILE](https://developer.authorize.net/api/reference/index.html#payment-transactions-charge-a-customer-profile:~:text=RESPONSE%20FIELD%20DESCRIPTION-,Charge%20a%20Customer%20Profile,-Use%20this%20method) to use secured PCI Customer-Info-Manager by authorize to issue a transaction by retrieving credit card info from their servers

![Graphic](/public/customerProfile.jpg)
