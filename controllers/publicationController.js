const Publication = require('../models/publicationModel');

exports.getAllPublication = (req, res) => {
    Publication.getAll((err, publications) => {
    if (err) res.status(500).send(err);
    res.json(publications);
  });
};

exports.createPublication = (req, res) => {
    Publication.create(req.body, (err, result) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Publication created successfully', id: result.insertId });
  });
};

exports.getPublicationById = (req, res) => {
    Publication.getById(req.params.id, (err, publication) => {
    if (err) res.status(500).send(err);
    res.json(publication);
  });
};

exports.updatePublication = (req, res) => {
    Publication.update(req.params.id, req.body, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Publication updated successfully' });
  });
};

exports.deletePublication = (req, res) => {
    Publication.delete(req.params.id, (err) => {
    if (err) res.status(500).send(err);
    res.json({ message: 'Publication deleted successfully' });
  });
};