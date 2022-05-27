# Flight Search

A privacy-first open source project to help people save money on flights. We 
look at alternative connecting flights from multiple providers and suggest 
nearby airports if there are savings.

# Stack

| name       | description           | location
| ---------- | --------------------- | ---------
| React      | DOM manipulation      | client
| Node       | server runtime        | server
| Express    | http routing          | server
| PostgreSQL | database              | server
| Next.js    | build system & server | client & server
| Nanoid     | unique ID generator   | client & server
| TypeScript | type verification     | client & server

# Requirements
- Node v18
- PostgreSQL v14

# Installation
1. Clone the repository.
   ```
   git clone git@github.com:Flight-Search/flightengine.git fly
   ```
2. Navigate to the project folder.
   ```
   cd fly
   ```
3. Install dependencies.
   ```bash
   npm i
   ```
4. Manage secrets.
   - Register for an Amadeus account at their [Developer Portal][DeveloperPortal].
   - Follow [these steps][SelfService] to obtain an `API key` and `API secret` for an app.
   - Visit [RapidAPI] and obtain an API key.
   - Create a `.env.ts` file in the project root with the following contents:
   ```typescript
   export const AMADEUS_KEY    = "YOUR API KEY GOES HERE"
   export const AMADEUS_SECRET = "YOUR API SECRET GOES HERE"
   export const RAPID_KEY      = "YOUR RAPID API KEY GOES HERE"
   ```
   > There is an entry in `.gitignore` that will prevent the `.env.ts` file from being committed.

[DeveloperPortal]: https://developers.amadeus.com
[SelfService]: https://developers.amadeus.com/get-started/get-started-with-self-service-apis-335
[RapidAPI]: https://rapidapi.com