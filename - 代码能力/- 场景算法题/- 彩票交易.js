// 给定一个价格数组，其中价格[i]是给定股票在第i天的价格。
// 你想通过选择某一天买入一只股票，并在未来选择不同的一天卖出这只股票来最大化你的利润。
// 回报的最大利润，你可以实现从这次交易。如果你不能获得任何利润，就返回0。

// 示例1:
// 输入:价格= [7,1,5,3,6,4]
// 输出:5
// 解释:第2天买入(价格= 1)，第5天卖出(价格= 6)，收益= 6-1 = 5。
// 请注意，在第2天购买和第1天出售是不允许的，因为你必须在出售之前购买。

// 示例2:
// 输入:价格= [7,6,4,3,1]
// 输出:0
// 解释:在这种情况下，没有交易，最大利润= 0。

function getMaxiumProfit(prices) {
    let profit = 0

    for (var i = 0; i <= prices.length; i++) {
        for (var j = i + 1; j <= prices.length; j++) {
            let buyPrice = prices[i]

            let sellPrice = prices[j]

            if (sellPrice - buyPrice - profit > 0 && sellPrice - buyPrice > 0) {
                profit = sellPrice - buyPrice
            }
        }
    }

    return profit
}
