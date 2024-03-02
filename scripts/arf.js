// Définition des dimensions et des marges du graphique
const margin = { top: 20, right: 120, bottom: 20, left: 140 },
	width = 1280 - margin.left - margin.right,
	height = 800 - margin.top - margin.bottom;

let i = 0,
	duration = 750,
	root;

// Configuration du tree layout
const tree = d3.layout.tree().size([height, width]);

// Définition de la fonction diagonale pour les liens
const diagonal = d3.svg.diagonal().projection((d) => [d.y, d.x]);

// Ajout du SVG au body du document
const svg = d3
	.select("#tree-container")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Chargement des données et gestion des erreurs
d3.json("arf.json", function (error, data) {
	if (error) {
		console.error("Erreur lors du chargement du fichier JSON:", error);
		return; // Arrête l'exécution en cas d'erreur
	}

	root = data;
	root.x0 = height / 2;
	root.y0 = 0;

	// Initialisation de l'arbre avec des nœuds repliés
	root.children.forEach(collapse);

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
	// Assignation des ID aux nœuds et inversion de l'arbre
	const nodes = tree.nodes(root).reverse(),
		links = tree.links(nodes);

	nodes.forEach((d) => (d.y = d.depth * 180));

	// Mise à jour des nœuds
	const node = svg
		.selectAll("g.node")
		.data(nodes, (d) => d.id || (d.id = ++i));

	// Entrée de nouveaux nœuds
	const nodeEnter = node
		.enter()
		.append("g")
		.attr("class", "node")
		.attr("transform", (d) => `translate(${source.y0},${source.x0})`)
		.on("click", (d) => {
			toggle(d);
			update(d);
		});

	nodeEnter
		.append("circle")
		.attr("r", 1e-6)
		.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

	// Ajout des balises <a> pour les liens
	const nodeLink = nodeEnter
		.append("a")
		.attr("xlink:href", (d) => d.url)
		.attr("target", "_blank");

	nodeLink
		.append("text")
		.attr("x", (d) => (d.children || d._children ? -10 : 10))
		.attr("dy", ".35em")
		.attr("text-anchor", (d) =>
			d.children || d._children ? "end" : "start"
		)
		.text((d) => d.name)
		.style("fill-opacity", 1);

	// Transition pour les nœuds entrants
	const nodeUpdate = node
		.transition()
		.duration(duration)
		.attr("transform", (d) => `translate(${d.y},${d.x})`);

	nodeUpdate
		.select("circle")
		.attr("r", 4.5)
		.style("fill", (d) => (d._children ? "lightsteelblue" : "#fff"));

	nodeUpdate.select("text").style("fill-opacity", 1);

	// Transition pour les nœuds sortants vers la nouvelle position du parent
	const nodeExit = node
		.exit()
		.transition()
		.duration(duration)
		.attr("transform", (d) => `translate(${source.y},${source.x})`)
		.remove();

	nodeExit.select("circle").attr("r", 1e-6);

	nodeExit.select("text").style("fill-opacity", 1e-6);

	// Mise à jour des liens
	const link = svg.selectAll("path.link").data(links, (d) => d.target.id);

	// Entrée de nouveaux liens
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

	// Transition pour les liens entrants
	link.transition().duration(duration).attr("d", diagonal);

	// Transition pour les liens sortants vers la nouvelle position du parent
	link.exit()
		.transition()
		.duration(duration)
		.attr("d", (d) => {
			const o = { x: source.x, y: source.y };
			return diagonal({ source: o, target: o });
		})
		.remove();

	// Sauvegarde des positions anciennes pour la transition
	nodes.forEach((d) => {
		d.x0 = d.x;
		d.y0 = d.y;
	});
}

// Fonction pour basculer entre les enfants et les enfants cachés
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
