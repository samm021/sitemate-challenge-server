const errorCode = {
  JSON_READ_ERROR: 'JSON_READ_ERROR',
  JSON_WRITE_ERROR: 'JSON_WRITE_ERROR',
  ISSUE_NOT_FOUND: 'ISSUE_NOT_FOUND'
};

const errorStatus = {
  JSON_READ_ERROR: 500,
  JSON_WRITE_ERROR: 500,
  ISSUE_NOT_FOUND: 404
}

function handleError(res, err) {
  console.error(err);
  return res.status(errorStatus[err.message]).json({ message: err.message });
}


module.exports = {
  errorCode,
  handleError
}