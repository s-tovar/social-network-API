const router = require('express').Router();

const { 
    getAllThought,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');

// GET all and POST at api/thoughts
router.route("/")
.get(getAllThought)
.post(createThought);

// GET one, PUT, & DELETE at api/thought/id
router.route("/:id")
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

//POST and DELETE for api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router;