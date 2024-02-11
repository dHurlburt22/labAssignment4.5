// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");



  eleventyConfig.addShortcode("planetInfo", function(planetName, planetDistance){
    return `<div class="planetInfo">
        <div class="planet_name">${planetName}</div>
        <div class="planet_distance">${planetDistance}</div>
    </div>`;
  });
};

