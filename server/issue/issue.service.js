class IssueService {
  _issueRepository;

  constructor(args) {
    this._issueRepository = args.issueRepository;
  }

  async get() {
    const issues = await this._issueRepository.get();
    console.info('issues :', issues);
    return issues;
  }

  async create(issue) {
    return this._issueRepository.save(issue);
  }

  async findOne(id) {
    const issue = await this._issueRepository.findOne(id);
    console.info('issue :', issue);
    return issue;
  }

  async update(id, issue) {
    return this._issueRepository.update(id, issue);
  }

  async delete(id) {
    return this._issueRepository.delete(id)
  }
}

module.exports = {
  IssueService
}