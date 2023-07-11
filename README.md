This is a repo to test Authorize.net's SDK functions to complete transactions and to store user information in

The code is written in a basic React frontend bootstrapped by Next.js.
The backend is a node-express server written in typescript.

1. First run `npm i` to install dependencies
2. To spin up front-end, run `npm run dev`.
3. To spin up backend, first fill in `.env` values based on the `.env.sample` file. Then run `npx nodemon server/index.ts`

Now you can call API by clicking UI button on localhost server in browser.

## Tasks to get Done

- Charge Credit Card [DONE]
- Create Customer Profile (next to do)
- Add/Delete Payment Profile to CustomerProfile
- Add/Delete Shipping Profile to CustomerProfile
- Implement CHARGE A CUSTOMER PROFILE to use secured PCI Customer-Info-Manager by authorize to issue a transaction by retrieving credit card info from their servers
