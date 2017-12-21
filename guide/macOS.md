## Macintosh OS X 使用指南(User Guide)


### 系统维护(OS maintenance)
- #### 重装系统(Reinstall Operating System)
1.下载操作系统(Download the OS)
  从AppStore搜索macOS，找到所需版本下载，但是不要安装
  Search AppStore for desired version and just download it (without installing)  
2.制作启动盘(Make an install media)
  进入终端 Open the Terminal
  ```shell
  $ /Applications/<actual path>/Contents/Resources/createinstallmedia --volume <mount point>
  # e.g.
  $ /Applications/Install\ macOS\ High\ Sierra.app/Contents/Resources/createinstallmedia --volume /Volumes/SYSTEM
  ```
3.安装(Install)
  插上安装盘，重启电脑，按下`option`键，按向导安装
  Insert install media. Reboot and hold `option`. Then, follow the wizard.
- #### 进入单用户模式(Single User Mode)
  Reboot `command`+`s`
- #### 进入恢复模式(Recovery Mode)
  Reboot `command`+`r`
- #### 恢复密码(Reset password)
  > 无可奉告

### 外接设备管理(External Device)
- #### 查看磁盘(show disks)
  ```shell
  $ diskutil list  # 注意设备文件  mention the device file
  ```
- #### 挂载NTFS分区(mount NTFS partition)
  ```shell
  $ sudo mount_ntfs <device file> <mount point>  # deprecated
  ```
- #### 挂载加密苹果分区(mount encrypted partition)
  ```shell
  $ diskutil list  # or use diskutil cs list
  # find `Offline` part and find the uuid of encrypted partition

  # e.g.
  # /dev/disk2 (external, physical):
  # #:                       TYPE NAME                    SIZE       IDENTIFIER
  # 0:      GUID_partition_scheme                        *2.0 TB     disk2
  # 1:                        EFI EFI                     209.7 MB   disk2s1
  # 2:          Apple_CoreStorage 未命名                  256.4 GB   disk2s2
  # 3:       Microsoft Basic Data FOR WINDOWS             274.9 GB   disk2s3
  # 4:           Linux Filesystem                         32.2 GB    disk2s4
  # 5:           Linux Filesystem                         32.2 GB    disk2s5
  # 6:           Linux Filesystem                         10.7 GB    disk2s6
  # 7:           Linux Filesystem                         524.3 MB   disk2s7
  # 8:                  Apple_HFS                         549.8 GB   disk2s8

  # Offline
  #                                  Logical Volume OS X Encrypted on disk2s2
  #                                  CA4C09F4-387C-40BC-9E18-98B4C281C118
  #                                  Locked Encrypted

  # The uuid is `CA4C09F4-387C-40BC-9E18-98B4C281C118`

  $ diskutil cs unlockVolume <device uuid>  # you need to input the password
  # e.g.
  $ diskutil cs unlockVolume CA4C09F4-387C-40BC-9E18-98B4C281C118
  ```
### 软件(software)
- #### 包管理(Package Management)
  > 统一管理系统软件的安装卸载升级及配置和依赖项的工具([了解更多][lfs package management])  
  >
  > A tool to track the installation of files making it easy to remove and upgrade packages, as well as the binary and library files and configuration files.
  > [(learn more)][lfs package management]


  * [homebrew](https://brew.sh/)
  ```shell
  # install python3
  $ brew install python3
  ```
  * [macports]() (deprecated)

- #### 终端环境(Terminal)

  * [ohmyzsh](http://ohmyz.sh/)

- #### dd显示进度(diskdump with process bar)
  ```shell
  # brew install pv
  $ pv -cN source < <image path> | sudo dd of=<device file> bs=<block size> conv=notrunc
  ```
[lfs package management]: (http://linuxfromscratch.org/lfs/view/stable/chapter06/pkgmgt.html)
