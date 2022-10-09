exports.default = {
    fnc: function (m, n) {
        /**
         * 建立一个对象
         * 对象存在属性name，属性值为m
         * 对象存在属性arr，属性值为一个数组 n
         * 对象存在一个函数 getName ，使用this返回对象的name属性
         * 对象存在一个函数 findMaxValue ，使用this遍历数组并返回其最大值
         * 返回该对象
         */
        var dcolor = {
            name : m,
            arr : n,
            getName : function (){
                return this.name;
            },
            findMaxValue : function (){
                var max = this.arr[0];
                for (var i = 1;i <= this.arr.length-1;i++){
                    if (max < this.arr[i]){
                        max = this.arr[i];
                    }
                }
                return max;
            },
        }
        return dcolor;
        /** */
    }
}