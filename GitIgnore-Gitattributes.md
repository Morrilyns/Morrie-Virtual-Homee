# .gitignore and .gitattributes Activity



## Content Learning Objectives

By the end of this activity, participants will be able to...

- Explain the purpose of .gitignore.
- Use .gitignore to ignore different groups of files by extension.
- Justify types of files that should and should not be stored in a repository.
- Explain the problem of line-endings and how .gitattributes can help.

## Process Skill Goals

During the activity, students should make progress toward:

- Formulating and testing hypotheses.

## Team Roles

Record role assignments here.

Role | Team Member
:-- | :--
Manager |
Presenter |
Recorder |
Reflector |

## Model 1: Files to NOT commit 


- Generated files
- Files that don't belong in your project, e.g.
  - .DS_Store (Mac)
  - .Thumbs.db (Windows)
- Libraries, e.g.
  - npm (node package manager) will download libraries
    that you need before building your app
- Credentials

### Questions (5 min)

1. List some examples of generated files, and why you would not want to\
commit them.
2. List some examples of credentials, and why you would not want to commit
them.
3. Can you think of a time when you may want to commit a generated file into a repository?
4. What about data files? Should they be committed into a repository? Try to come up with an example to support your position.

## Model 2

### Execute the following commands: (5 min)

1. `ls -a` (paste the output below)

.                       .android                .gitconfig              .viminfo                GitKit-FarmData2        MyCode                  adir
..                      .bash_history           .lesshst                .vscode                 Heights.csv             Pictures                dev container test
.DS_Store               .bash_sessions          .local                  Applications            Library                 Postman                 exercise3.java
.RData                  .bito                   .profile                CS 453 Handout-1.R      MainProject.java        Public                  oppia
.Rapp.history           .cache                  .sh_history             Desktop                 MainProject.js          WebGoat                 vstudio.java
.Rhistory               .config                 .ssh                    Documents               Movies                  WebGoat-Lessons
.Trash                  .docker                 .vim                    Downloads               Music                   activity 2.
```
```
2. `git status` (paste the output below)

```not a git repository (or any of the parent directories): .git
```
3. Edit `A.java` and `B.java`. (It doesn't matter what you add to them.)
4. Pretend to compile by creating two files - `A.class` and `B.class`. (They can be empty.)
5. `ls -a` (paste the output below)
```
```
6. `git status` (paste the output below)
```
```
7. `git stage .`
8. `git status` (paste the output below)
```
```
9. Why would you not want to commit right now? What should you have done rather than `git stage .`?
10. Unstage all the files. What command did you use?
11. Create `.gitignore`, add the line `*.class`, and save it.
12. `git status` (paste the output below)
```
```
13. `git stage .`
14. `git status` (paste the output below)
```
```
15. Would you feel comfortable committing now?
16. What is the purpose of `.gitignore`? Why will this make you safer?

## Model 3: Generating .gitignore

### Execute the following commands: (5 min)

1. Open the Command Palette (View menu)
2. Choose `Generate .gitignore file`
3. Select the override option.
4. Choose the options for
    1. Visual Studio Code
    2. Your operating system
    3. Java
5. View the generated `.gitignore` file. Note anything interesting or surprising.
6. If you wanted to add to, instead of replace, the contents of the .gitignore file, what option would you have chosen?

## Model 4: .gitattributes

Different operating systems different character(s) for line endings for text files.

### Execute the following commands: (5 min)

1. Do some quick research, what line ending character(s) is(are) used by the following operating systems...
    * Windows?
    * Linux?
    * MacOS?
2. Consider a team of developers working on the same project using different operating systems. What problems might this cause with version control?
3. It's possible to configure your local git to handle line-endings properly so that the above problem doesn't occur. What's the problem with relying on each developer to configure git properly to handle line endings?
4. Skim https://help.github.com/en/github/using-git/configuring-git-to-handle-line-endings . How does adding a .gitattributes address our problem?
5. Open the Command Palette (View menu)
6. Choose `Add gitattributes`
7. Choose the options for
    1. Common
    2. Markdown
    3. Java
8. View the generated `.gitattributes` file. Note anything interesting or surprising.

---
Copyright © 2023 Karl R. Wurst and Stoney Jackson. This work
is licensed under a Creative Commons Attribution-ShareAlike 4.0
International License.
