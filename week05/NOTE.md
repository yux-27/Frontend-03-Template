## 学习笔记

### 关于优先级
#### 下面列表中，选择器类型的优先级是递增的：

- 类型选择器（例如，h1）和伪元素（例如，::before）
- 类选择器 (例如，.example)，属性选择器（例如，[type="radio"]）和伪类（例如，:hover）
- ID 选择器（例如，#example）。
- 行内样式总是会覆盖外部样式表的任何样式，因此可以看作具有最高优先级

通配选择符（universal selector）（*）关系选择符（combinators）（+, >, ~, ' ', ||）和 否定伪类（negation pseudo-class）（:not()）对优先级没有影响。（但是，在 :not() 内部声明的选择器会影响优先级）。

### 伪类和伪元素
:first-line 只能与块级元素关联。
#### 下列属性应用于 :first-line 伪元素：

- font 属性
- color 属性
- background 属性
- word-spacing
- letter-spacing
- text-decoration
- vertical-align
- text-transform
- line-height
- clear

在 CSS2.1 之前，:first-letter 只能与块级元素关联。CSS2.1 扩大了这个范围，可以与任何元素关联。可以应用到首字母的属性是有限的。(经试验在内联元素上无效)
#### 下列属性应用于 :first-letter 伪元素：

- font 属性
- color 属性
- background 属性
- margin 属性
- padding 属性
- border 属性
- text-decoration
- vertical-align (仅当 'float' 为 'none' 时)
- text-transform
- line-height
- float
- clear
