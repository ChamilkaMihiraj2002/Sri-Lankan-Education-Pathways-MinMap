const data = {
    start: [
        { id: 'ol_passed', text: 'O/L Passed', image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ol_failed', text: 'O/L Failed', image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ol_passed: [
        { id: 'al', text: 'A/L', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'vta_tech_etc_ol', text: 'Vocational Training', image: 'https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ol_failed: [
        { id: 'vta_tech_etc_ol_failed', text: 'Vocational Training', image: 'https://images.pexels.com/photos/5212353/pexels-photo-5212353.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_tech_etc_ol: [
        { id: 'vta_ol', text: 'VTA', image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technical_college_ol', text: 'Technical College', image: 'https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'jerman_tech_ol', text: 'German Tech', image: 'https://images.pexels.com/photos/8364024/pexels-photo-8364024.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'korean_tech_ol', text: 'Korean Tech', image: 'https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'naita_ol', text: 'NAITA', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hotel_school_ol', text: 'Hotel School', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_tech_etc_ol_failed: [
        { id: 'vta_olf', text: 'VTA', image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technical_college_olf', text: 'Technical College', image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'jerman_tech_olf', text: 'German Tech', image: 'https://images.pexels.com/photos/8364025/pexels-photo-8364025.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'korean_tech_olf', text: 'Korean Tech', image: 'https://images.pexels.com/photos/716277/pexels-photo-716277.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'naita_olf', text: 'NAITA', image: 'https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hotel_school_olf', text: 'Hotel School', image: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    al: [
        { id: 'al_passed', text: 'A/L Passed', image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'al_failed', text: 'A/L Failed', image: 'https://images.pexels.com/photos/3931638/pexels-photo-3931638.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'no_uni', text: 'Passed, but no University', image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    al_passed: [
        { id: 'state_uni', text: 'State Universities', image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'private_uni', text: 'Private Universities', image: 'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hnd_etc_al_passed', text: 'HND, KDU, Open Uni, etc.', image: 'https://images.pexels.com/photos/1181283/pexels-photo-1181283.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'job_abroad_al_passed', text: 'Apply Job/Abroad', image: 'https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    al_failed: [
        { id: 'retry_al_failed', text: '2nd/3rd Attempt', image: 'https://images.pexels.com/photos/4050318/pexels-photo-4050318.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'abroad_al_failed', text: 'Abroad (Job/Further Edu)', image: 'https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'private_uni_foundation_al_failed', text: 'Private Uni (Foundation)', image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'vta_tech_etc_al_failed', text: 'Vocational Training', image: 'https://images.pexels.com/photos/3992870/pexels-photo-3992870.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    private_uni: [
        { id: 'nsbm_uni', text: 'NSBM University', image: 'https://www.nsbm.ac.lk/wp-content/uploads/2021/10/nsbm-media-2-1.jpg' },
        { id: 'nibm_uni', text: 'NIBM University', image: 'https://www.nibm.lk/wp-content/uploads/2022/11/315357322_515915573898239_2346853349942207553_n.jpg' },
        { id: 'cinec_uni', text: 'CINEC Campus', image: 'https://www.cinec.edu/wp-content/uploads/2022/08/IMG_9756-scaled.jpg' },
        { id: 'sliit_uni', text: 'SLIIT', image: 'https://www.sliit.lk/wp-content/uploads/2018/03/SLIIT-malabe.jpg' }
    ],
    hnd_etc_al_passed: [
        { id: 'hnd_alp', text: 'HND', image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'kdu_alp', text: 'KDU', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'open_uni_alp', text: 'Open University', image: 'https://images.pexels.com/photos/220301/pexels-photo-220301.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'law_alp', text: 'Law College', image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ocean_alp', text: 'Ocean University', image: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_tech_etc_al_failed: [
        { id: 'vta_alf', text: 'VTA', image: 'https://images.pexels.com/photos/5905701/pexels-photo-5905701.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technical_college_alf', text: 'Technical College', image: 'https://images.pexels.com/photos/5212331/pexels-photo-5212331.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    no_uni: [
        { id: 'prof_qual_no_uni', text: 'Professional Qualifications', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'abroad_no_uni', text: 'Abroad (Job/Further Edu)', image: 'https://images.pexels.com/photos/4344860/pexels-photo-4344860.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'business_no_uni', text: 'Own Business', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'teaching_college_no_uni', text: 'Teaching College', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hnd_kdu_open_uni_law_ocean_no_uni', text: 'Diplomas / Other', image: 'https://images.pexels.com/photos/1181280/pexels-photo-1181280.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    hnd_kdu_open_uni_law_ocean_no_uni: [
        { id: 'hnd_nu', text: 'HND', image: 'https://images.pexels.com/photos/1181473/pexels-photo-1181473.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'kdu_nu', text: 'KDU', image: 'https://images.pexels.com/photos/265088/pexels-photo-265088.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'open_uni_nu', text: 'Open Univeristy', image: 'https://images.pexels.com/photos/265088/pexels-photo-265088.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'law_co_nu', text: 'Law college', image: 'https://images.pexels.com/photos/265088/pexels-photo-265088.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ocean_nu', text: 'Ocean university.', image: 'https://images.pexels.com/photos/265088/pexels-photo-265088.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    state_uni: [
        { id: 'uni_list_su', tex1t: 'University List', image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'faculties_su', text: 'Faculties', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    uni_list_su: [
        { id: 'colombo_uni', text: 'University of Colombo', image: 'https://images.pexels.com/photos/221181/pexels-photo-221181.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'peradeniya_uni', text: 'University of Peradeniya', image: 'https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'jpura_uni', text: 'University of Sri J\'pura', image: 'https://images.pexels.com/photos/1329711/pexels-photo-1329711.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'kelaniya_uni', text: 'University of Kelaniya', image: 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    faculties_su: [
        { id: 'art_faculty', text: 'Art Faculty', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'management_faculty', text: 'Management Faculty', image: 'https://images.pexels.com/photos/241687/pexels-photo-241687.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'science_faculty', text: 'Science Faculty', image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'medical_faculty', text: 'Medical Faculty', image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    // Leaf nodes
    'vta_ol': [], 'technical_college_ol': [], 'jerman_tech_ol': [], 'korean_tech_ol': [], 'naita_ol': [], 'hotel_school_ol': [],
    'vta_olf': [], 'technical_college_olf': [], 'jerman_tech_olf': [], 'korean_tech_olf': [], 'naita_olf': [], 'hotel_school_olf': [],
    'retry_al_failed': [], 'abroad_al_failed': [], 'private_uni_foundation_al_failed': [],
    'vta_alf': [], 'technical_college_alf': [],
    'nsbm_uni': [], 'nibm_uni': [], 'cinec_uni': [], 'sliit_uni': [],
    'job_abroad_al_passed': [],
    'hnd_alp': [], 'kdu_alp': [], 'open_uni_alp': [], 'law_alp': [], 'ocean_alp': [],
    'prof_qual_no_uni': [], 'abroad_no_uni': [], 'business_no_uni': [], 'teaching_college_no_uni': [],
    'hnd_nu': [], 'kdu_nu': [],
    'colombo_uni': [], 'peradeniya_uni': [], 'jpura_uni': [], 'kelaniya_uni': [],
    'art_faculty': [], 'management_faculty': [], 'science_faculty': [], 'medical_faculty': []
};

const allNodesById = {};
Object.values(data).flat().forEach(node => {
    if (node.id) allNodesById[node.id] = node;
});

const nodeTexts = {};
Object.values(allNodesById).forEach(node => {
    nodeTexts[node.id] = node.text;
});
nodeTexts['start'] = 'Start';

let currentPath = ['start'];
let isAnimating = false;
const ANIMATION_EXIT_DURATION = 300;

function updateBreadcrumb() {
    const breadcrumbContainer = document.getElementById('breadcrumbContainer');
    const breadcrumb = document.getElementById('breadcrumb');
    
    if (currentPath.length <= 1) {
        breadcrumbContainer.classList.remove('visible');
        return;
    }
    
    breadcrumbContainer.classList.add('visible');
    breadcrumb.innerHTML = '';
    
    currentPath.forEach((nodeId, index) => {
        const li = document.createElement('li');
        li.className = 'breadcrumb-item';
        
        if (index === currentPath.length - 1) {
            li.className += ' active';
            li.textContent = nodeTexts[nodeId] || nodeId;
        } else {
            li.textContent = nodeTexts[nodeId] || nodeId;
            li.onclick = () => navigateToPath(index);
        }
        
        breadcrumb.appendChild(li);
    });
}

function navigateToPath(index) {
    if (isAnimating) return;
    currentPath = currentPath.slice(0, index + 1);
    render(currentPath);
}

function navigateToNode(nodeId) {
    if (isAnimating) return;
    currentPath.push(nodeId);
    render(currentPath);
}

function render(path) {
    if (isAnimating) return;
    isAnimating = true;

    const container = document.getElementById('mindMap');
    const oldNodes = container.querySelectorAll('.node');

    oldNodes.forEach(node => node.classList.add('hidden'));

    setTimeout(() => {
        container.innerHTML = '';
        
        const lastNodeId = path[path.length - 1];
        const options = data[lastNodeId] || [];
        
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.classList.add('mindmap-lines');
        container.appendChild(svg);
        
        updateBreadcrumb();
        
        const backBtn = document.querySelector('.back-btn');
        path.length > 1 ? backBtn.classList.add('visible') : backBtn.classList.remove('visible');

        let parentDiv = null;
        if (lastNodeId !== 'start') {
            parentDiv = document.createElement('div');
            parentDiv.className = 'node current-parent-node';
            parentDiv.setAttribute('data-node-id', lastNodeId);

            const parentNodeData = allNodesById[lastNodeId];
            if (parentNodeData && parentNodeData.image) {
                const img = document.createElement('img');
                img.src = parentNodeData.image;
                img.alt = parentNodeData.text;
                parentDiv.appendChild(img);
            }
            const textSpan = document.createElement('span');
            textSpan.innerText = nodeTexts[lastNodeId] || lastNodeId;
            parentDiv.appendChild(textSpan);

            container.appendChild(parentDiv);
        }

        const childrenWrapper = document.createElement('div');
        childrenWrapper.className = 'children-wrapper';
        container.appendChild(childrenWrapper);

        options.forEach((option, index) => {
            const div = document.createElement('div');
            const hasChildren = data[option.id] && data[option.id].length > 0;
            
            div.className = 'node';
            hasChildren ? div.classList.add('clickable') : div.classList.add('leaf');
            
            div.setAttribute('data-node-id', option.id);

            if (option.image) {
                const img = document.createElement('img');
                img.src = option.image;
                img.alt = option.text;
                div.appendChild(img);
            }
            const textSpan = document.createElement('span');
            textSpan.innerText = option.text;
            div.appendChild(textSpan);

            if (hasChildren) {
                div.onclick = () => navigateToNode(option.id);
            } else {
                div.onclick = () => showEndMessage(option.text);
            }
            
            setTimeout(() => div.classList.add('visible'), index * 50);
            childrenWrapper.appendChild(div);
        });
        
        if(parentDiv) {
            setTimeout(() => parentDiv.classList.add('visible'), 0);
        }

        setTimeout(() => {
            drawConnections(container, svg, parentDiv, options);
            isAnimating = false;
        }, options.length * 50 + 200);
    
    }, ANIMATION_EXIT_DURATION);
}

function showEndMessage(pathText) {
    if (isAnimating) return;
    const message = `🎯 You've reached a final path: ${pathText}\n\nYou can use the breadcrumbs or back button to explore other options.`;
    alert(message);
}

function drawConnections(container, svg, parentNodeElement, childrenNodes) {
    svg.innerHTML = '';
    if (!parentNodeElement || childrenNodes.length === 0) return;
    
    const containerRect = container.getBoundingClientRect();

    childrenNodes.forEach(child => {
        const childNodeElement = container.querySelector(`[data-node-id="${child.id}"]`);
        if (parentNodeElement && childNodeElement) {
            const startRect = parentNodeElement.getBoundingClientRect();
            const endRect = childNodeElement.getBoundingClientRect();

            const startX = startRect.left + startRect.width / 2 - containerRect.left;
            const startY = startRect.bottom - containerRect.top;
            const endX = endRect.left + endRect.width / 2 - containerRect.left;
            const endY = endRect.top - containerRect.top;

            const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
            const controlPointOffset = Math.max(60, (endY - startY) * 0.4);
            const d = `M${startX},${startY} C${startX},${startY + controlPointOffset} ${endX},${endY - controlPointOffset} ${endX},${endY}`;
            path.setAttribute('d', d);
            
            svg.appendChild(path);
        }
    });
}

function goBack() {
    if (isAnimating || currentPath.length <= 1) return;
    currentPath.pop();
    render(currentPath);
}

render(currentPath);

window.addEventListener('resize', () => {
    if (!isAnimating) render(currentPath);
});