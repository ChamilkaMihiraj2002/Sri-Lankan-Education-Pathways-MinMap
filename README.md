# Educational Pathway Mind Map

## Project Overview
The **Educational Pathway Mind Map** is an interactive web application developed for the Uva Wellassa University Career Guidance Unit to assist students in exploring educational and career pathways after completing their Ordinary Level (O/L), Advanced Level (A/L), or university-level education. The application visualizes potential academic and vocational options in a dynamic, user-friendly mind map format, allowing users to navigate through various educational and professional routes with ease.

## Images
<img width="1868" height="890" alt="start" src="https://github.com/user-attachments/assets/ae9941e4-cd12-4d2f-89ef-7855bb9bf292" />
<img width="607" height="855" alt="unilist" src="https://github.com/user-attachments/assets/a5f90b11-f3d6-4a3e-993f-2ab3e464bc41" />
<img width="1417" height="892" alt="al" src="https://github.com/user-attachments/assets/5ea2b921-386f-4fa8-9086-dc792581ca70" />


## Purpose
This project aims to provide a clear and engaging tool for students to:
- Understand available educational and career options based on their academic achievements (O/L, A/L, or university level).
- Explore pathways such as vocational training, university education, professional qualifications, and job opportunities.
- Make informed decisions about their future by visualizing structured pathways and their interconnections.

## Features
- **Interactive Mind Map**: A visually appealing, hierarchical mind map that starts with three entry points: O/L, A/L, and University.
- **Dynamic Navigation**: Users can click on nodes to explore sub-paths, with smooth animations for transitions between levels.
- **Breadcrumb Trail**: Displays the current path, allowing users to navigate back to previous levels easily.
- **Back Button**: Facilitates quick navigation to the previous level in the hierarchy.
- **Visual Connections**: SVG lines connect parent and child nodes, enhancing the visual representation of pathways.
- **Responsive Design**: Adapts to different screen sizes, ensuring accessibility on desktops, tablets, and mobile devices.
- **End-of-Path Alerts**: Notifies users when they reach a terminal node (leaf) with no further options, summarizing their selected path.

## Technologies Used
- **HTML5**: Structures the web page and mind map container.
- **CSS3**: Styles the nodes, breadcrumb, and animations for a polished user interface.
- **JavaScript**: Powers the logic for rendering the mind map, handling navigation, and drawing connections between nodes.
- **SVG**: Used for rendering smooth, curved lines connecting parent and child nodes.

## Data Structure
The mind map is driven by a JavaScript object (`data`) that organizes educational and career pathways into a hierarchical structure. Key entry points include:
- **O/L**: Branches into O/L Passed (leading to A/L or vocational training) and O/L Failed (leading to vocational training).
- **A/L**: Branches into A/L Passed (leading to universities or other options), A/L Failed (leading to retries or alternative paths), and Passed but no University (leading to professional qualifications or other options).
- **University**: Branches into State Universities (with specific institutions and faculties) and Private Universities (e.g., NSBM, SLIIT).

Each node contains an `id`, `text` (label), and `image` (visual representation), with leaf nodes representing final career or educational outcomes.

## Usage
1. **Access the Application**: Open `index.html` in a web browser.
2. **Navigate the Mind Map**:
   - Start at the root level with O/L, A/L, or University options.
   - Click on a node to explore its sub-options.
   - Use the breadcrumb trail or back button to navigate backward.
3. **Explore Terminal Nodes**: Reaching a leaf node triggers an alert summarizing the selected path.
4. **Responsive Interaction**: Resize the browser window to see the mind map adapt to different screen sizes.

## Setup Instructions
1. **Clone or Download**: Obtain the project files, including `index.html` and the embedded JavaScript and CSS.
2. **Host Locally**: Place the files in a web server directory (e.g., using XAMPP, Node.js, or Python's `http.server`) or open `index.html` directly in a browser.
3. **Dependencies**: No external libraries are required; all images are sourced from Pexels or Wikimedia with proper compression parameters.
4. **Customization**: Modify the `data` object in the JavaScript code to add or update pathways, images, or text as needed.

## Future Enhancements
- **Search Functionality**: Add a search bar to quickly locate specific pathways or nodes.
- **Detailed Node Information**: Include tooltips or modals with additional details about each educational or career option.
- **Localization**: Support multiple languages for broader accessibility.
- **Data Persistence**: Allow users to save their explored paths or share them via links.
- **Accessibility Improvements**: Enhance keyboard navigation and screen reader support.

## Contributing
This project is tailored for the Uva Wellassa University Career Guidance Unit. Contributions are welcome to improve functionality, add new pathways, or enhance the user interface. Please submit pull requests or contact the Career Guidance Unit for collaboration.

## License
This project is developed for educational purposes and is licensed under the MIT License. Feel free to use, modify, and distribute it with proper attribution.

## Contact
For inquiries or support, contact the Uva Wellassa University Career Guidance Unit at [insert contact information].
