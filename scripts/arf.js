	// Définition des dimensions et des marges du graphique
	var margin = { top: 20, right: 120, bottom: 20, left: 140 },
		width = 960 - margin.right - margin.left,
		height = 800 - margin.top - margin.bottom;

	var i = 0,
		duration = 750,
		root;

	var tree = d3.layout.tree().size([height, width]);

	var diagonal = d3.svg.diagonal().projection(function (d) {
		return [d.y, d.x];
	});

	var svg = d3
		.select("#tree-container")
		.append("svg")
		.attr("width", width + margin.right + margin.left)
		.attr("height", height + margin.top + margin.bottom)
		.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	d3.json("arf.json", function (error, flare) {
		if (error) throw error;

		root = flare;
		root.x0 = height / 2;
		root.y0 = 0;

		function collapse(d) {
			if (d.children) {
				d._children = d.children;
				d._children.forEach(collapse);
				d.children = null;
			}
		}

		root.children.forEach(collapse);
		update(root);
	});

	function update(source) {
		// Compute the new tree layout.
		var nodes = tree.nodes(root).reverse(),
			links = tree.links(nodes);

		// Normalize for fixed-depth.
		nodes.forEach(function (d) {
			d.y = d.depth * 180;
		});

		// Update the nodes…
		var node = svg.selectAll("g.node").data(nodes, function (d) {
			return d.id || (d.id = ++i);
		});

		// Enter any new nodes at the parent's previous position.
		var nodeEnter = node
			.enter()
			.append("g")
			.attr("class", "node")
			.attr("transform", function (d) {
				return "translate(" + source.y0 + "," + source.x0 + ")";
			})
			.on("click", click);

		nodeEnter
			.append("circle")
			.attr("r", 1e-6)
			.style("fill", function (d) {
				return d._children ? "lightsteelblue" : "#fff";
			});

		nodeEnter
			.append("text")
			.attr("x", function (d) {
				return d.children || d._children ? -13 : 13;
			})
			.attr("dy", ".35em")
			.attr("text-anchor", function (d) {
				return d.children || d._children ? "end" : "start";
			})
			.text(function (d) {
				return d.name;
			})
			.style("fill-opacity", 1e-6);

		// Transition nodes to their new position.
		// ... Transition code for node updating ...

		// Update the links…
		var link = svg.selectAll("path.link").data(links, function (d) {
			return d.target.id;
		});

		// Enter any new links at the parent's previous position.
		// ... Link entering and updating ...

		// Stash the old positions for transition.
		nodes.forEach(function (d) {
			d.x0 = d.x;
			d.y0 = d.y;
		});
	}

	// Toggle children on click.
	function click(d) {
		if (d.children) {
			d._children = d.children;
			d.children = null;
		} else if (d._children) {
			d.children = d._children;
			d._children = null;
		}
		update(d);
	}

