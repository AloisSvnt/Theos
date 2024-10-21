# Instructions pour le Projet AdonisJS - Theos

## Installation

```bash
git clone git@github.com:AloisSvnt/Theos.git
cd Theos
npm install
```

## Config :

##### 1. Create the .env from .env.exemple
```bash
cp .env.example .env
```
##### 2. Create the folder '/tmp'
```bash
mkdir tmp
```

## Migrations

```bash
node ace migration:run
```

## Server

```bash
npm run dev
```
