# Feature merge request template

## What does this MR do and why?

What do you want to happen? What problem are you trying to solve?

## How we setup and verify this pull request on localhost?
Please tell us how to setup and verify this pull request on localhost. This will lead to a faster review and merge PR.

## MR acceptance checklist
The standard criteria that a feature must satisfy to be accepted


### Semantic

**Required**

- [ ] I have linked an issue or discussion
- [ ] MR follows the basic team's coding conventions.
- [ ] This PR follow [the coding conventions](../../docs/coding-convention.md) of this project
- [ ] This PR resolve all comments of the reviewers and have at least 1 approval
- [ ] Files change do not exceed 40 files(Normally should be 20~30 files).

*Optional*
- [ ] I have updated the documentation accordingly

### Testing

**Required**
- [ ] Pass all pipeline
- [ ] All logic functions must have the unit tests guarantee the code coverage of obtaining at least 80%
- [ ] MR should not reduce the entire project's test coverage.

*Optional*

- [ ] UI tests must guarantee the code coverage of obtaining at least 40%(include all fields, exact words, animations and behaviors...)

## The way we review code together

Follow theo [Code Review Guidelines](https://www.pluralsight.com/blog/software-development/code-review-checklist)

/closes #
