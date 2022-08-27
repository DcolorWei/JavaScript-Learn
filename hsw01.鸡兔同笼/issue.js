exports.default = {
    fnc: function (m, n) {
        /**
         * m为鸡兔的头的总数，n为鸡兔的脚的总数
         * 请在两个注释间编写代码，并在return之后返回鸡的数量
         * 禁止返回蔡徐坤
         */

        var result;
        for (i = 0; i <= m; i++) {
            if (2 * i + 4 * (m - i) == n)
                result = i;
        }
        return result;
        /** */
    }
}