/* Config file */

module.exports = function(eleventyConfig){
    /* Tout ce qui est ds le src est cloné ds public */
        eleventyConfig.addPassthroughCopy("./src/img")
        eleventyConfig.addPassthroughCopy("./src/css")
    
        return{
            dir: {
                input: "src",
                output: "public"
            }
        }
    };