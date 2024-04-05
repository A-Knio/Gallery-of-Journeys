const db = require ('../config/connection');
const { Gallery } = require ('../models');
const cleanDB = require ('./cleanDB');

const galleryData = require ('./galleryData.json');

db.once ('open', async () => {
    await cleanDB ('Gallery', 'galleries');
    
    await Gallery.insertMany (galleryData);
    
    console.log ('Galleries seeded!');
    process.exit (0);
    });
