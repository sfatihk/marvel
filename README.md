# MARVEL BOX π¦ΈββοΈπ¦ΈββοΈ

Website using marvel APIs. It lists Marvel's characters & their comics.

### π [Live Preview](https://marvelbox.netlify.app)

## Specification

#### System Specification

- Node: 14.17.6
- npm: 7.22.0

#### .env Variables

You need to Marvel Developer Account (https://developer.marvel.com)

- `REACT_APP_MARVEL_SERVER_URL` : Marvel api gateway url (https://gateway.marvel.com/v1/public)
- `REACT_APP_MARVEL_PUBLIC_KEY` : Marvel developer account public key
- `REACT_APP_MARVEL_PRIVATE_KEY` : Marvel developer account private key

## Setup Steps

Install package with `yarn`

Copy example environment `cp .env.example .env`

Fill blank fields on `.env`

Start the project with `yarn start`

Test the project `yarn test`

## Structure

βββββββ **assets** : images & styles resources

βββββββ **components** : pure components

βββββββ **config** : api configurations

βββββββ **containers** : complex components with store access

βββββββ **layout** : layout components & template

βββββββ **screens** : main screens

βββββββ **services** : requests and api services

βββββββ **store** : store, reducers & state management config

βββββββ **types** : typescript type definition

βββββββ **utils** : other utilized functions
