# 正则

> regular expression RegExp
> 用来处理字符串的规则
> + 只能处理字符串的规则
> + 它是一个规则 ：
    可以验证某个字符串是否符合某个规则(test), 
    也可以把字符串中符合规则的内容捕获到(exec/match...)

```javascript
    let str = 'good good study , day day up'
    //=> 学正则 就是用来制作规则
    let reg = /\d+/;// 表示一个 0-9 的数字出现一到多次
	reg.test(str); //=> false
	str = '2019=08-12';
reg.exec(str)// 返回一个数组，其中存放匹配的结果。如果未找到匹配，则返回值为 null。
```

**编写正则表达式**

```javascript
//=> 字面量创建方式 (两个斜线之间包起来 都是用来描述规则的元字符)
let reg = /\d+/;
//=> 构造函数模式创建 两个参数: 元字符字符串 修饰符字符串;
let reg2 = new RegExp('\\d+'); // 第一个斜线是转义;
```

**正则表达式由两部分组成**

+ 元字符 

  >| 字符         | 描述                                                         |
  >| :----------- | :----------------------------------------------------------- |
  >| \            | 将下一个字符标记为一个特殊字符、或一个原义字符、或一个 向后引用、或一个八进制转义符。例如，'n' 匹配字符 "n"。'\n' 匹配一个换行符。序列 '\\' 匹配 "\" 而 "\(" 则匹配 "("。 |
  >| ^            | 匹配输入字符串的开始位置。如果设置了 RegExp 对象的 Multiline 属性，^ 也匹配 '\n' 或 '\r' 之后的位置。 |
  >| $            | 匹配输入字符串的结束位置。如果设置了RegExp 对象的 Multiline 属性，$ 也匹配 '\n' 或 '\r' 之前的位置。 |
  >| *            | 匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。 |
  >| +            | 匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。 |
  >| ?            | 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。 |
  >| {n}          | n 是一个非负整数。匹配确定的 n 次。例如，'o{2}' 不能匹配 "Bob" 中的 'o'，但是能匹配 "food" 中的两个 o。 |
  >| {n,}         | n 是一个非负整数。至少匹配n 次。例如，'o{2,}' 不能匹配 "Bob" 中的 'o'，但能匹配 "foooood" 中的所有 o。'o{1,}' 等价于 'o+'。'o{0,}' 则等价于 'o*'。 |
  >| {n,m}        | m 和 n 均为非负整数，其中n <= m。最少匹配 n 次且最多匹配 m 次。例如，"o{1,3}" 将匹配 "fooooood" 中的前三个 o。'o{0,1}' 等价于 'o?'。请注意在逗号和两个数之间不能有空格。 |
  >| ?            | 当该字符紧跟在任何一个其他限制符 (*, +, ?, {n}, {n,}, {n,m}) 后面时，匹配模式是非贪婪的。非贪婪模式尽可能少的匹配所搜索的字符串，而默认的贪婪模式则尽可能多的匹配所搜索的字符串。例如，对于字符串 "oooo"，'o+?' 将匹配单个 "o"，而 'o+' 将匹配所有 'o'。 |
  >| .            | 匹配除换行符（\n、\r）之外的任何单个字符。要匹配包括 '\n' 在内的任何字符，请使用像"**(.\|\n)**"的模式。 |
  >| (pattern)    | 匹配 pattern 并获取这一匹配。所获取的匹配可以从产生的 Matches 集合得到，在VBScript 中使用 SubMatches 集合，在JScript 中则使用 $0…$9 属性。要匹配圆括号字符，请使用 '\(' 或 '\)'。 |
  >| (?:pattern)  | 匹配 pattern 但不获取匹配结果，也就是说这是一个非获取匹配，不进行存储供以后使用。这在使用 "或" 字符 (\|) 来组合一个模式的各个部分是很有用。例如， 'industr(?:y\|ies) 就是一个比 'industry\|industries' 更简略的表达式。 |
  >| (?=pattern)  | 正向肯定预查（look ahead positive assert），在任何匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如，"Windows(?=95\|98\|NT\|2000)"能匹配"Windows2000"中的"Windows"，但不能匹配"Windows3.1"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
  >| (?!pattern)  | 正向否定预查(negative assert)，在任何不匹配pattern的字符串开始处匹配查找字符串。这是一个非获取匹配，也就是说，该匹配不需要获取供以后使用。例如"Windows(?!95\|98\|NT\|2000)"能匹配"Windows3.1"中的"Windows"，但不能匹配"Windows2000"中的"Windows"。预查不消耗字符，也就是说，在一个匹配发生后，在最后一次匹配之后立即开始下一次匹配的搜索，而不是从包含预查的字符之后开始。 |
  >| (?<=pattern) | 反向(look behind)肯定预查，与正向肯定预查类似，只是方向相反。例如，"`(?<=95|98|NT|2000)Windows`"能匹配"`2000Windows`"中的"`Windows`"，但不能匹配"`3.1Windows`"中的"`Windows`"。 |
  >| (?<!pattern) | 反向否定预查，与正向否定预查类似，只是方向相反。例如"`(?<!95|98|NT|2000)Windows`"能匹配"`3.1Windows`"中的"`Windows`"，但不能匹配"`2000Windows`"中的"`Windows`"。 |
  >| x\|y         | 匹配 x 或 y。例如，'z\|food' 能匹配 "z" 或 "food"。'(z\|f)ood' 则匹配 "zood" 或 "food"。 |
  >| [xyz]        | 字符集合。匹配所包含的任意一个字符。例如， '[abc]' 可以匹配 "plain" 中的 'a'。 |
  >| [^xyz]       | 负值字符集合。匹配未包含的任意字符。例如， '[^abc]' 可以匹配 "plain" 中的'p'、'l'、'i'、'n'。 |
  >| [a-z]        | 字符范围。匹配指定范围内的任意字符。例如，'[a-z]' 可以匹配 'a' 到 'z' 范围内的任意小写字母字符。 |
  >| [^a-z]       | 负值字符范围。匹配任何不在指定范围内的任意字符。例如，'[^a-z]' 可以匹配任何不在 'a' 到 'z' 范围内的任意字符。 |
  >| \b           | 匹配一个单词边界，也就是指单词和空格间的位置。例如， 'er\b' 可以匹配"never" 中的 'er'，但不能匹配 "verb" 中的 'er'。 |
  >| \B           | 匹配非单词边界。'er\B' 能匹配 "verb" 中的 'er'，但不能匹配 "never" 中的 'er'。 |
  >| \cx          | 匹配由 x 指明的控制字符。例如， \cM 匹配一个 Control-M 或回车符。x 的值必须为 A-Z 或 a-z 之一。否则，将 c 视为一个原义的 'c' 字符。 |
  >| \d           | 匹配一个数字字符。等价于 [0-9]。                             |
  >| \D           | 匹配一个非数字字符。等价于 [^0-9]。                          |
  >| \f           | 匹配一个换页符。等价于 \x0c 和 \cL。                         |
  >| \n           | 匹配一个换行符。等价于 \x0a 和 \cJ。                         |
  >| \r           | 匹配一个回车符。等价于 \x0d 和 \cM。                         |
  >| \s           | 匹配任何空白字符，包括空格、制表符、换页符等等。等价于 [ \f\n\r\t\v]。 |
  >| \S           | 匹配任何非空白字符。等价于 [^ \f\n\r\t\v]。                  |
  >| \t           | 匹配一个制表符。等价于 \x09 和 \cI。                         |
  >| \v           | 匹配一个垂直制表符。等价于 \x0b 和 \cK。                     |
  >| \w           | 匹配字母、数字、下划线。等价于'[A-Za-z0-9_]'。               |
  >| \W           | 匹配非字母、数字、下划线。等价于 '[^A-Za-z0-9_]'。           |
  >| \xn          | 匹配 n，其中 n 为十六进制转义值。十六进制转义值必须为确定的两个数字长。例如，'\x41' 匹配 "A"。'\x041' 则等价于 '\x04' & "1"。正则表达式中可以使用 ASCII 编码。 |
  >| \num         | 匹配 num，其中 num 是一个正整数。对所获取的匹配的引用。例如，'(.)\1' 匹配两个连续的相同字符。 |
  >| \n           | 标识一个八进制转义值或一个向后引用。如果 \n 之前至少 n 个获取的子表达式，则 n 为向后引用。否则，如果 n 为八进制数字 (0-7)，则 n 为一个八进制转义值。 |
  >| \nm          | 标识一个八进制转义值或一个向后引用。如果 \nm 之前至少有 nm 个获得子表达式，则 nm 为向后引用。如果 \nm 之前至少有 n 个获取，则 n 为一个后跟文字 m 的向后引用。如果前面的条件都不满足，若 n 和 m 均为八进制数字 (0-7)，则 \nm 将匹配八进制转义值 nm。 |
  >| \nml         | 如果 n 为八进制数字 (0-3)，且 m 和 l 均为八进制数字 (0-7)，则匹配八进制转义值 nml。 |
  >| \un          | 匹配 n，其中 n 是一个用四个十六进制数字表示的 Unicode 字符。例如， \u00A9 匹配版权符号 (?)。 |

  

+ 修饰符

+ ```tex
  i m g
  i ignoreCase 忽略单词大小写
  m 可以进行多行匹配
  g 全局匹配
  /A/i.test('lala')
  ```

  **量词元字符**

  | 元字符 | 描述         | 备注           |
  | ------ | ------------ | -------------- |
  | *      | 0到多次      |                |
  | +      | 1 到多次     |                |
  | ?      | 出现一到多次 | 至少出现一次   |
  | {n}    | 出现n 次     | n 是0 或正整数 |
  | {n,}   | 出现n 到多次 | 至少出现n 次   |
  | {n,m}  | 出现n到m 次  | 包含n , m      |

  **特殊元字符	**

  > 单个或 组合在一起代表特殊的含义

  

  | 元字符 | 描述                                | 备注                      |
  | ------ | ----------------------------------- | ------------------------- |
  | \      | 转义字符                            | 普通到特殊 或者特殊到普通 |
  | .(点)  | 除（\n）换行符 以外的任意字符       |                           |
  | ^      | 以哪一个字符作为开始                |                           |
  | $      | 以哪一个字符作为结束                |                           |
  | \n     | 换行符                              |                           |
  | \d     | 0-9 之间的数字                      |                           |
  | \D     | 非0-9 之间的数字                    |                           |
  | \w     | 数字 字母 下划线 中的任意一个字符   |                           |
  | \W     | 非 数字 字母下划线 中的任意一个字符 |                           |
  | \s     | 一个空白符                          | 包含制表符 空格换页符     |
  | \t     | 一个制表符                          | 一个tab 4个空格           |
  | \b     | 匹配一个单词的边界                  |                           |
  | x\|y   | x 或者y                             | \| 代表或者的意思 1\|5\|9 |
  | [xyz]  | x或者y或者z 中的一个字符            | [adghve]                  |
  | [^xyz] | 除了xyz 以外的字符                  | [^] 表示非                |
  | [a-z]  | 指定 a 到 z 之间的一个字符          | [0-9a-zA-Z_] === \w       |
  | [^a-z] | 除了a-z 以外的任意一个字符          |                           |
  | （）   | 分组                                |                           |
  | （?:） | 只匹配 不捕获                       |                           |
  | （?=） | 正向预查                            |                           |
  | （?!） | 负向预查                            |                           |

  **普通元字符**

  > 代表本身含义的

  | 正则     | 描述                    | 备注 |
  | -------- | ----------------------- | ---- |
  | /lesson/ | 此正则匹配的就是 lesson |      |

  **元字符详细解析**

  `^ $`

  ```javascript
  let reg = /^\d/; // 以数字开始
  reg.test('lesson') //=> false
  reg.test('2019lesson') //=> true
  reg.test('lesson2019') //=> false
  ```

  ```javascript
  let reg = /^\d$/; // 以数字开始
  reg.test('lesson') //=> false
  reg.test('2019lesson') //=> false
  reg.test('lesson2019') //=> true		
  ```

  ```javascript
  let reg = /\d+/ //=> 包含数字就ok
  ```

  ```javascript
  let reg = /^\d+$/; // 字符串只能是 以数字开头和结尾 非负整数
  //=> 验证手机号(11为)
  let reg = /^1\d{10}$/ // 只能是 1加 10 为数字
  ```

  `\`

  ```
  let reg = /^2.3$/;  // (. 点 除了换行符以外的任意字符)
  let reg = /^2\.3/; 转义字符 只能是小数点
  let str = '\d'
  let reg = /^\\d$/; reg.test('\\d') true // 字符串存在元字符也要转义
  ```

  `x|y`

  ```javascript
  let reg = /^18|29$/;
  // 直接 x|y 会存在很乱的优先级问题 一般我们写的时候 都伴随着 小括号 进行分组 因为小括号 改变处理的优先级 
  reg.test(18);
  reg.test(29);
  reg.test(129);
  reg.test(189);
  reg.test(829);
  reg.test(182);
  // 以上全是true 
  let reg = /^(18|29)$/; // 表示只能是 18 或29
  reg.test(18); // true
  reg.test(29); // true
  reg.test(129); // false
  reg.test(189); // false
  reg.test(829); // false
  reg.test(182); // false
  ```

  `[]`

  ```javascript
  // 1 中括号中出现的字符 一般都代表 本身的含义
  let reg = /^[@+]+$/ //=> @或者+ 出现一次多则多次
  reg.test('@')// true
  reg.test('@+')// true
  reg.test('@@') // false
  
  reg = /^[\d]$/ // => 表示 以一位数字开头的数字
  reg.test('d') //=> false
  reg.test('\\') //=> false
  reg.test('9') //=> true
  
  reg = /^[\\d]$/ // => 表示 以 '\'或者 'd' 中的一个
  
  //2 中括号当中 不存在多位数
  reg = /^[18]$/ //=> 表示 1或者8 的数字
  reg.test(1) // true
  reg.test(8) // true
  reg.test(18) // false
  
  // 编写 一个 10 到39 的数 千万不能这样玩
  reg = /[10-39]/ //=> 1 或者 0-3  或者9 
  reg.test(1) //=> true
  reg.test(2) //=> true
  reg.test(0) //=> true
  reg.test(9) //=> true
  reg.test(10) //=> false
  
  
  
  ```

  **常用的正则表达式**

  1. 验证是否为有效数字

     [有效数字](https://baike.baidu.com/item/%E6%9C%89%E6%95%88%E6%95%B0%E5%AD%97/406066?fr=aladdin)

     ```javascript
     /*
     * 规则 
     * 1. 可能出现 + - 号 也可能不出现 [+-]?
     * 2. 一位 0-9 都可以 多为 首位不能为0 (\d|([1-9]\d+))
     * 3、 小数位置可能有可能没有, 一旦有后面必须有小数点加数字(\.\d+)?
     */
     
     //let reg /^(+|-)?$/
     let reg = /^[+-]?(\d|([1-9]\d+))(\.\d+)?$/; 简单版正则
     
     
     ```

  2. 验证密码

     ```javascript
     //=> 数字字母下划线
     //=> 6-16位
     let reg = /^\w{6,16}$/ //数字字母下划线
     reg.test(userPasswordValue)
     
     ```

  3. 验证真实姓名

     ```javascript
     /*
     * 1. 汉字 /^[\u4E00-\u9FA5]$/ 中文汉字 unicode 的编码值范围
     * 2. 名字长度 2-10位 
     * 3. 可能有译名 ·汉字
     **********/
     "尼古拉斯·lesson"
     let reg = /^[\uE400-\urFA5]{2-10}(·[\u4E00-\u9FA5]){2-10}{0-2}$/ 
     
     ```

  4. 验证邮箱

     ```javascript
     /*
     * 邮箱
     * 分析 别人的邮箱正则
     * 1. 以数字字母下划线 开头 \w  一到多位
     * 2. 还可以是 - 数字字母下划线一到多位  或者 .数字字母下划线 一到多位 整体1到多次((-\w+)|(\.\w+))* li-sen li.sen  都是合法的
     * 3. @后面 A-Za-z0-9出现1次到多次  点 或者 - 数字字母下划线   整体0到多次 这里是 为了处理 对 @的补充 例如 lesson@lesson.com.cn
     * 4. \.[A-Za-z0-9] 匹配的是域名 .cn
     */
     
     let reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
     
     
     ```

  5. 身份证号码

     ```javascript
     /*
     *规则： 
     *1. 第二代身份证号码 统一 18位
     *2. 最后一位可能是 大写的X*(代表10)
     *
     * 身份证前6位 代表省市县
     * 中间8位 年月日
     * 最后四位
     * 最后一位 X 或者数字
     * 倒数第二位 偶数为女 奇数为 男
     * 其余的是经过算法算出来的值
     */
     let reg = /^\d{17}(\d|X)$/ 简易版
     // 小括号的第一个作用 分组 第二个 分组捕获 不仅可以把大正则匹配的信息 捕获到 还可以单独捕获 每个小分组的内容
     reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/
     reg.exec(412823199610156019) /**=>  分组捕获
     0: "412823199610156019" 
     1: "412823"
     2: "1996"
     3: "10"
     4: "15"
     5: "1"
     6: "9"
     groups: undefined
     index: 0
     input: "412823199610156019"
     length: 7
     **/
     ```

     **构造函数和字面量创建正则的区别**

     ```javascript
     let reg = /\d+/g;
     reg = new RegExp('\\d+','g') // 构造函数因为传递的是字符串 所以’\‘表示的普通斜线 所以需要转义
     //=> 正则表达式中的部分内容是变量存储的值
     // 1个斜线中间包起来的都是元字符(如果正则中要包含某个变量的值, 那么就不能使用字面量方式创建正则)
      let name = "lesson"
     reg = /^@"+name+"@$/; //表示的是 以'@" '开头出现一到多次 以name的e 可以出现多次 以 "@ 结尾 
     reg.test('@lesson@') //=> false
     reg.teset('@"nameeee"@') => true 
     //2 这种情况只能使用构造函数方式 因为他传递的是字符串, 只有这样才能进行字符串拼接
     let reg2 = new RegExp('^@'+name+'@$')
     reg2.test('@lesson@')//=> true
     
     ```
---

**正则的捕获**

>实现正则捕获的方法
>
>+ 正则RegExp.prototype上的方法
>  + exec
>  + test
>+ 字符串String.prototype 上支持正则表达式处理的方法
>  + replace
>  + match
>  + splite
>  + ...

```javascript
let str = "zhufeng2029yangfanqihang2021";
let reg = /\d+/ //连续出现多个数字
/*
* 基于exec 实现正则的捕获
* 	1.	捕获到的内容
*    	第一项 本次捕获到的内容
*    	其余项：对应小分组本次单独捕获的内容
*		index: 当前捕获内容在字符串中的起始索引
*		input: 原始字符串
*	2.	每执行一次 exec, 只能捕获到一个符合正则规则的, 但是默认情况下我们执行很多次， 获取的结果永远只是第一个匹配到的吗，其余的捕获不到 =》 正则捕获的懒惰性; 默认只捕获第一个
*	
* 
*/
//=> 实现正则捕获的前提是： 当前正则要和字符串匹配, 如果不匹配捕获的结果就是null
reg.exec(str);//=>["2029", index: 7, input: "zhufeng2029yangfanqihang2021", groups: undefined]0: "2029"groups: undefinedindex: 7input: "zhufeng2029yangfanqihang2021"length: 1

```

**正则捕获的懒惰性原因**

```javascript
let str = "zhufeng2029yangfanqihang2021";
let reg = /\d+/ //连续出现多个数字
/*
* reg.lastIndex 当前正则下一次匹配的起始索引位置
* 懒惰原因: 默认情况下lastIndex 的值不会被修改, 每一次都是从字符串开始位置查找, 所以查到的永远只是第一个
* 解决办法全局修饰符g
*	
***********/
reg.lastIndex; //=>0 下面匹配捕获是从 str 索引零的位置开始查找
reg.exec(str) 
reg.lastIndex //=> 第一次捕获完成 lastIndex 没有改变 所以下一次exec 依然是从字符串开始找, 找到的永远是第一个匹配到的，

// 解决方法
reg.lastIndex = 11 
reg.exec(str) // 返回结果还是原来的 原因是我们只是修改了一个值 并没有进入到查找机制当中去

// 设置修饰符 g
let reg2 = /\d+/g
reg2.exec(str)
reg2.lastIndex  // 11
reg2.exec(str) 
reg2.lastIndex //22
reg2.exec(str) 
reg2.lastIndex //32
当 reg2.exec(str) // null 此时reg.lastIndex 会被置为初始值0 再次捕获 又从第一个开始了

const str = 'zhufeng2029yangfanqihang2021'
const reg = /\d+/g // 连续出现多个数字

if (reg.test(str)) { // 第一次匹配就会修改到 lastIndex  因此下一次捕获就就不会重头开始
  //= > 验证一下: 只有正则和字符串匹配我们在捕获
  reg.exec(str)
}


if (reg.test(str)) {
  reg.lastIndex = 0
  reg.exec(str) 这样玩是可以的
}

// 扩展一个方法 可以execAll 全部执行
function exeaAll(str){
    if(!this.global) return this.exec(str)
    let arr = []
    let res = this.exec(str)
    
    while(res) {
        arr.push(res[0])
        res = this.exec(str)
    }
    return ary.length === 0 ? null : ary
}
RegExp.prptotype.execAll = execAll

// 字符串中match 可以实现这个方法 原理相同  前提都是正则设置全局匹配
	str.match(reg)


```

 **正则的分组捕获**

```javascript
//=> 身份证号码
//?: 正匹配 不捕获
let str = '412823199610156019'
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(\d|X)$/
reg.exec(str) // 与下面得到结果都一样
str.metch(reg)、
/*0: "412823199610156019" // 整体匹配到的内容
1: "412823" 第一个分组
2: "1996" 第二个分组
3: "10" 第三个分组
4: "15"第四个分组
5: "1" 第五个分组
6: "9"第六个分组
groups: undefined
index: 0
input: "412823199610156019"
length: 7
//=> 第一项 大正则的匹配的结果
//=> 其余项: 每一个分组单独匹配的结果
//=> 最后一个我不需要分组 ?: 只匹配不捕获  因为优先级问题 我还必须要一个 括号 但是我就是不想捕获 ?:
let reg = /^(\d{6})(\d{4})(\d{2})(\d{2})\d{2}(\d)(?:\d|X)$/

*/
```

```javascript
//=> 既要捕获到 {数字}, 也想单独的把数字也获取到 例如 第一次获取到 {0} 还需要单独获取 0
let str = "{0}年{1}月{2}日"
//let reg =  /\{(\d+)\}/;
//=> 不设置修饰符 g  exec 和 match 获取的结果一致 只执行一次
let reg =  /\{(\d+)\}/;
reg.exec(str) 
str.match(reg)
 
let str = "{0}年{1}月{2}日"
let reg =  /\{(\d+)\}/g;
reg.exec(str) // "{0}", "0", index: 0, input: "{0}年{1}月{2}日", groups: undefined]
str.match(reg) //["{0}", "{1}", "{2}"]
// 多次匹配的情况下 match 只能把大正则匹配的内容 获取到 小分组匹配的信息无法获取
let aryBig =[]
let arySmall = []
let res = reg.exec(str)
while(res) {
	let  [big, small] = res
	aryBig.push(big)
    arySmall.push(small)
    res = reg.exec(str)
}
console.log(aryBig, arySmall) //["{0}", "{1}", "{2}"]0: "{0}"1: "{1}"2: "{2}"length: 3__proto__: Array(0) (3) ["0", "1", "2"]


```

**分组引用**

```javascript
// 分组的第三个作用 '分组引用'
let str = 'book' //=> good foot moon look soon ...
let reg = /^[a-zA-Z]([a-zA-Z])\1[a-zA-Z]$/; // 分组引用就是通过 "\数字"让其代表对分组出现一模一样的内容
reg.test('book') // true
reg.test('soon') // true
reg.test('deep') // true
reg.test('demo') // false
```

**正则捕获的贪婪性**

```javascript
/*
* 贪婪性 
* 正则捕获的时候 是按照正则匹配的最长结果来获取的
* 	1. 在量词后面添加 '?'元字符 取消贪婪性
*/
let str = "李森2010@2021学习"
let reg = /\d+/g 
str.match(reg) // ["2010", "2021"] // 为什么捕获的是 不是 2 0 1 0 2 0 2 1 贪婪性
//=> 取消正则捕获的贪婪性 在量词元字符后面 设置 ？号 取消捕获时候的贪婪性
reg = /\d+?/g

```

+ 问号左边是非量词元字符 ： 本身出现0 - 1 次
+ 问号左面是量词元字符: 取消捕获的贪婪性
+ (?:) : 只匹配不捕获
+ (?=): 正向预查
+ (?!) : 负向预查

**其他正则捕获的方法**

1. test 也能捕获 （本意是匹配）

```javascript
let str = "{0}年{1}月{2}日"
// 使用分组捕获  RegExp.$_(0-9) 才会挂载值
let reg = /\{(\d+)\}/g
reg.test(str) //=> true
console.log(reg.test(str)) //=> true
console.log(RegExp.$1)  //0  // 每次匹配上之后会挂载到 RegExp.$_(0-9)  
// 关于 $1 没有实现不知道为啥
```

2. replace 字符串中 实现替换的方法 一般都是伴随正则一起使用的 [replace](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

   ```javascript
   let str = 'lisen@2019|lisen@2020'
   //=> 把lisen 换成 汉字李森
   str = str.replace('lisen','李森') //=> 只会替换第一个
   str = str.replace(/lisen/g, 'lisen')
   
   // 要求把 lisen 换成 lisen帅
   let str = 'lisen@2019|lisen@2020'
   str = str.replace('lisen','lisen帅')
   str = str.replace('lisen','lisen帅') // "lisen帅帅@2019|lisen@2020"  
   /*分析上面造成的原因*
   * replace() 方法返回一个由替换值（replacement）替换部分或所有的模式（pattern）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果pattern是字符串，则仅替换第一个匹配项。
   * 第一次替换 'lisen帅@2019|lisen@2020'
   * 第二次替换 'lisen帅@2019|lisen@2020' 在这个基础上在匹配 'lisen帅帅@2019|lisen@2020'
   * 第三次替换  ...
   **/
   // 正则处理
   str =  str.replace(/lisen/g, 'lisen帅')
   
   ```

   **案例： 把时间字符串进行处理**

   ```javascript
   let time = '2021-04-03' //=> 2021年04月03日
   let reg = /^(\d{4})-(\d{1,2})-(\d{1,2})$/g
   time = time.replace(reg, '$1年$2月$3日') //=> "2021-04-03"
   /*原理分析
   *  1. 首先拿reg 和time 进行捕获匹配, 能匹配几次就会把传递的函数执行几次(而且是匹配一次就执行一次)
   *  2. 不仅把方法执行了 replace 还给方法传递了 实参信息 和exec 捕获的内容一致的信息  大正则匹配的信息 和小分组匹配的信息
   *  3. 函数中我们返回的是什么 就把当前大正则匹配的内容替换成啥
   *******/
   time = time.replace(reg, (big, ...arg)=>{
      let [$1, $2, $3] = arg
      return `${$1}年${$2}月${$3}日`
   })
   
   ```

   **单词首字母大写**

   ```javascript
   let str = "good good study study day day up";
   let reg = /\b([a-zA-Z])[a-zA-Z]*\b/g
   //=> 函数执行了七次 ，每一次都把正则匹配信息传递给函数 
   //=> 每一次 [good g] 第二次 [good, g] 第三次 [study s]
   str = str.replace(reg, (...arg)=> {
       let [content, $1] = arg
       $1 = $1.toUpperCase()
       content = content.substring(1)
       return $1+content
   })
   
   ```

   **验证一个字符串中出现 次数最多**

   ```javascript
   let str =  'lessonlisen'
   
   /*
   * ===去重思维 往对象里存===*/
   const obj = {};
   [].forEach.call(str, (item) => {
     // eslint-disable-next-line eqeqeq
     // console.log(obj[item])
     if (obj[item] === undefined) {
       obj[item] = 1
     } else {
       obj[item]++
     }
   })
   let max = 1
   const res = []
   for (const key in obj) {
     const item = obj[key]
     item > max ? max = item : null
   }
   
   for (const key in obj) {
     const item = obj[key]
     if(item === max) {
       res.push(key)
     }
   }
   console.log(res)
   
   /*
   * ===排序 ===*/
   /*
   * str.split('') 转换成数组
   * sort((a, b) => a.localeCompare(b)) 数组的 字母排序
   https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
   * .join('') 数组转为字符串 
   * arr.sort((a, b) => a.length - b.length) // a-b 降序 以数组长度降序排列
   * 
   *
   *****/
   let str =  'lessonlisen'
   str = str.split('').sort((a, b) => a.localeCompare(b)).join('')
   
   const reg = /([a-zA-Z])\1+/g
   const arr = str.match(reg) // 分组捕获以数组形式返回
   arr.sort((a, b) => a.length - b.length) // a-b 降序
   console.log(arr.pop().substring(0,1))
   
   
   
   ```

   **时间字符串格式化**

   ```JavaScript
   ~(function () {
     function formatTime2 (template) {
       const timeArr = this.match(/\d+/g)// 将匹配到的数字存放到数组中
       template = template.replace(/\{(\d+)\}/g, (...arg) => {
         const [content, $1] = arg
   
         let time = timeArr[$1] || '00'
         time.length < 2 ? time = '0' + time : time
         return time
       })
       // console.log(template)
       return template
     }
   
     ['formatTime2'].forEach((item) => {
       String.prototype[item] = eval(item)
     })
   }())
   const time = '2020年6月12日 12时12分32秒'
   console.log(time.formatTime2('{0}-{1}-{2} {3}-{4}-{5}'))
   ```

   **queryURLParams**

   ```javascript
   ~function() {
   	function queryURLParams(params) {
   		this.replace(/([^?=#&]+)=([^?=#&]+)/g, (...[, $1, $2])=> obj[$1] = $2)
   		// 处理hash
   		this.replace(/#([?#&=]+)/g, (...[, $1])=>obj['hash'] = $1)
   		retutn params? obj[params]:obj
   	}
   	['queryURLParams'].forEach(item => String.prototype[item] = eval(item))
   }()
   const url = 'http://www.baidu.com/?name=lisen&age=19#video'
   console.log(url.queryURLParams('hash')
   
   ```

   