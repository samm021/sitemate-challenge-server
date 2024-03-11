const { Repository } = require('../libs/repository');
const { errorCode } = require('../libs/error');

class IssueRepository extends Repository {
  constructor(fileName) {
    super(fileName)
  }

  async get() {
    const issues = await this.read();
    return issues;
  }

  async save(issue) {
    const savedIssue = {
      ...issue,
      id: crypto.randomUUID(),
    };

    const issues = await this.read();

    await this.write([...issues, savedIssue]);

    return savedIssue;
  };

  async findOne(id) {
    const issues = await this.read();
    const issue = issues.find(a => a.id == id);
    if (!issue) {
      throw new Error(errorCode.ISSUE_NOT_FOUND);
    }

    return issue;
  }

  async update(id, issue) {
    const issues = await this.read();
    const index = issues.findIndex(a => a.id == id);
    if (index == -1) {
      throw new Error(errorCode.ISSUE_NOT_FOUND);
    }

    const savedIssue = {
      ...issue,
      id,
    }
    await this.write(issues.toSpliced(index, 1, savedIssue));

    return savedIssue;
  }

  async delete(id) {
    const issues = await this.read();
    const index = issues.findIndex(a => a.id == id);
    if (index == -1) {
      throw new Error(errorCode.ISSUE_NOT_FOUND);
    }

    await this.write(issues.toSpliced(index, 1));
    return;
  }
}

module.exports = {
  IssueRepository
}