//We use this load the babel loader
//test: Regex is for any javascript file
module.exports = {
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader: "babel-loader"
                }
            }
        ]
    }
}