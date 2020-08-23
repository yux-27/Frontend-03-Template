## 学习笔记
### 排版 | 根据浏览器属性进行排版
- 预处理，没有编码算法
- 准备工作，处理 flexDirection 和 wrap 相关的属性
- 重点把具体的 width、height、left、right、top、bottom 等属性抽象成了 main、cross

#### css布局的发展
- 正常流：position、display、float
- flex
- grid
- CSS Houdini

### 排版 | 收集元素进行(hang)
#### 分行
- 根据主轴尺寸，把元素分进行
- 若设置了no-wrap，则强行分配进第一行

### 排版 | 计算主轴
#### 计算主轴方向
- 找出所有flex元素
- 把主轴方向的剩余尺寸按比例分配给这些元素
- 若剩余控件为负数，所有flex元素为0，等比压缩剩余元素

### 排版 | 计算交叉轴
#### 计算交叉轴方向
- 根据每一行汇总最大元素尺寸计算行高
- 根据行高flex-align和item-align，确定元素具体位置

### 渲染 | 绘制单个元素
- 绘制需要依赖一个图形环境
- 我们这里采用了 npm 包 images
- 绘制是在一个viewport上进行
- 与绘制相关的属性： background-color、border、background-image等
