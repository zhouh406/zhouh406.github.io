---
title: 粒子群算法优化天线阵列
slug: antenna-array-pso
summary: 使用粒子群算法探索阵元排布与相位加权的联合优化，并建立可复核的性能评价流程。
status: Research prototype
year: 2025
order: 1
featured: true
technologies:
  - Python
  - PSO
  - Antenna Array
  - NumPy
research:
  - antennas
  - ai-em
related_notes:
  - pyaedt-hfss-automation-basics
result: 已形成从阵列模型、适应度函数到迭代分析的基础流程，后续重点是多目标指标与全波仿真验证。
---

## Problem

相控阵性能同时受到阵元排布、幅相加权与工程约束影响。手动调整难以系统搜索设计空间，也不容易比较不同目标之间的取舍。

## Solution

建立参数化阵列模型，将波束指向误差、旁瓣电平等指标组织为适应度函数，再使用粒子群算法迭代搜索候选设计。优化过程保存每轮指标，以便检查收敛行为和异常结果。

## Results

目前已经完成基础算法与评价流程的连接。项目下一阶段将加入多目标权衡、制造约束与 HFSS 全波仿真结果，避免只在理想阵列模型上判断性能。

## Figures / Screenshots

当前公开版本暂未加入项目图像；后续将补充阵列方向图、收敛曲线与关键指标对比。
