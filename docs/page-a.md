> 先直接怼成品

工程项目开源在GitHub上，平时迭代提交一些功能后，点击对应的`Jenkins`工程一键构建，即完成发布。是不是听了后感觉很高大上！

![](https://user-gold-cdn.xitu.io/2018/11/23/167400823048bfc5?w=2764&h=1380&f=png&s=492768)

![](https://user-gold-cdn.xitu.io/2018/11/23/16740077dfb14521?w=2586&h=1434&f=png&s=325748)

听起来是不是感觉很省事，平时我们要发布工程代码到自己的服务器上，像那种(vue/angular/react)项目的话，总是要跑很多npm命令，然后打包啊，移动啊，解压啊。想想每次都这样是不是很浪费时间，要是一个工程build10分钟，那你还要时刻看着，以便接着运行命令。

> 如何解决问题呢？接下来我们进入正文。

# 简介

`Jenkins`是一款开源自动化服务器，旨在自动化连续集成和交付软件所涉及的重复技术任务。 `Jenkins`是基于Java的，可以从Ubuntu软件包安装，也可以通过下载和运行其Web应用程序ARchive（WAR）文件进行安装 - 构成一个完整的Web应用程序的集合，该文件旨在在服务器上运行。

## 准备工作

- 自己的GitHub账号，及想要部署的仓库
- 有自己的云服务器(小编的为`阿里云Ubuntu 16.04 64位`)
- 云服务器已做过nginx配置（未做的请参考[阿里云服务器（1、nginx配置实战）](https://juejin.im/post/5be5593a6fb9a049ab0d1d40)）

GitHub账号方便`Jenkins`直接从平台上拉取代码，然后做一系列操作，云服务器用于安装`Jenkins`不用每次用都需要启动，小编的为`阿里云Ubuntu 16.04 64位`，没有对号入座的请酌情参考。在配置`Jenkins`前需要先配置下nginx，需要的请参考我的文档 [阿里云服务器（1、nginx配置实战）](https://juejin.im/post/5be5593a6fb9a049ab0d1d40)

## 先安装java

`Jenkins`基于Java， 所以需要先安装java。到官网下载即可[jdk-8u191-linux-x64.tar.gz](https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

![](https://user-gold-cdn.xitu.io/2018/11/24/16743b3189d3de9b?w=1430&h=750&f=png&s=269996)

我一般习惯把安装的软件放到目录/usr/local下。下载上传好后，解压java到相应目录

```shell
tar -zxvf jdk-8u65-linux-x64.tar.gz /usr/local
```

编辑环境变量，在/etc/profile文件中添加环境变量，Linux的所有用户都可以使用。

```shell
vim /etc/profile
```

在文件最后添加内容如下：

```shell
export JAVA_HOME=/usr/local/jdk1.8.0_191
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jart
```

到此，java已安装完成，检查时候出现如下图即安装完成

![](https://user-gold-cdn.xitu.io/2018/11/24/16743b80788c6b05?w=946&h=456&f=png&s=240911)

## 后安装Jenkins

包含在默认Ubuntu软件包中的`Jenkins`版本往往落后于项目本身的最新版本。 为了利用最新的修复和功能，我们将使用项目维护的软件包来安装`Jenkins`。

首先，我们将存储库密钥添加到系统。

```shell
wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
```

添加密钥后，系统将返回 `OK` 。 接下来，我们将Debian包存储库地址附加到服务器的`sources.list ：`

```shell
echo deb http://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list
```

当这两个都到位时，我们将运行update ，以便apt-get将使用新的存储库：

```shell
sudo apt-get update
```

最后，我们将安装`Jenkins`及其依赖项

```shell
sudo apt-get install jenkins
```

## 启动Jenkins

使用systemctl我们将启动`Jenkins`：

```shell
sudo systemctl start jenkins
```

由于systemctl不显示输出，我们将使用其status命令来验证它是否成功启动：

```shell
sudo systemctl status jenkins
```

如果一切顺利，输出的开始应显示服务处于活动状态。

![](https://user-gold-cdn.xitu.io/2018/11/24/16743bd938fc2b36?w=1102&h=570&f=png&s=453581)

> 注意：我在安装的过程中遇到了java路径找不到的问题，解决方案是建立一个软连接即可，请参考 [ERROR: No Java executable found in current PATH](https://blog.csdn.net/yi_suo_yan_yu/article/details/81981789)

## 设置防火墙（ufw）

ufw是一个主机端的iptables类防火墙配置工具 安装的话，ubuntu很友好，一般都会给安装命令的

```shell
sudo apt-get install ufw
```

开启，建议默认关闭所有外部访问

```shell
sudo ufw enable
sudo ufw default deny
```

默认情况下，`Jenkins`在端口8080上运行，因此我们将使用ufw打开该端口：(自定义的端口需另外开启)

```shell
sudo ufw allow 8080
```

查看防火墙状态

```shell
sudo ufw status
```

![](https://user-gold-cdn.xitu.io/2018/11/24/16743dbfb2f4a727?w=918&h=506&f=png&s=214175)

> 注意：既然开启了防火墙，那不要吧自己给墙了，比如`ssh`,`nginx`,`http`,`https`等这些端口可别忘记打开了。

可以使用`sudo netstat -plntu` 查看端口占用情况

```shell
 sudo netstat -plntu
```

![](https://user-gold-cdn.xitu.io/2018/11/24/167447dddbfa6c8c?w=1130&h=722&f=png&s=371699)

然后根据端口占用情况按需开启防火墙

```shell
sudo ufw allow 80  #允许外部访问80端口(nginx默认端口)
sudo ufw allow ssh  #ssh默认端口
sudo ufw allow http  #http默认端口
sudo ufw allow https  #https默认端口
sudo ufw allow 9180  #Jenkins自定义端口端口
```

## 自定义Jenkins端口

`Jenkins` 默认端口是8080，在配置文件`/etc/default/jenkins` 中定义。

```shell
# UMASK=027

# port for HTTP connector (default 8080; disable with -1)
HTTP_PORT=9180
```

自定义好端口后，需要重启下`Jenkins`，打开`http:// ip_address_or_domain_name :8080`应该看到"解锁`Jenkins`"屏幕

```shell
sudo systemctl start jenkins #启动
sudo systemctl status jenkins #查看
sudo systemctl restart jenkins #重启
```

## 配置Jenkins

`Jenkins`安装完成后，打开`http:// ip_address_or_domain_name :8080`应该看到"解锁`Jenkins`"屏幕如下图： ![](https://user-gold-cdn.xitu.io/2018/11/24/16743d429ba3d877?w=1334&h=716&f=png&s=273209)

按照提示 输入如下命令获取到密码

```shell
sudo cat /var/lib/jenkins/secrets/initialAdminPassword
```

将获取的密码字符串粘贴到password字段中，点击继续，跳转到插件安装页面

![](https://user-gold-cdn.xitu.io/2018/11/24/16744613971d843c?w=1350&h=716&f=png&s=292501)

如果是`Jenkins`小白的话，还是建议用`推荐的方式`安装插件,安装过程中需要比较长的一段时间。

![](https://user-gold-cdn.xitu.io/2018/11/24/167446287beaab37?w=1322&h=704&f=png&s=365738)

安装完成后，系统将提示您设置第一个管理用户。 可以跳过此步骤，并使用上面使用的初始密码作为admin继续，但是我们将花一点时间创建用户。

![](https://user-gold-cdn.xitu.io/2018/11/24/167447a0ac85ad96?w=1324&h=734&f=png&s=150193)

> 注意：默认`Jenkins`服务器未加密，因此使用此表单提交的数据不受保护。 当您准备好使用此安装时，请按照指南[如何使用Nginx反向代理将SSL配置为`Jenkins` 。](https://www.howtoing.com/how-to-configure-jenkins-with-ssl-using-an-nginx-reverse-proxy/) 这将保护用户凭据和关于通过Web界面发送的构建的信息。

![](https://user-gold-cdn.xitu.io/2018/11/24/167447a38531e58f?w=1354&h=746&f=png&s=120436)

> 注意：小编在安装`Jenkins`后，有出现过登录页白屏的情况，解决方案如下 [jenkins配置权限不对导致无法登陆或者空白页面解决办法](https://blog.csdn.net/kuangay/article/details/80628459)

```shell
<authorizationStrategy class="hudson.security.FullControlOnceLoggedInAuthorizationStrategy">
    <denyAnonymousReadAccess>true</denyAnonymousReadAccess>
</authorizationStrategy>
```

## 用Jenkins自动化部署一个GitHub工程

登录`Jenkins`后，我们先新建一个任务

![](https://user-gold-cdn.xitu.io/2018/11/24/16744f0a146e0371?w=2178&h=1172&f=png&s=228124)

输入一个任务名称，选择构建一个自由风格的软件项目

![](https://user-gold-cdn.xitu.io/2018/11/24/16744f16200fb34b?w=1982&h=1004&f=png&s=241624)

配置过程中可适当写点描述，源码管理选择git，然后贴上你GitHub上对应要构建的仓库克隆链接，可对应的分支。如下图： ![](https://user-gold-cdn.xitu.io/2018/11/24/16744f4ef3cc587c?w=1912&h=960&f=png&s=124160)

在构建里面输入你拉取代码到`Jenkins`工作环境后，需要执行的一些命令行，如npm install,build等。 ![](https://user-gold-cdn.xitu.io/2018/11/24/16744f5397a00cb2?w=2058&h=1012&f=png&s=179376)

> 因为我是一个react工程，所以我先执行npm install,后打包构建，最后移到我服务器的根目录下面，即完成发布。命令如下：

```shell
echo 'check project path'
pwd
ls
echo 'check npm && node version'
npm --version
node --version
echo 'start npm install'
npm install
echo 'start build project'
npm run build-prod
tar czvf www.tar.gz ./www/*
echo 'delete dist and cache-loader'
rm -rf www/
rm -rf .cache-loader/
mv -f www.tar.gz /usr/share/nginx/html/pc
cd /usr/share/nginx/html/pc
echo 'delete old dist'
rm -rf www/
tar -xzvf www.tar.gz
rm -rf www.tar.gz
```

构建完成后，显示蓝色即为构建成功，可以选择具体一次的构建，里面还可以看构建日志

![](https://user-gold-cdn.xitu.io/2018/11/24/167450623983468a?w=1846&h=948&f=png&s=264358)

> 注意：一个工程首次构建的话，为了保险起见，把工程clone下来后，先在工程对应的文件下，把需要执行的命令跑一遍，一步步测试成功后，在贴到`Jenkins`里面一键构建。

![](https://user-gold-cdn.xitu.io/2018/11/24/1674501cca4b660d?w=1438&h=710&f=png&s=140156)

默认`Jenkins` 各个工程路径路径为

```shell
cd /var/lib/jenkins/workspace/
```

默认`Jenkins` 各个工程build详细结果的路径为

```shell
cd /var/lib/jenkins/jobs/
```

## 其他构建场景

`Jenkins`比较常见的除了构建自由风格工程外，还可以构建一条pipeline（中文名：流水线）

新建任务的时候，选择pipeline,再选择pipeline script,用pipeline语法编辑每个管道要执行的步骤即可，如图：

![](https://user-gold-cdn.xitu.io/2018/11/24/167450b38dc2d974?w=1924&h=906&f=png&s=128811)

```shell
pipeline{
    agent any
    stages {
        stage('Build') {
            steps{
                echo 'This is a build step'
            }
        }
        stage('Test') {
            steps{
                echo 'This is a test step'
            }
        }
        stage('Deploy') {
            steps{
                echo 'This is a deploy step'
            }
        }
    }
}
```

这样构建完后，构建步骤一目了然

![](https://user-gold-cdn.xitu.io/2018/11/24/167450d36751e973?w=2174&h=1072&f=png&s=285217)

> 小编后续讲发布一篇在服务器搭建gitlab的文档，那时可以选择用pipeline构建自己的gitlab工程。

## 遇到的问题及解决方案

- [ERROR: No Java executable found in current PATH](https://blog.csdn.net/yi_suo_yan_yu/article/details/81981789)

- [jenkins转换显示语言为中文简体（jenkins汉化）](https://blog.csdn.net/w294954902/article/details/82587295)

- [ubuntu的ufw如何开放特定端口?](https://blog.csdn.net/justheretobe/article/details/51843178)

- [ssh开启防火墙情况下远程连接服务器【解决密码正确但拒绝访问问题】](https://blog.csdn.net/k_young1997/article/details/81782289)

- [jenkins配置权限不对导致无法登陆或者空白页面解决办法](https://blog.csdn.net/kuangay/article/details/80628459)

![](https://user-gold-cdn.xitu.io/2018/12/7/16788160fe1224a0?w=720&h=300&f=png&s=55606)