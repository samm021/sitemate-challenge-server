class IssueService {
  _issueRepository;

  constructor(args) {
    this._issueRepository = args.issueRepository;
  }

  async get() {
    return this._issueRepository.get();
  }

  async create(issue) {
    return this._issueRepository.save(issue);
  }

  async findOne(id) {
    return this._issueRepository.findOne(id);
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