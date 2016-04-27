var green = '#009A31',
    red = '#E8110F',
    blue = '#008CBA';
    green_dark = '#0A803B';
    green_light = '#8CC63F';
    red_dark = '#BF1E2D';
    red_light = '#FF3333';
    blue_dark = '#1EA8CF';
    blue_light = '#227FB0';

//------------------------------------------------------------------------------
// http://bl.ocks.org/mbostock/7607535
//------------------------------------------------------------------------------
function zoomCircle(div_id) {
  var margin = 10,
      diameter = 1200;
  var pack = d3.layout.pack()
      .padding(2)
      .size([diameter - margin, diameter - margin])
      .value(function(d) { return d.size; })
  var svg = d3.select(div_id).append("svg")
      .attr("width", diameter)
      .attr("height", diameter)
    .append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  // d3.json("flare.json", function(error, root) {
  //   if (error) throw error;
    var root = dendrogram_data;

    var focus = root,
        nodes = pack.nodes(root),
        view;

    var circle = svg.selectAll("circle")
        .data(nodes)
      .enter().append("circle")
        .attr("class", function(d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
        // .style("fill", function(d) { return d.children ? color(d.depth) : null; })
        .style("fill", function (d) { return d.color; })
        .on("click", function(d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

    var text = svg.selectAll("text")
        .data(nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("fill-opacity", function(d) { return d.parent === root ? 1 : 0; })
        .style("display", function(d) { return d.parent === root ? "inline" : "none"; })
        .text(function(d) { return d.name; });

    var node = svg.selectAll("circle,text");

    d3.select(div_id)
        .on("click", function() { zoom(root); });

    zoomTo([root.x, root.y, root.r * 2 + margin]);

    function zoom(d) {
      var focus0 = focus; focus = d;

      var transition = d3.transition()
          .duration(d3.event.altKey ? 7500 : 750)
          .tween("zoom", function(d) {
            var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
            return function(t) { zoomTo(i(t)); };
          });

      transition.selectAll("text")
        .filter(function(d) { return d.parent === focus || this.style.display === "inline"; })
          .style("fill-opacity", function(d) { return d.parent === focus ? 1 : 0; })
          .each("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
          .each("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }

    function zoomTo(v) {
      var k = diameter / v[2]; view = v;
      node.attr("transform", function(d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
      circle.attr("r", function(d) { return d.r * k; });
    }
  // });

  d3.select(self.frameElement).style("height", diameter + "px");

}

//------------------------------------------------------------------------------
// banimated drop down
// http://bl.ocks.org/mbostock/2966094
//------------------------------------------------------------------------------

var tree_step_data = {
  "name": "Nutrition",
  "body_short": '1862dsfsd sdfsdfsd  fsdfsdfsfsafasfsad fsdf fsfsdfsfsad fsafs dfasfsfsadf sdf  fsd fsdf sfsd',
  "died": 1906,
  "location": "Petersburg, VA",
  "parents": [
    {
      "name": "James Shanks",
      "body_short": 1831,
      "died": 1884,
      "location": "Petersburg, VA",
      "parents": [
        {
          "name": "Robert Shanks",
          "body_short": 1781,
          "died": 1871,
          "location": "Ireland/Petersburg, VA",
          "parents": [
            {
              "name": "bum",
              "body_short": 1795,
              "died": 1871,
              "location": "Ireland/Petersburg, VA"
            },
            {
              "name": "Edfsdfsd",
              "body_short": 1795,
              "died": 1871,
              "location": "Ireland/Petersburg, VA"
            }
          ]
        },
        {
          "name": "Elizabeth Shanks",
          "body_short": 1795,
          "died": 1871,
          "location": "Ireland/Petersburg, VA"
        }
      ]
    },
    {
      "name": "Ann Emily Brown",
      "body_short": 1826,
      "died": 1866,
      "location": "Brunswick/Petersburg, VA",
      "parents": [
        {
          "name": "Henry Brown",
          "body_short": 1792,
          "died": 1845,
          "location": "Montgomery, NC"
        },
        {
          "name": "Sarah Houchins",
          "body_short": 1793,
          "died": 1882,
          "location": "Montgomery, NC"
        }
      ]
    }
  ]
}

function treeStep(div_id) {
  var margin = {top: 0, right: 320, bottom: 0, left: 0},
  width = 960 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

  var tree = d3.layout.tree()
  .separation(function(a, b) { return a.parent === b.parent ? 1 : .5; })
  .children(function(d) { return d.parents; })
  .size([height, width]);

  var svg = d3.select(div_id).append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var nodes = tree.nodes(tree_step_data);

  var link = svg.selectAll(".link")
      .data(tree.links(nodes))
    .enter().append("path")
      .attr("class", "link")
      .attr("d", elbow);

  var node = svg.selectAll(".node")
      .data(nodes)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })

  node.append("text")
      .attr("class", "name")
      .attr("x", 8)
      .attr("y", -6)
      .text(function(d) { return d.name; });

  node.append("text")
      .attr("x", 8)
      .attr("y", 8)
      .attr("dy", ".71em")
      .attr("class", "about lifespan")
      .text(function(d) { return d.body_short + "–" + d.died; });

  node.append("text")
      .attr("x", 8)
      .attr("y", 8)
      .attr("dy", "1.86em")
      .attr("class", "about location")
      .text(function(d) { return d.location; });
}

function elbow(d, i) {
  var margin = {top: 0, right: 320, bottom: 0, left: 0};
  return "M" + d.source.y + "," + d.source.x
       + "H" + d.target.y + "V" + d.target.x
       + (d.target.children ? "" : "h" + margin.right);
}

//------------------------------------------------------------------------------
// basic cyrcle
//------------------------------------------------------------------------------
function treeBasicCyrcle(div_id) {
  var radius = 1160 / 2;
  var cluster = d3.layout.cluster()
  .size([360, radius - 120]);
  var diagonal = d3.svg.diagonal.radial()
  .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });
  var svg = d3.select(div_id).append("svg")
  .attr("width", radius * 2)
  .attr("height", radius * 2)
  .append("g")
  .attr("transform", "translate(" + radius + "," + radius + ")");


  // d3.json("/mbostock/raw/4063550/flare.json", function(error, dendrogram_data) {
  //   if (error) throw error;
  var nodes = cluster.nodes(dendrogram_data);
  var link = svg.selectAll("path.link")
  .data(cluster.links(nodes))
  .enter().append("path")
  .attr("class", "link")
  .attr("d", diagonal);
  var node = svg.selectAll("g.node")
  .data(nodes)
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })
  node.append("circle")
  .attr("r", 4.5);
  node.append("text")
  .attr("dy", ".31em")
  .attr("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
  .attr("transform", function(d) { return d.x < 180 ? "translate(8)" : "rotate(180)translate(-8)"; })
  .text(function(d) { return d.name; });
  // });
  d3.select(self.frameElement).style("height", radius * 2 + "px");
}


//------------------------------------------------------------------------------
//
//------------------------------------------------------------------------------
zoomCircle('#zoom_circle');
// treeBasicCyrcle('#dendrogram_cyrcle')
// $('#dendrogram_cyrcle').toggle();
