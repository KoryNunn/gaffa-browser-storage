# gaffa-browser-storage

browser storage action for [gaffa](https://github.com/gaffa-tape/gaffa-js).

## Install:

    npm i gaffa-browser-storage

## Add to gaffa:

    var BrowserStorage = require('gaffa-browser-storage');

    gaffa.regeisterConstructor(BrowserStorage);

## Usage:

    var browserStorage = new BrowserStorage();
    browserStorage.source.binding = '[value]';
    browserStorage.target.value = 'storageKey';

    // Assign the browser-storage action to be triggered by another viewItem

# API

## Properties (instanceof Gaffa.Property)

### source (get, set)

The data to browser-storage

### target (get, set)

The location to browser-storage the data

### method (get)

Whether to get from storage, set to it, or remove whats at the given key.

### type (get) default: 'local'

local or session.

### cleans (get) default: false

Whether to mark the target model location as clean.