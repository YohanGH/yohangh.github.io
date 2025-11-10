// Wait for DOM and D3 to be ready
(function() {
	function initTree() {
		// Check if D3 is loaded
		if (typeof d3 === 'undefined') {
			console.error('D3.js is not loaded');
			return;
		}

		// Check if container exists
		const container = document.getElementById('tree-container');
		if (!container) {
			console.error('Tree container not found');
			return;
		}

		// Define chart dimensions and margins
		const margin = { top: 20, right: 120, bottom: 20, left: 140 },
			width = 1200 - margin.left - margin.right,
			height = 800 - margin.top - margin.bottom;

		let i = 0,
			duration = 750,
			root;

		// Configuration du tree layout
		const tree = d3.layout.tree().size([height, width]);

		// Define the diagonal function for links
		const diagonal = d3.svg.diagonal().projection((d) => [d.y, d.x]);

		// Add SVG to document body
		const svg = d3
			.select("#tree-container")
			.append("svg")
			.attr(
				"viewBox",
				`0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`
			)
			.attr("preserveAspectRatio", "xMinYMin meet")
			.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

		// Data loading and error handling
		// Use relative path - works on GitHub Pages when arf.json is at root
		d3.json("./arf.json", function (error, data) {
			if (error) {
				console.error("Erreur lors du chargement du fichier JSON:", error);
				// Display error message to user
				d3.select("#tree-container")
					.append("div")
					.style("padding", "20px")
					.style("color", "var(--text-secondary, #cbd5e1)")
					.style("text-align", "center")
					.html("<p>Erreur lors du chargement de l'arborescence. Veuillez rafraîchir la page.</p>");
				return;
			}

			root = data;
			root.x0 = height / 2;
			root.y0 = 0;

			// Tree initialization with folded nodes
			if (root.children && root.children.length > 0) {
				root.children.forEach(collapse);
			}

			update(root);
		});

		function collapse(d) {
			if (d.children) {
				d._children = d.children;
				d._children.forEach(collapse);
				d.children = null;
			}
		}

		function update(source) {
			// Assign IDs to nodes and invert tree
			const nodes = tree.nodes(root).reverse(),
				links = tree.links(nodes);

			nodes.forEach((d) => (d.y = d.depth * 180));

			// Update the nœuds
			const node = svg
				.selectAll("g.node")
				.data(nodes, (d) => d.id || (d.id = ++i));

			// New node entry
			const nodeEnter = node
				.enter()
				.append("g")
				.attr("class", "node")
				.attr("transform", (d) => `translate(${source.y0 * 5.2},${source.x0})`)
				.on("click", (d) => {
					toggle(d);
					update(d);
				});

			nodeEnter
				.append("circle")
				.attr("r", 1e-6)
				.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

			// Add <a> tags for links
			const nodeLink = nodeEnter
				.append("a")
				.attr("xlink:href", (d) => d.url)
				.attr("target", "_blank");

			nodeLink
				.append("text")
				.attr("x", (d) => (d.children || d._children ? -13 : 13))
				.attr("dy", ".35em")
				.attr("text-anchor", (d) =>
					d.children || d._children ? "end" : "start"
				)
				.text((d) => d.name)
				.style("fill-opacity", 1);

			// Transition for incoming nodes
			const nodeUpdate = node
				.transition()
				.duration(duration)
				.attr("transform", (d) => `translate(${d.y},${d.x})`);

			nodeUpdate
				.select("circle")
				.attr("r", 4, 5)
				.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

			nodeUpdate.select("text").style("fill-opacity", 1);

			// Transition for outgoing nodes to new parent position
			const nodeExit = node
				.exit()
				.transition()
				.duration(duration)
				.attr("transform", (d) => `translate(${source.y},${source.x})`)
				.remove();

			nodeExit.select("circle").attr("r", 1e-6);

			nodeExit.select("text").style("fill-opacity", 1e-6);

			// Update the links
			const link = svg.selectAll("path.link").data(links, (d) => d.target.id);

			// New links entry
			link.enter()
				.insert("path", "g")
				.attr("class", "link")
				.attr("d", (d) => {
					const o = { x: source.x0, y: source.y0 };
					return diagonal({ source: o, target: o });
				})
				.transition()
				.duration(duration)
				.attr("d", diagonal);

			// Transition for incoming links
			link.transition().duration(duration).attr("d", diagonal);

			// Transition for outgoing links to new parent position
			link.exit()
				.transition()
				.duration(duration)
				.attr("d", (d) => {
					const o = { x: source.x, y: source.y };
					return diagonal({ source: o, target: o });
				})
				.remove();

			// Save old positions for transition
			nodes.forEach((d) => {
				d.x0 = d.x;
				d.y0 = d.y;
			});
		}

		// Function to toggle between children and hidden children
		function toggle(d) {
			if (d.children) {
				d._children = d.children;
				d.children = null;
			} else if (d._children) {
				d.children = d._children;
				d._children = null;
			}
			update(d);
		}
	}

	// Wait for DOM to be ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			// Wait a bit more for D3 to be loaded (since it's deferred)
			setTimeout(initTree, 100);
		});
	} else {
		// DOM is already ready, but D3 might not be
		setTimeout(initTree, 100);
	}
})();
