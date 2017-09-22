# How to Contribute

Recommendations and requirements for how to best contribute to RLB (React Library Boilerplate). We strive to obey these as best as possible. As always, thanks for contributing--we hope these guidelines make it easier and shed some light on our approach and processes.

### Key branches
- `master` is the latest, deployed version
- `develop` is where development happens and all pull requests should be submitted

### Pull requests
- Submit pull requests against the `develop` branch
- Try not to pollute your pull request with unintended changes--keep them simple and small

## Workflow

The workflow that we support is know as [GitFlow][git-flow]:

1.  Check out the `develop` branch
2.  Make a feature branch
3.  Make your cool new feature or bugfix on your branch
4.  Write a test for your change
5.  From your branch, make a pull request against `grandata/react-library/develop`
6.  Work with repo maintainers to get your change reviewed
7.  Wait for your change to be merge into `grandata/react-library/develop`
8.  Delete your feature branch

## Testing

We've standardized on using the [JEST][jest].

## Style

We generally follow <check airbnb/google style for examples>. When
in doubt, look around the codebase and see how it's done elsewhere.

- Comments should be formatted to a width no greater than 100 columns.

- Files should be exempt of trailing spaces.

- We adhere to a specific format for commit messages. Please write your commit
messages along these guidelines:
```
    One line description of your change (less than 72 characters)

    Problem

    Explain here the context, and why you're making that change.
    What is the problem you're trying to solve?

    Solution

    Describe the modifications you've done.

    Result

    After your change, what will change?
```

## Code Review

When you submit a pull request, it will be reviewed and once the changes are
approved, your commits will be merged with the master branch.

## Documentation

We also welcome improvements to the React Library Boilerplate documentation, which is maintained
in this repository.

RLB uses [Styleguidist](https://github.com/styleguidist/react-styleguidist) to generate its components guide.
You can view the site locally at running `npm run guide` and open your browser at `http://localhost:6060`.

Please note that any additions or changes to the App must be thoroughly
described. We will also happily consider pull requests that improve the existing docs!

[git-flow]: http://nvie.com/posts/a-successful-git-branching-model/
[jest]: https://facebook.github.io/jest/
