# Docker

-   是一个开源的应用容器引擎, 基于 Go 语言开发.
-   优势: 轻量级, 可移植的, 放到任何一个地方都可以执行.

## 容器使用

-   `docker pull Ubuntu` 拉取镜像
-   `docker run` 启动容器

## Dockerfile 文件

-   用来构建镜像的文本文件.

```Dockerfile
FROM: 镜像地址
Run 各种指令 && 连接命令

# 工作目录
WORKDIR 工作路径
COPY  原路径 目标路径
# 指定端口
EXPOSE 80

# docker run之后运行
CMD: [shell命令]
```

-   `docker build ` 构建 image.
