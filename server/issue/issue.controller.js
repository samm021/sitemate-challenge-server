const { Router } = require('express');
const { handleError } = require('../libs/error');

class IssueController {
  _issueService;

  constructor(issueService) {
    this._issueService = issueService;
    this.router = Router();
    this.router.get('/:id', this.getById.bind(this));
    this.router.patch('/:id', this.patch.bind(this));
    this.router.delete('/:id', this.delete.bind(this));
    this.router.get('/', this.get.bind(this));
    this.router.post('/', this.post.bind(this));
  }

  getRouter() {
    return this.router;
  }

  async get(_, res) {
    try {
      const issues = await this._issueService.get();
      return res.status(201).json(issues);
    } catch (err) {
      return handleError(res, err);
    }
  }

  async post(req, res) {
    try {
      const issue = await this._issueService.create(req.body);
      return res.status(201).json(issue);
    } catch (err) {
      return handleError(res, err);
    }
  }

  async getById(req, res) {
    try {
      const issue = await this._issueService.findOne(req.params.id);
      return res.status(200).json(issue);
    } catch (err) {
      return handleError(res, err);
    }
  }

  async patch(req, res) {
    try {
      const issue = await this._issueService.update(req.params.id, req.body);
      return res.status(200).json(issue);
    } catch (err) {
      return handleError(res, err);
    }
  }

  async delete(req, res) {
    try {
      await this._issueService.delete(req.params.id);
      return res.status(200).json({ id: req.params.id });
    } catch (err) {
      return handleError(res, err);
    }
  }
}

module.exports = {
  IssueController
}