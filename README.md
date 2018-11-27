vue脚手架，试下本地数据MOCK，webpack4,vue-cli 2.9


# 1 编写mock文件
####      新建mock文件
    放在根目录下，mock目录下user.js,login.js等。js文件格式：modules.exports = json文件
    
####  编写读取mock的方法 
     mockApply.js(统一放在compile目录底下)
     
# 2 新建compile文件
    采用webpack4，devserver读取本地mock数据，模拟请求。
    

    compile有以下文件，主要用于编译和代理转发。
    
    -buid
       -build.js
       -check-version.js
       -utils.js
       -vue-loader.js
       -webpack.base.conf.js
       -webpack.dev.conf.js
       -webpack.prod.conf.js
    -conf
       -dev.env.js
       -index.js
       -prod.env.js
       
       
       简单解释每个文件
       
       
   index.js中配置各选项

       
    