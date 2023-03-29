# Git

-   Git 三大特色: 分支, 暂存区, 工作流,支持多人同时协作开发

## Git 策略

1. Git flow

-   master 每合并一次,都会打一个 tag
    -   Hotfix
-   Dev
    -   Feature
    -   Release

2. GitHub flow

-   master 权限保护, 需要代码 review
    -   feature
    -   bug

3. GitLab flow

-   在 Github flow 的基础上添加了不同环境的概念

-   release
-   production
-   test
-   master

## Git 命令

1. 初始化新项目

    - `git init ` 初始化仓库
    - `git status` 查看状态
    - `git add .` 添加暂存区
    - `git commit -m '描述'` 添加描述
    - `git remote add origin 仓库地址` 添加远程仓库
    - `git push -u origin master` 推送远程仓库

2. 已有项目

    - `git clone 项目地址`
    - `git checkout -b newbranch` 切换新分支
    - ... 工作区 -> 暂存区 -> 本地仓库

3. 分支合并

    - git merge `分支main`
        - 在哪个分支就以哪个分支为基准.
        - 留下一条 merge 记录
    - git rebase `变基 `

        - 要合并哪个分支 为基准.
        - 每次合并都需要解决冲突

    - git push 推送到远程仓库

4. 版本回退

-   `工作区 暂存区 本地仓库 远程仓库`

    -   `git log` : 查看提交记录 `git reflog`
    -   `暂存区` : `git reset --soft 指定回滚到的版本号`
    -   `工作区` : `git reset --mixed 指定回滚到的版本号`
    -   `已经提交了`: `git reset --hard 指定回滚到的版本号 -> git push -f`

    -   `git reset --hard 版本号` : 版本回退 毁尸灭迹的过程
    -   `git revert 移除的版本号 ` : 保留原来, 生成新的记录
        -   做过的修改会回到暂存区, 然后可以选择删除或修改后重新提交
