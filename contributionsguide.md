## Welcome to SexyUI's Contribution Guide

Thanks for choosing to build this project with us! Here's what this guide covers and how you can hit the ground running with ease.

- [x] Code of Conduct
- [x] Git Contribution Workflow
- [x] Code Style Guide
- [x] Collaborating with our maintainers

### Getting Started

- Take a look at our ![Code of conduct](https://github.com/YouGoDevs/Sexy-UI/blob/QA/codeofconduct.md) to understand how we keep this community approachable, respectable and inclusive to everyone!

To get some insight on the project, head over to the ![Project ReadMe](https://github.com/YouGoDevs/Sexy-UI/blob/Kohl/README.md) file and take a look.

``Once you're done with that, let's get you started on the best GitHub workflow so you can get to contributing right away.``

<br/><br/>

## Git

Before you get started making delightful submissions, there are a few simple steps:

### Fork the repo

You need to ``fork`` the project repo to your GitHub account to get started.

Do this by navigating to the project's main page https://github.com/YouGoDevs/Sexy-UI and clicking the ``fork`` button at the top-right corner of your screen, below the top nav-bar.

![Grab URL](<https://github.com/YouGoDevs/Sexy-UI/blob/QA/assets/Screenshot%20(154).png>)

Once you click this button, there should be a copy of this project local to your GitHub account.

_You're ready for the next step!_

<br/>

**Clone to your Local Computer**

The next step is to grab a link from the project and use the ``git clone`` command to get a copy on your local machine.

![Grab URL](<https://github.com/YouGoDevs/Sexy-UI/blob/QA/assets/Screenshot%20(144).png>)

In the command-line of your text editor or OS, enter the command:

```
git clone https://github.com/YouGoDevs/Sexy-UI

```

Once it's done cloning the repository, navigate to the ``directory`` containing the project using:

```
cd Sexy-UI

```

Congrats! You now have a personal copy of the project on your local machine, let's discuss branching next!

<br/>

### Feature Branch - feature or fix branch

If you're completely new to the term branching, no worries! Take a look at this crash course! -> https://www.varonis.com/blog/git-branching

When you're looking to add an entire new component or make a significant change to a package, the best way to get started is by:

```
- Creating a new branch on your local computer
- Pushing it to the forked version of the project on your GitHub account
- Submitting your changes to SexyUI's official repository

```

Git provides a few commands for implementing branching in your project:

```
git status -  this command checks the current branch and informs you of any recent file changes within that branch
```

```
git branch - returns the name of the current branch
```

```
git checkout -b "new branch" -  this creates a new branch and immediately switches you to it

```

When creating branches to submit for SexyUI, use the prefixes fix/branchName or feature/branchName to specify if your submission is a bug-fix or a new feature.

<br/>

<hr />

#### Coding and Committing

When building your feature or fix, use easy to read commit messages and commit frequently for every distinct change.

We've provided a more extensive resource on building the best commit messages - https://reflectoring.io/meaningful-commit-messages/

<br/>

### Folder Structures for import ###
Folder structure for new components & how imports should work with setup
```
/src/packages/[Component]/src
\- index.tsx
\- Readme

/src/packages/[Component]/src/[Sub-Component]/

import { Component, SubComponent, SubComponentTwo } from '@sexui/component';
```

#### **Contributions Credit**

Every approved contributor appears on the insights of the project and is allowed to use SexyUI for a portfolio or resume reference.

<br/>

#### **How does a PR get merged?**

Your PRs get merged after extensive code review by the team of maintainers. We may reach out to gain insight or clarity on certain new features.

If needed, the team will reach out to you regarding live code-review or working together to integrate your new feature.

For fixes, the YouGo team will create discussions around the fix and provide insights before any major changes are approved.

<br/>

#### **Collaborating with Maintainers**

Hey there! Thanks for reading through this, we'd love to hear your opinions, suggestions and insights on any proposed changes in our ``Discord`` community.

Please contact us via ``Gellera800@gmail.com`` to setup meetings to collaborate with maintainers on this project.

We truly appreciate the time and effort you've taken here and look forward to meeting you!

<br/><br/>
