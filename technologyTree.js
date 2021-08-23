/**
 * 科技树组件
 * @param {数据}  = [technologyTreeData] 
 * @param {元素容器,id名}  = [technologyTree] 
 */
function technologyTree(data, eleRoot) {
	let ele = document.querySelector(eleRoot);
	if (!eleRoot || !ele) return false;
	if (data.leafs.length < 6 || data.roots.length < 3) return false;
	let boxHtml = `<div class="technologyTree">
			<div class="body"></div>
			<div class="foot"></div>
		</div>`
	ele.innerHTML = boxHtml;
	let leafLength = data.leafs.length;
	let rootLength = data.roots.length;
	let locationLeaf = null; //叶子位置
	let locationRoot = null; //跟位置
	switch (leafLength) {
		case 6:
			locationLeaf = technologyTreeLeafs.six;
			break;
		case 7:
			locationLeaf = technologyTreeLeafs.seven;
			break;
		case 8:
			locationLeaf = technologyTreeLeafs.eight;
			break;
		case 9:
			locationLeaf = technologyTreeLeafs.nine;
			break;
		case 10:
			locationLeaf = technologyTreeLeafs.ten;
			break;
		case 11:
			locationLeaf = technologyTreeLeafs.eleven;
			break;
		case 12:
			locationLeaf = technologyTreeLeafs.twelve;
			break;
		default:
			break;
	}
	switch (rootLength) {
		case 3:
			locationRoot = technologyTreeRoots.three;
			break;
		case 4:
			locationRoot = technologyTreeRoots.four;
			break;
		case 5:
			locationRoot = technologyTreeRoots.five;
			break;
		case 6:
			locationRoot = technologyTreeRoots.six;
			break;
		default:
			break;
	}
	let body = document.querySelector('.technologyTree .body');
	let foot = document.querySelector('.technologyTree .foot');
	let bodyHtml = '';
	let footHtml = '';
	data.leafs.forEach((leaf,index) => {
		bodyHtml += `
			<div style='left:${locationLeaf[index].x}px;top:${locationLeaf[index].y}px;${leaf.style};'>
				<p title='${leaf.title}' style='${leaf.titleStyle}'>${leaf.title}</p>
				<p title='${leaf.text}' style='${leaf.textStyle}'>${leaf.text}</p>
			</div>
		`
	})
	body.innerHTML = bodyHtml;
	data.roots.forEach((root,index) => {
		footHtml += `
			<div style='left:${locationRoot[index].x}px;top:${locationRoot[index].y}px;${root.style};'>
				<p title='${root.title}'>${root.title}</p>
				<p title='${root.text}'>${root.text}</p>
			</div>
		`
	})
	foot.innerHTML = footHtml;
	
}

/**
 * @param {数据}  = [technologyTreeData] 
 * @param {元素容器,id名}  = [technologyTree] 
 */
technologyTree(data, '.box');
