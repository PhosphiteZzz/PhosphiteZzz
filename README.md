# vue2.0
# iview4

## vue修饰符
### .lazy 在默认情况下，v-model 在每次 input 事件触发后将输入框的值与数据进行同步 。你可以添加 lazy 修饰符，从而转变为使用 change 事件进行同步：
#### <!-- 在“change”时而非“input”时更新 -->
#### <input v-model.lazy="msg" >

### .number 如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符
#### <input v-model.number="age" type="number">

### .trim 如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
#### <input v-model.trim='trim'>

