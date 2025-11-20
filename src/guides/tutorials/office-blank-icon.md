---
title: Office文件图标异常（变白）修复指南
author: 月見団子
isOriginal: true
icon: file
date: 2025-11-20
category: 教程
tag:
  - Windows
  - Office
order: 1
---

## 问题描述

在卸载 WPS Office 后，原本正常的 Microsoft Office（Word, Excel, PowerPoint）文件图标变为白色，无法正常显示。

![变白的图标](./assets/5ae36bdea52f0bacabf3d2090d32f296.png)

虽并不妨碍正常使用，但无法通过文件图标辅助判断文件内容却是一件令笔者难以接受的事情。

<!-- more -->

## 修复方法

请按照以下顺序依次尝试，若上一种方法无效，再尝试下一种。

### 方法一：重置默认应用

这是最安全、首选的解决方法。

1. 打开 `设置` > `应用` > `默认应用`。
2. 在搜索栏中分别搜索 `.docx`, `.xlsx`, `.pptx` 等文件类型，将其默认打开程序修改为对应的 Microsoft Office 应用程序。

> 如果此方法无效，请尝试方法二。

### 方法二：修复 Microsoft Office 程序

此方法可以修复 Office 本身的关联设置。

1. 打开 `控制面板` > `程序` > `程序和功能`。
2. 在程序列表中找到 `Microsoft Office` 程序。
3. 右键点击它，选择 `更改`。
4. 在弹出的窗口中选择 `快速修复` 并按照提示完成操作。如果快速修复无效，可以尝试 `联机修复`。

> 如果上述方法均无效，则可能需要使用方法三来清除更深层的注册表关联。

### 方法三：手动清理注册表并修复

::: warning
此操作涉及修改系统注册表，存在一定风险。请在操作时务必谨慎，建议备份整个注册表。
:::

**操作步骤：**

1. 打开注册表编辑器并做好备份
   - 按下 `Win+R` 键打开“运行”对话框。
   - 输入 `regedit` 并按下回车。
   - 右键最外层的 `计算机` 项，选择 `导出` 到桌面即可。
2. 清理 `HKEY_CLASSES_ROOT` 下的关联
   - 展开 `HKEY_CLASSES_ROOT` 项。
   - 找到并依次选中以下 **12个** 子项：
     - `.doc`
     - `.docx`
     - `.ppt`
     - `.pptx`
     - `.xls`
     - `.xlsx`
     - `Excel.Sheet.8`
     - `Excel.Sheet.12`
     - `PowerPoint.Show.8`
     - `PowerPoint.Show.12`
     - `Word.Document.8`
     - `Word.Document.12`
   - 选中后，按下键盘上的 `Delete` 键，在弹出的确认窗口中确认进行删除。
3. 清理 `HKEY_CURRENT_USER` 下的文件扩展名记录
   - 展开 `HKEY_CURRENT_USER` 项
   - 依次展开以下路径：
     `Software` > `Microsoft` > `Windows` > `CurrentVersion` > `Explorer` > `FileExts`
   - 在 `FileExts` 子项下，找到并依次选中以下 **6个** 子项：
     - `.doc`
     - `.docx`
     - `.ppt`
     - `.pptx`
     - `.xls`
     - `.xlsx`
   - 选中后，同样按下 `Delete` 键删除它们。
4. 再次修复 Office 程序
   - 返回 `控制面板` > `程序` > `程序和功能`。
   - 再次找到 `Microsoft Office` 程序，右键选择 `更改` > `修复`。
5. 完成
   - 此时通常无需重启，文件图标即可恢复正常显示。
   - 但为了确保系统稳定，**建议重启电脑**后再开始使用 Office 套件。

这样，Office 就能恢复正常的图标 Ciallo～ (∠・ω< )⌒★

![修复完成后的图标](./assets/c7751663ce959fc8d8627ce5490192f7.png)
