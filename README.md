# MARVEL BOX 🦸‍♂️🦸‍♀️

Website using marvel APIs. It lists Marvel's characters & their comics.

### 👉 [Live Preview](https://marvelbox.netlify.app)

## Spesification

#### System Spesification

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

├────── **assets** : images & styles resources

├────── **components** : pure components

├────── **config** : api configurations

├────── **containers** : complex components with store access

├────── **layout** : layout components & template

├────── **screens** : main screens

├────── **services** : requests and api services

├────── **store** : store, reducers & state management config

├────── **types** : typescript type definition

├────── **utils** : other utilized functions
