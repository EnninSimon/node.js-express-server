const express = require('express');
const router = express.Router();
const { getPeople, createPeople, createPersonPostman, updatePerson, deletePerson } = require('../controllers/people')

// router.get('/', getPeople)
// router.post('/', createPeople)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

router.route('/').get(getPeople).post(createPeople)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router;