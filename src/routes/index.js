const { Router } = require('express');
const router = Router();    

router.get('/test', (req, res) => {
    const data = {
        "name": "Jhonny",
        "website": "jhonnys"
    }
    res.json(data);
});


module.exports = router;