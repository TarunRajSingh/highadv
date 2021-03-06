/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/hotels              ->  index
 * POST    /api/hotels              ->  create
 * GET     /api/hotels/:id          ->  show
 * PUT     /api/hotels/:id          ->  update
 * DELETE  /api/hotels/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Hotel from './hotel.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Hotels
export function index(req, res) {
  return Hotel.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Hotel from the DB
export function show(req, res) {
  return Hotel.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Hotel in the DB
export function create(req, res) {
  return Hotel.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Hotel in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Hotel.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Hotel from the DB
export function destroy(req, res) {
  return Hotel.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

//custom function to find hotel id of Email
export function showid(req, res) {
  return Hotel.findOne({UserEmail:req.params.UserEmail}).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}
