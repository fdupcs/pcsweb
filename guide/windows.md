## Windows常用维护指南(Guide for Windows)

### 安装系统(Install Windows)
1. 下载系统映像(Download Windows Image)  
    [itellyou](https://msdn.itellyou.cn/)  
    [豆豆分享](https://www.iruanmi.com/msdn/)  
    [MVLS·Fudan University](mvls.fudan.edu.cn) (Only internal network available)  
    *you must download the volume license version, otherwise you need a serial number to activate windows in following setp.*
2. 制作启动U盘(Make a bootable Windows install device)  
  For windows,you can use UltralISO to write into your disk.  
  For Linux-based system, you can use dd to do the same thing.
    ```shell
        # umount the device before format.
        $ sudo umount -t fat32 /dev/<your_device>
        # then format the device and turn filesystem info fat32
        $ sudo mkfs -t fat32 /dev/<your_device>
        # use dd to write in.
        $ sudo dd if=<image_you_download> of=/dev/<your_device>
3. 从U盘启动(Boot from USB driver)  
    First you have to enter BIOS to change the boot sequence to make sure your PC is booting from USB Driver.  
    The key you need to press before booting varies depending on your PC manufacturer.  
    Another way is to use fast boot menu to decide a once boot device.
    <table>
        <tr>
        <th>Manufacturer</th>
        <th>Key</th>
        <th>Fast Boot Menu Key</th>
        </tr>
        <tr><th>Dell</th><th>F2</th><th>F12</th></tr>
        <tr><th>ASUS</th><th>Esc</th><th>F10</th></tr>
        <tr><th>Surface</th><th>Volume Key</th><th>
        <tr><th>Apple</th><th></th><th>option</th></tr>
        <tr><th>Thinkpad</th><th>Enter</th><th>F12</th></tr>
        <tr><th>Lenovo</th><th>F2</th><th>F12</th></tr>
    </table>
    For some devices like lenovo, you need to disable the fast startup so that you can enter BIOS or fast boot menu. You can <b>restart</b> your computer in order to boot your device without fast start up. 
4. 安装Windows(install Windows)  
    Just follow the wizard.  
    (to be continue...)
    