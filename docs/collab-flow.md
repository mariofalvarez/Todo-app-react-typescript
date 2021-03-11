# Collab Flow

## PART 1
1. go to terminal (of project)
2. `git checkout -b [branch-name]`
3. `git add .` > `git commit -m ""` > `git push origin [branch-name]`
   - for commit messages, use action notes. quick & readable
4. `git checkout master` > `git branch -D [branch-name]`

## PART 2
1. go to github > create `pull-request`
   - dev role has been completed
   - test role will review & merge
2. message team
   - you send message to tester to review
   - they reply back to you to merge updates
3. go to terminal > `git pull` (from master)

## Daily Workflow
- **mornings**: 
  - `git pull` for any new updates from the project
  - `npm install` for any new packages
- **nights**: `git push origin [branch-name]` for any work that is done

## Misc
- GitHub Pull Request Color Key
  - **green**: able to merge
  - **purple**: updated merge
  - **gray**: merge conflict