## Linux Maintainer


### Ubuntu
  - Partition Process
  ```shell
  $ gparted
  ```

### Arch
  - #### Show disks
  ```shell
  $ lsblk  # focus on disk device file
  ```
  - #### 扫描硬盘(disk scan)
  ```shell
  $ badblocks -sv <device file>
  ```

  - #### dd显示进度(show dd process)
  ```shell
  $ while killall -USR1 dd; do sleep 5; done
  ```

  - #### data recovery
  ```shell
  $ dd if=<device> of=<image>  # optional, but recommended
  $ photorec
  ```
