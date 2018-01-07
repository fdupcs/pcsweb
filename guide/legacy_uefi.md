## Windows常用维护指南(Guide for Windows)

#### Legacy引导转换为UEFI(Convert Legacy Boot Mode to UEFI)

##### Before we start, you must pay attention to this thing and get ready:  
* Back up your data, especially data in system volumn.
* Reinstall windows. You can refer to this section: [Reinstall Windows](windows-reinstall)
* You have to know what is [UEFI](https://en.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface) and legacy boot mode.
* Windows 7 and earlier version of Windows cannot boot when in UEFI mode.
<br>
##### 操作步骤(Steps)
1. Enter into BIOS and activate the UEFI boot mode. If you find your PC is not supported, I suppose you should get a new one. You can also ban the legacy boot mode.
2. Using Windows PE and find this tool called [DiskGenius](http://www.diskgenius.cn/).  
![](image/dg.png)  
3. Select the driver, right click it and then click "Convert Partition Table Type into UEFI". Then save your changes in DiskGenius and quit.  
4. reinstall system. When asked to select partition to install, you must delete the old system partitions(and some small partition attached to it) and generate a new one by click the space area and click new. Windows Setup Program will do this automatically.  
5. The next step is same as reinstalling windows.