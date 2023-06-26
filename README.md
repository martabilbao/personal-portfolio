## Corresponding project(s): 

- P182_UI_inputs


## Env variables
Env variables that you want to use in next.js need to be prefixed with `NEXT_PUBLIC_`.

## Development

To run the development server:

```bash
npm run dev
```

## GraphQL

Each GraphQL query/mutation is defined in a separate file under `src/graphql/`.
To generate types and hooks, first set `HASURA_ADMIN_SECRET=` env variable with a hasura secret password, this is used to download database schema. Then run `npm run gen-types`
