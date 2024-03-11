
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { IssueController } = require('./issue/issue.controller');
const { IssueRepository } = require('./issue/issue.repository');
const { IssueService } = require('./issue/issue.service');

require('dotenv').config()

const PORT = process.env.PORT || 3000;
const WEB_ADDRESS = process.env.WEB_ADDRESS || 'https://localhost:3001';
const ISSUE_FILENAME = 'issues';

async function setup(app) {
  const issueRepository = new IssueRepository(ISSUE_FILENAME);
  const issueService = new IssueService({ issueRepository });
  const issueController = new IssueController(issueService);

  app.use('/api/issues', issueController.getRouter());
  
  // check server health
  app.use('/', (_, res) => {
    return res.status(200).json({ success: 'ok' })
  })
}

async function createApp() {
  const app = express();

  app.set('port', PORT);
  app.use(bodyParser.json());
  app.use(cors({
    origin: WEB_ADDRESS,
    optionsSuccessStatus: 200,
  }));
  
  await setup(app);

  return app;
}

module.exports = {
  createApp
}