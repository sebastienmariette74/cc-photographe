/* Config file */

module.exports = function(eleventyConfig){
    /* Tout ce qui est ds le src est cloné ds public */
        eleventyConfig.addPassthroughCopy("./src/img")
        eleventyConfig.addPassthroughCopy("./src/css")
        eleventyConfig.addPassthroughCopy("./src/js")
        eleventyConfig.addPassthroughCopy("./src/lien")
    
        return{
            dir: {
                input: "src",
                includes : "_includes",
                output: "public"
            }
        }
    };