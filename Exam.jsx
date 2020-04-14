/* 
1. 
（A）請寫一個程式把裡面的字串反過來。 
（B）請寫一個程式把裡面的字串，每個單字本身做反轉，但是單字的順序不變。 
舉例 
 
f​(​"junyiacademy"​) == ​"ymedacaiynuj" 
f​(​"flipped class room is important"​) == ​"deppilf ssalc moor si tnatropmi" 
*/

const reverseString = (str) => {
    return str.split('').reverse().join('')
}

const reverseStringSentence = (sentence) => {
    return sentence.split(' ')
                   .map( s => reverseString(s) )
                   .join(' ')
}

/* 
2. 
請寫一個程式，Input 是一個數字，Output 是從 1 到這個數字，扣除掉所有 3 的
倍數以及 5 的倍數，但是需要保留同時是 3 和 5 的倍數的總數字數。 

舉例 
Input：15 
所有的數字是：1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
其中 3, 6, 9, 12 被剔除；5, 10 被剔除；但是 15 被保留 
所以剩下來的數字是 1, 2, 4, 7, 8, 11, 13, 14, 15，因此 
Output：9 
*/

const func = ( number ) => {
    let list = ( new Array(number) ).fill()
    const output = list.map( (d, idx) => idx + 1 )
               .filter( d => {
                    if ( (d % 3) === 0 && (d % 5) === 0 ){
                        return true
                    } else if ( (d % 3) === 0 || (d % 5) === 0 ) {
                        return false
                    } else {
                        return true
                    }
               } )
    return output.length
}

/* 
3. 
房間裡有三個袋子，一個只裝鉛筆，一個只裝原子筆，第三個有鉛筆也有原子筆。
袋子是不透明的，單從袋子的外表上看不出任何差異，你不知道哪個袋子裝什麼。
除了袋子上各貼了一個標示（"鉛筆"、"原子筆"、"混和"），且標示都是錯的 
（e.g. 標示鉛筆的袋子可能是混和的或是只裝原子筆）。 
你只能選一個袋子，拿出裡面一支筆，看是鉛筆還是原子筆，然後你要推論出這三
個袋子分別的情況。請列出你的作法，以及解釋為什麼這樣可以找到答案。 
*/
從標示混合的袋子拿出一支筆，因為這個袋子裡面只有可能是純物種，又因為標示一定是錯的

從標示混合的袋子拿出一支筆會有以下兩種情況

袋子 混合 原子筆 鉛筆
實體 鉛筆 混合   原子筆

袋子 混合   原子筆 鉛筆
實體 原子筆 鉛筆   混合

/* 
4. 有三個人一起到迪士尼遊玩，中午肚子餓了，去餐廳點了一份現在最夯的冰雪奇緣
雙人組，要價 900 元，付錢後，服務生發現今天套餐大特價，只要 750 元，因此
服務生應該退還 150 元給這三個人，但是這位服務生一時鬼迷心竅，決定暗槓 60 
元，只退了 90 元給這三個遊客。 
那麼：三人各出 300 元 - 服務生還給他們一人 30 元 = 三人各出 270 元。270 
元 × 3 人+ 服務生私吞的 60 元 = 810 + 60 = 870 !? 怎麼不是 900 元呢？還
有 30 元去哪了呢？請用敘述的方式，儘量清楚解釋問題出在哪裡。 
*/

倒過來看就很清楚了
他們總共要支付餐錢跟貪汙錢
應該是 750 + 60 = 810 = 270 * 3

問題出在要價不是900元是750元

//
// 第二題應該是要return output.length =.= 發現的時候沒時間改了
