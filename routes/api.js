const db = require('../dbConnect/connect');
const router = require('express').Router();

// test the API
router.route('/test').get((req, res) => {
    res.send('Contaz API is working perfectly ...');
});

// get all contacts
router.get('/contacts', async (req, res) => {
    let db_query = 'SELECT * FROM t_contact';
    await db.query(db_query, (err, result) => {
        if(!err)
            res.json(result);
        else
            throw err;
    });
});

// get contact by name
router.get('/contacts/:name', async function(req, res){
    let db_query = `SELECT * FROM t_contact WHERE name = ${req.params.name}`;
    await db.query(db_query, (err, result) => {
        if(!err)
            res.json(result);
        else
            throw err;
    });
});

// add a contact
router.post('/contacts', async (req, res) => {
    let db_query = 'INSERT INTO t_contact SET ?';
    const contact_data = {
        id: req.body.id,
        nom: req.body.nom,
        prenom: req.body.prenom,
        type_phone_one: req.body.type_phone_one,
        phone_one: req.body.phone_one,
        type_phone_two: req.body.type_phone_two,
        phone_two: req.body.phone_two,
        email: req.body.email,
        profession: req.body.profession,
        work_place: req.body.work_place,
    };

    await db.query(db_query, contact_data, (err, result) => {
        if(!err)
            res.json(result)
        else
            throw err;
    });
});

// edit a contact

// delete a contact
router.delete('/contacts/:id', (req, res) => {
    let db_query =  `DELETE FROM t_contact WHERE id ${req.params.id}`
    await db.query(db_query, (err, result) => {
        if(!err)
            res.json(result)
        else
            throw err;
    });
})

module.exports = router;