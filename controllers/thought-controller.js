const { Thought, User } = require('../models');

const thoughtController = {
    getAllThought(req, res) { //get all thoughts
        Thought.find({})
        .then(dbThoughtData => res.json(dbThoughtData))
        .catch(err => {
            console.log(err);
            res.sendStatus(400);
        });
    },
}