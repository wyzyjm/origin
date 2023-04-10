# Flex 布局

```css
.parent {
    display: "flex";
    flex-direction: "row"; /** row-reverse column column-reverse */
    flex-wrap: "nowrap"; /** wrap wrap-reverse */
    flex-flow: "row nowrap"; /** 方向 是否换行 */
    justify-content: "flex-start"; /** flex-end center space-between space-around */
    align-items: "flex-start"; /** flex-end center stretch baseline */
    /* 多轴线 */
    align-content: "flex-start"; /** flex-end center stretch space-between space-around */
}
.children {
    /* 排序 */
    order: 0; /** 数值越小越靠前 */
    flex-grow: 0; /** 空间多余,是否放大 */
    /* 缩小 */
    flex-shrink: 1; /** 空间不足,缩小 */
    flex-basis: "100%"; /** 宽度 */
    flex: 0 1 auto; /** 放大 缩小 宽度 | auto:1 / none:0 */
    /* 对齐方式 */
    align-self: "auto"; /** flex-start  flex-end center baseline stretch */
}
```
