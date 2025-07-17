// Faculties for state universities must be inside the main data object
    
const data = {
    start: [
        { id: 'ol', text: 'O/L', image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'al', text: 'A/L', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl1v1fU74GIfNWzAGYuNdItJs3bc4TbM9hQ&s' },
        { id: 'bachelors', text: "Bachelor's", image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'postgraduates', text: 'Postgraduates', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ol: [
        { id: 'ol_passed', text: 'O/L Passed', image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'ol_failed', text: 'O/L Failed', image: 'https://images.pexels.com/photos/6147369/pexels-photo-6147369.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ol_passed: [
        { id: 'al', text: 'A/L', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl1v1fU74GIfNWzAGYuNdItJs3bc4TbM9hQ&s' },
        { id: 'vta_tech_etc_ol', text: 'Vocational Training', image: 'https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ol_failed: [
        { id: 'vta_tech_etc_ol_failed', text: 'Vocational Training', image: 'https://images.pexels.com/photos/5212353/pexels-photo-5212353.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_tech_etc_ol: [
        { id: 'vta_ol', text: 'VTA', image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technical_college_ol', text: 'Technical College', image: 'https://images.pexels.com/photos/5212338/pexels-photo-5212338.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'jerman_tech_ol', text: 'German Tech', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Cgtti_logo.jpg' },
        { id: 'korean_tech_ol', text: 'Korean Tech', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'naita_ol', text: 'NAITA', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'hotel_school_ol', text: 'Hotel School', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_tech_etc_ol_failed: [
        { id: 'vta_olf', text: 'VTA', image: 'https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technical_college_olf', text: 'Technical College', image: 'https://images.pexels.com/photos/5212339/pexels-photo-5212339.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'jerman_tech_olf', text: 'German Tech', image: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Cgtti_logo.jpg' },
        { id: 'korean_tech_olf', text: 'Korean Tech', image: 'https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=400' },
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
    bachelors: [
        { id: 'state_unis_bach', text: 'State Universities', image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'private_unis_bach', text: 'Private Universities', image: 'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'faculties_bach', text: 'Faculties', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduates: [
        { id: 'pgdiplomas', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'masters', text: "Master's (M.Sc)", image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'phd', text: 'PhD', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    state_unis_bach: [
        { id: 'uva_uni_bach', text: 'Uva Wellassa University', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_uwu.jpg' },
        { id: 'colombo_uni_bach', text: 'University of Colombo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GBULN5RoVaOiewrmVLknLkR-gNo_1dEqGg&s' },
        { id: 'peradeniya_uni_bach', text: 'University of Peradeniya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XsX00Umptg_nU31mh5MeMnJaWm4S9-SDug&s' },
        { id: 'jpura_uni_bach', text: "University of Sri J'pura", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBrDhpxvFrsPg2BIH7NVfeOdnEFKriTOnIw&s' },
        { id: 'kelaniya_uni_bach', text: 'University of Kelaniya', image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Kelaniya.png' },
        { id: 'moratu_uni_bach', text: 'University of Moratuwa', image: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png' },
        { id: 'abara_uni_bach', text: 'Sabaragamuwa University', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Logo-SUSL.png' },
        { id: 'ruhuna_uni_bach', text: 'University of Ruhuna', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Ruhuna_logo.png' },
        { id: 'wayaba_uni_bach', text: 'Wayamba University of Sri Lanka', image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Wayabauniversity.png' },
        { id: 'rajarata_uni_bach', text: 'Rajarata University of Sri Lanka', image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Rajarata_logo.png' },
        { id: 'jaffana_uni_bach', text: 'University of Jaffna', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/UoJ_logo.png' },
        { id: 'estan_uni_bach', text: 'Eastern University, Sri Lanka', image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/EUSL_logo2.png' },
        { id: 'vauniya_uni_bach', text: 'University of Vavuniya', image: 'https://vau.ac.lk/wp-content/uploads/2021/08/University-of-Vavuniya-Logo-1024x1024.png' },
        { id: 'uvap_uni_bach', text: 'University of Visual and Performing Arts', image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/University_of_the_Visual_and_Performing_Arts.gif' },
        { id: 'se_uni_bach', text: 'South Eastern University of Sri Lanka', image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/South_Eastern_University_of_Sri_Lanka_logo.png' },
        { id: 'open_uni_bach', text: 'Open University of Sri Lanka', image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Logo_ousl.jpg' },
        { id: 'gampaha_uni_bach', text: 'Gampaha Wickramarachchi University of Indigenous Medicine', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHANCAGR15nCWCvhxGwv8iXxA8FYZWgSx1Pw&s' }
    ],
    private_unis_bach: [
        { id: 'nibm_bach', text: 'NIBM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AhyEATU3RYtWWPWFk3knpoDaOO5LiGohEg&s' },
        { id: 'nsbm_bach', text: 'NSBM', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVnx3iBftwmBBX1C7Qo2BHq90dgix7M4n2Q&s' },
        { id: 'sliit_bach', text: 'SLIIT', image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/SLIIT_Logo_Crest.png' },
        { id: 'cinec_bach', text: 'CINEC', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwfIgwQDaSd-lHzE7Oa3IktFWq__D1Tui6Q&s' },
        { id: 'iit_bach', text: 'IIT', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFrfJAr4sBC3xhDmce_Njr9e-9fnQy5KP0Q&s' },
        { id: 'royal_bach', text: 'Royal Institute of Colombo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXGUuJg8r6ExssbrIMe-SAyaD3Y45cszVyNw&s' },
        { id: 'horizon_bach', text: 'Horizon Campus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5sI90EFIw7BVsi4SVlIWpIpVyE-WgaylhQ&s' },
        { id: 'sltc_bach', text: 'SLTC Research University', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/SLTC_Research_University_Logo.png' },
        { id: 'kiu_bach', text: 'KIU', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVLOqR9oQD0hJ7pikYWtrAKupBxcQpq1JbVg&s' },
        { id: 'icbt_bach', text: 'ICBT', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGG2D4unG1NLsGJCTth25T_3Y4DvIzVye8qg&s' }
    ],
    // Private university degree programs (example)
    nibm_bach: [
        { id: 'nibm_bsc', text: 'BSc in Management', image: '' },
        { id: 'nibm_ba', text: 'BA in English', image: '' }
    ],
    nsbm_bach: [
        { id: 'nsbm_bsc', text: 'BSc in Computer Science', image: '' },
        { id: 'nsbm_ba', text: 'BA in Business Communication', image: '' }
    ],
    sliit_bach: [
        { id: 'sliit_bsc', text: 'BSc in IT', image: '' },
        { id: 'sliit_beng', text: 'BEng in Software Engineering', image: '' }
    ],
    cinec_bach: [
        { id: 'cinec_bsc', text: 'BSc in Logistics', image: '' },
        { id: 'cinec_ba', text: 'BA in International Relations', image: '' }
    ],
    // ...repeat for other private universities as needed...
    // State university degree programs (examples, add more as needed)
    colombo_uni_bach: [
        { id: 'colombo_llb', text: 'Bachelor of Laws', image: '' },
        { id: 'colombo_mbbs', text: 'Bachelor of Medicine', image: '' },
        { id: 'colombo_bsc', text: 'Bachelor of Science', image: '' },
        { id: 'colombo_ba', text: 'Bachelor of Arts', image: '' },
        { id: 'colombo_bcom', text: 'Bachelor of Commerce', image: '' }
    ],
    jpura_uni_bach: [
        { id: 'jpura_bcom', text: 'B.Com. (Special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_marketing', text: 'B.Sc Marketing Management (Special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_accounting', text: 'B.Sc Accounting (Special) Degree Programme', image: '' },
        { id: 'jpura_bsc_hr', text: 'B.Sc Human Resource Management (Special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_finance', text: 'B.Sc Finance (Special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_public_mgmt', text: 'B.Sc Public Management (special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_entrepreneur', text: 'B.Sc Entrepreneurship (special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_bis', text: 'B.Sc Business Information systems (special) Degree Programme(04 years)', image: '' },
        { id: 'jpura_bsc_ba_economics', text: 'B.Sc Business Administration Degree Programme – (Business Economics) (Special) Degree Programme (04 years)', image: '' },
        { id: 'jpura_bsc_ba', text: 'B.Sc Business Administration (Special) Degree Programme', image: '' }
    ],
    kelaniya_uni_bach: [
        { id: 'kelaniya_ba_special', text: 'Bachelor of Arts (Special) Degree programs in areas like English, Sinhala, or History', image: '' },
        { id: 'kelaniya_ba_lib_info', text: 'Bachelor of Arts in Library and Information Science (General) External', image: '' },
        { id: 'kelaniya_ba_hindi', text: 'Bachelor of Arts Honours Degree in Hindi Studies', image: '' },
        { id: 'kelaniya_bsc_honours', text: 'Bachelor of Science Honours Degree programs in various fields', image: '' },
        { id: 'kelaniya_bsc_mgmt_it', text: 'Bachelor of Science Honours in Management and Information Technology', image: '' },
        { id: 'kelaniya_bsc_math_physics', text: 'Bachelor of Science Honours in Mathematical Physics', image: '' },
        { id: 'kelaniya_biosys_tech', text: 'Bachelor of Biosystems Technology Honours', image: '' },
        { id: 'kelaniya_eng_tech', text: 'Bachelor of Engineering Technology Honours', image: '' }
    ],
    peradeniya_uni_bach: [
        { id: 'peradeniya_ba_economics', text: 'Bachelor of Arts (BA) degrees, including Honours programs, in Economics, English, Geography, History, Sinhala', image: '' },
        { id: 'peradeniya_bsc_biology', text: 'Bachelor of Science (BSc) and BSc Honours degrees in Biology, Botany, Chemistry, Computer Science, Geology, Mathematics, Molecular Biology & Biotechnology, and Physics.', image: '' },
        { id: 'peradeniya_bsc_med_lab', text: 'B.Sc. degrees in Medical Laboratory Science, Nursing, Pharmacy, Physiotherapy, and Radiography/Radiotherapy.', image: '' }
    ],
    moratu_uni_bach: [
        { id: 'moratuwa_barch', text: 'Bachelor of Architecture Honours', image: '' },
        { id: 'moratuwa_bland_arch', text: 'Bachelor of Landscape Architecture Honours', image: '' },
        { id: 'moratuwa_bdesign', text: 'Bachelor of Design Honours', image: '' },
        { id: 'moratuwa_bsc_town', text: 'Bachelor of Science Honours in Town & Country Planning', image: '' },
        { id: 'moratuwa_bsc_quantity', text: 'Bachelor of Science Honours in Quantity Surveying', image: '' },
        { id: 'moratuwa_bsc_facilities', text: 'Bachelor of Science Honours in Facilities Management', image: '' }
    ],
    uva_uni_bach: [
        { id: 'uva_bba_hrd', text: 'Bachelor of BUSINESS MANAGEMENT (Honours) in HRD', image: '' },
        { id: 'uva_bba_hte', text: 'Bachelor of BUSINESS MANAGEMENT(Honours) in HTE', image: '' },
        { id: 'uva_bba_enm', text: 'Bachelor of BUSINESS MANAGEMENT (Honours) in ENM', image: '' },
        { id: 'uva_bsc_applied_math', text: 'Bachelor of Science (BSc) in Applied Mathematics and Computing', image: '' },
        { id: 'uva_bsc_cs', text: 'Bachelor of Science Honours in Computer Science', image: '' },
        { id: 'uva_bsc_ind_info_tech', text: 'Bachelor of Industrial Information Technology', image: '' }
    ],
    abara_uni_bach: [
        { id: 'saba_bsc_food', text: 'Bachelor of Science (Honours) in Food Science and Technology', image: '' },
        { id: 'saba_bsc_env', text: 'Environmental Sciences', image: '' },
        { id: 'saba_bsc_natural', text: 'Natural Resource Management', image: '' },
        { id: 'saba_bsc_applied_physics', text: 'Applied Physics', image: '' },
        { id: 'saba_bsc_chem_tech', text: 'Chemical Technology', image: '' },
        { id: 'saba_bsc_cs_tech', text: 'Computer Science and Technology', image: '' },
        { id: 'saba_bsc_pe', text: 'Physical Education', image: '' },
        { id: 'saba_bsc_sport', text: 'Sport Sciences and Management', image: '' }
    ],
    ruhuna_uni_bach: [
        { id: 'ruhuna_bsc_eng_civil', text: 'Bachelor of Science in Engineering (B.Sc.Eng.) degrees in Civil and Environmental Engineering', image: '' },
        { id: 'ruhuna_bsc_eng_electrical', text: 'Electrical and Information Engineering', image: '' },
        { id: 'ruhuna_bsc_eng_marine', text: 'Marine Engineering and Naval Architecture', image: '' },
        { id: 'ruhuna_bsc_eng_mechanical', text: 'Mechanical and Manufacturing Engineering', image: '' },
        { id: 'ruhuna_bba_accounting', text: 'Bachelor of Business Administration (BBA) degrees with specializations in Accounting', image: '' },
        { id: 'ruhuna_bba_entrepreneur', text: 'Entrepreneurship', image: '' },
        { id: 'ruhuna_bba_hr', text: 'Human Resources Management', image: '' },
        { id: 'ruhuna_bba_marketing', text: 'Marketing', image: '' },
        { id: 'ruhuna_bsc_agriculture', text: 'Bachelor of Science in Agriculture', image: '' }
    ],
    wayaba_uni_bach: [
        { id: 'wayamba_bsc_agri', text: 'Bachelor of Science (Agriculture) Honours', image: '' },
        { id: 'wayamba_biosys_tech', text: 'Bachelor of Biosystems Technology Honours', image: '' },
        { id: 'wayamba_bsc_plant', text: 'Bachelor of Science (Plantation Management)', image: '' },
        { id: 'wayamba_maetm', text: 'Master of Agri-Enterprise & Technology Management (M.AETM)', image: '' },
        { id: 'wayamba_ext_agri', text: 'External Degree in Agriculture and Plantation Management', image: '' }
    ],
    rajarata_uni_bach: [
        { id: 'rajarata_bsc_agri', text: 'B.Sc. (Hons) in Agriculture', image: '' },
        { id: 'rajarata_bsc_applied', text: 'B.Sc. (General) in Applied Sciences', image: '' },
        { id: 'rajarata_bsc_hons_applied', text: 'B.Sc. (Hons) in Applied Sciences', image: '' },
        { id: 'rajarata_bsc_ind_math', text: 'B.Sc. (Hons) in Industrial Mathematics', image: '' },
        { id: 'rajarata_bsc_applied_bio', text: 'B.Sc. (Special) in Applied Biology', image: '' },
        { id: 'rajarata_bsc_chem', text: 'B.Sc. (Hons) in Chemistry', image: '' },
        { id: 'rajarata_bsc_it', text: 'B.Sc. (General) in Information Technology', image: '' },
        { id: 'rajarata_bsc_hons_it', text: 'B.Sc. (Hons) in Information Technology', image: '' },
        { id: 'rajarata_bsc_health_promo', text: 'B.Sc. (General) in Health Promotion', image: '' },
        { id: 'rajarata_bsc_hons_health_promo', text: 'B.Sc. (Hons) in Health Promotion.', image: '' },
        { id: 'rajarata_bsc_joint_bio_phys', text: 'B.Sc. (Joint Major) in Biology & Physics', image: '' },
        { id: 'rajarata_bsc_joint_chem_phys', text: 'B.Sc. (Joint Major) in Chemistry & Physics', image: '' }
    ],
    jaffana_uni_bach: [
        { id: 'jaffna_ba', text: 'Bachelor of Arts (BA) degree with specializations in Anthropology, Archaeology, Economics, English, Geography, History, Linguistics, and more.', image: '' },
        { id: 'jaffna_bcom', text: 'Bachelor of Commerce (B.Com)', image: '' },
        { id: 'jaffna_bba', text: 'Bachelor of Business Administration (BBA)', image: '' },
        { id: 'jaffna_bsc', text: 'Bachelor of Science (BSc) degree, including a BSc (General) and specialized degrees like BSc (Nursing) and BSc in Medical Laboratory Science.', image: '' },
        { id: 'jaffna_bed', text: 'Bachelor of Education (B.Ed) degree.', image: '' }
    ],
    estan_uni_bach: [
        { id: 'eastern_ba_gen', text: 'Bachelor of Arts (General)', image: '' },
        { id: 'eastern_bed', text: 'Bachelor of Education', image: '' },
        { id: 'eastern_ba_special', text: 'Various special degrees in Arts, including Tamil, Fine Arts, Philosophy, Geography, Hindu Culture, Political Science, Sociology, Education, Economics, and Drama & Theatre.', image: '' },
        { id: 'eastern_bba', text: 'Bachelor of Business Administration (BBA) (Honours)', image: '' },
        { id: 'eastern_bcom', text: 'Bachelor of Commerce (BCom) (Honours)', image: '' },
        { id: 'eastern_bio_chem_cs_math_phys', text: 'Programs in Biological Sciences, Chemical Sciences, Computer Science, Mathematical Sciences, and Physical Sciences.', image: '' }
    ],
    vauniya_uni_bach: [
        { id: 'vavuniya_bsc_applied_math', text: 'Bachelor of Science in Applied Mathematics and Computing', image: '' },
        { id: 'vavuniya_bsc_cs', text: 'Bachelor of Science Honours in Computer Science', image: '' },
        { id: 'vavuniya_bsc_env', text: 'Bachelor of Science Honours in Environmental Science', image: '' },
        { id: 'vavuniya_bsc_it', text: 'Bachelor of Science in Information Technology', image: '' },
        { id: 'vavuniya_bsc_hons_it', text: 'Bachelor of Science Honours in Information Technology', image: '' },
        { id: 'vavuniya_bsc_acc_fin', text: 'Bachelor of Science Honours in Accounting and Finance', image: '' },
        { id: 'vavuniya_bsc_proj_mgmt', text: 'Bachelor of Science Honours in Project Management', image: '' },
        { id: 'vavuniya_bsc_bank_ins', text: 'Bachelor of Science Honours in Banking and Insurance', image: '' },
        { id: 'vavuniya_bsc_hr', text: 'Bachelor of Science Honours in Human Resource Management', image: '' },
        { id: 'vavuniya_bsc_biz_econ', text: 'Bachelor of Science Honours in Business Economics', image: '' },
        { id: 'vavuniya_bsc_marketing', text: 'Bachelor of Science Honours in Marketing Management', image: '' },
        { id: 'vavuniya_bict', text: 'Bachelor of Information and Communication Technology.', image: '' }
    ],
    uvap_uni_bach: [
        { id: 'uvap_bva', text: 'Bachelor of Visual Arts', image: '' },
        { id: 'uvap_bpa', text: 'Bachelor of Performing Arts', image: '' }
    ],
    se_uni_bach: [
        { id: 'se_bsc_gen', text: 'Bachelor of Science (General)', image: '' },
        { id: 'se_bsc_cs', text: 'Bachelor of Science Honours Degree in Computer Science', image: '' },
        { id: 'se_applied_stats', text: 'Applied Statistics', image: '' },
        { id: 'se_math', text: 'Mathematics', image: '' },
        { id: 'se_applied_bio', text: 'Applied Biology', image: '' },
        { id: 'se_botany', text: 'Botany', image: '' },
        { id: 'se_physics', text: 'Physics', image: '' },
        { id: 'se_chemistry', text: 'Chemistry', image: '' },
        { id: 'se_bcom', text: 'Bachelor of Commerce (BCom) degrees', image: '' }
    ],
    open_uni_bach: [
        { id: 'open_mba_hrm', text: 'MBA in Human Resource Management (MBA in HRM)', image: '' },
        { id: 'open_short_eng', text: 'Short Course in English for Employment', image: '' },
        { id: 'open_web_dev', text: 'Professional Web Development Using Joomla & Wordpress', image: '' },
        { id: 'open_bed_primary', text: 'Bachelor of Education Honours in Primary Education', image: '' },
        { id: 'open_pgd_special', text: 'PGD in Special Needs Education', image: '' },
        { id: 'open_bse_honours', text: 'Bachelor of Software Engineering Honours', image: '' },
        { id: 'open_bms', text: 'Bachelor of Management Studies', image: '' }
    ],
    gampaha_uni_bach: [
        { id: 'gampaha_bams', text: 'Bachelor of Ayurveda Medicine and Surgery (BAMS)', image: '' },
        { id: 'gampaha_ind_med', text: 'Indigenous Medicinal Resources', image: '' },
        { id: 'gampaha_health_tourism', text: 'Health Tourism and Hospitality Management', image: '' },
        { id: 'gampaha_biomed_tech', text: 'Biomedical Technology', image: '' },
        { id: 'gampaha_social_studies', text: 'Social Studies in Indigenous Knowledge', image: '' }
    ],
    faculties_bach: [
        { id: 'colombo_faculties', text: 'Colombo University Faculties', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GBULN5RoVaOiewrmVLknLkR-gNo_1dEqGg&s' },
        { id: 'jpura_faculties', text: 'Sri Jayawardhanapura University Faculties', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBrDhpxvFrsPg2BIH7NVfeOdnEFKriTOnIw&s' },
        { id: 'kelaniya_faculties', text: 'Kelaniya University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Kelaniya.png' },
        { id: 'peradeniya_faculties', text: 'Peradeniya University Faculties', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XsX00Umptg_nU31mh5MeMnJaWm4S9-SDug&s' },
        { id: 'moratuwa_faculties', text: 'Moratuwa University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png' },
        { id: 'uva_faculties', text: 'Uva Wellassa University Faculties', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_uwu.jpg' },
        { id: 'sabaragamuwa_faculties', text: 'Sabaragamuwa University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Logo-SUSL.png' },
        { id: 'ruhuna_faculties', text: 'Ruhuna University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Ruhuna_logo.png' },
        { id: 'wayamba_faculties', text: 'Wayamba University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Wayabauniversity.png' },
        { id: 'rajarata_faculties', text: 'Rajarata University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Rajarata_logo.png' },
        { id: 'jaffna_faculties', text: 'Jaffna University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/UoJ_logo.png' },
        { id: 'eastern_faculties', text: 'Eastern University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/EUSL_logo2.png' },
        { id: 'vauniya_faculties', text: 'Vavuniya University Faculties', image: 'https://vau.ac.lk/wp-content/uploads/2021/08/University-of-Vavuniya-Logo-1024x1024.png' },
        { id: 'uvap_faculties', text: 'Visual and Performing Arts Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/University_of_the_Visual_and_Performing_Arts.gif' },
        { id: 'se_faculties', text: 'South Eastern University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/South_Eastern_University_of_Sri_Lanka_logo.png' },
        { id: 'open_uni_faculties', text: 'Open University Faculties', image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Logo_ousl.jpg' },
        { id: 'gampaha_faculties', text: 'Gampaha Wickramarachchi University Faculties', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_uwu.jpg' }
    ],
    // ...existing code for faculties and degree programs (add details for each faculty and degree as per user request)...
    // Example for Colombo University Faculties
    colombo_faculties: [
        { id: 'arts_colombo', text: 'Arts', image: '' },
        { id: 'education_colombo', text: 'Education', image: '' },
        { id: 'grad_studies_colombo', text: 'Graduate Studies', image: '' },
        { id: 'indigenous_med_colombo', text: 'Indigenous Medicine', image: '' },
        { id: 'law_colombo', text: 'LAW', image: '' },
        { id: 'management_colombo', text: 'Management & Finance', image: '' },
        { id: 'medicine_colombo', text: 'Medicine', image: '' },
        { id: 'science_colombo', text: 'Science', image: '' },
        { id: 'technology_colombo', text: 'Technology', image: '' },
        { id: 'nursing_colombo', text: 'Nursing', image: '' }
    ],
    arts_colombo: [
        { id: 'llb_colombo', text: 'Bachelor of Laws', image: '' },
        { id: 'mbbs_colombo', text: 'Bachelor of Medicine', image: '' },
        { id: 'surgery_colombo', text: 'Bachelor of Surgery', image: '' }
    ],
    // ...repeat for other universities and faculties, adding degree programs as described...
    // Example for Postgraduates
    pgdiplomas: [
        { id: 'pgde', text: 'Postgraduate Diploma in Education', image: '' },
        { id: 'pgbm', text: 'Postgraduate Diploma in Business Management', image: '' },
        { id: 'pgsinhala', text: 'Postgraduate Diploma in Sinhala', image: '' }
    ],
    masters: [
        { id: 'msc_hrm', text: 'MBA in Human Resource Management', image: '' },
        { id: 'msc_it', text: 'M.Sc. in Information Technology', image: '' }
    ],
    phd: [
        { id: 'phd_general', text: 'Doctor of Philosophy (PhD)', image: '' }
    ],
    // ...existing code...
    // Faculties for state universities
    colombo_uni_bach_faculties: [
        { id: 'colombo_arts', text: 'Arts', image: '' },
        { id: 'colombo_education', text: 'Education', image: '' },
        { id: 'colombo_grad_studies', text: 'Graduate Studies', image: '' },
        { id: 'colombo_indigenous_med', text: 'Indigenous Medicine', image: '' },
        { id: 'colombo_law', text: 'LAW', image: '' },
        { id: 'colombo_management', text: 'Management & Finance', image: '' },
        { id: 'colombo_medicine', text: 'Medicine', image: '' },
        { id: 'colombo_science', text: 'Science', image: '' },
        { id: 'colombo_technology', text: 'Technology', image: '' },
        { id: 'colombo_nursing', text: 'Nursing', image: '' }
    ],
    jpura_uni_bach_faculties: [
        { id: 'jpura_humanities', text: 'Humanities and Social Sciences', image: '' },
        { id: 'jpura_applied_sciences', text: 'Applied Sciences', image: '' },
        { id: 'jpura_management', text: 'Management Studies and Commerce', image: '' },
        { id: 'jpura_medical_sciences', text: 'Medical Sciences', image: '' },
        { id: 'jpura_grad_studies', text: 'Graduate Studies', image: '' },
        { id: 'jpura_engineering', text: 'Engineering', image: '' },
        { id: 'jpura_technology', text: 'Technology', image: '' },
        { id: 'jpura_allied_health', text: 'Allied Health Sciences', image: '' },
        { id: 'jpura_dental', text: 'Dental Sciences', image: '' },
        { id: 'jpura_urban_aquatic', text: 'Urban and Aquatic Bioresources', image: '' },
        { id: 'jpura_computing', text: 'Computing', image: '' }
    ],
    kelaniya_uni_bach_faculties: [
        { id: 'kelaniya_commerce', text: 'Commerce and Management Studies', image: '' },
        { id: 'kelaniya_computing', text: 'Computing and Technology', image: '' },
        { id: 'kelaniya_humanities', text: 'Humanities', image: '' },
        { id: 'kelaniya_medicine', text: 'Medicine', image: '' },
        { id: 'kelaniya_science', text: 'Science', image: '' },
        { id: 'kelaniya_social_sciences', text: 'Social Sciences', image: '' },
        { id: 'kelaniya_grad_studies', text: 'Graduate Studies', image: '' }
    ],
    peradeniya_uni_bach_faculties: [
        { id: 'peradeniya_agriculture', text: 'Agriculture', image: '' },
        { id: 'peradeniya_allied_health', text: 'Allied Health Sciences', image: '' },
        { id: 'peradeniya_arts', text: 'Arts', image: '' },
        { id: 'peradeniya_dental', text: 'Dental Sciences', image: '' },
        { id: 'peradeniya_engineering', text: 'Engineering', image: '' },
        { id: 'peradeniya_management', text: 'Management', image: '' },
        { id: 'peradeniya_medicine', text: 'Medicine', image: '' },
        { id: 'peradeniya_science', text: 'Science', image: '' },
        { id: 'peradeniya_vet_med', text: 'Veterinary Medicine', image: '' },
        { id: 'peradeniya_animal_science', text: 'Animal Science', image: '' }
    ],
    moratu_uni_bach_faculties: [
        { id: 'moratuwa_engineering', text: 'Engineering', image: '' },
        { id: 'moratuwa_it', text: 'IT', image: '' },
        { id: 'moratuwa_architecture', text: 'Architecture', image: '' },
        { id: 'moratuwa_business', text: 'Business', image: '' },
        { id: 'moratuwa_medicine', text: 'Medicine', image: '' },
        { id: 'moratuwa_grad_studies', text: 'Graduate Studies', image: '' }
    ],
    uva_uni_bach_faculties: [
        { id: 'uva_animal_export', text: 'Faculty of Animal Science and Export Agriculture', image: '' },
        { id: 'uva_applied_sciences', text: 'Faculty of Applied Sciences', image: '' },
        { id: 'uva_management', text: 'Faculty of Management', image: '' },
        { id: 'uva_technological', text: 'Faculty of Technological Studies', image: '' }
    ],
    abara_uni_bach_faculties: [
        { id: 'saba_agricultural', text: 'Agricultural Sciences', image: '' },
        { id: 'saba_applied_sciences', text: 'Applied Sciences', image: '' },
        { id: 'saba_computing', text: 'Computing', image: '' },
        { id: 'saba_geomatics', text: 'Geomatics', image: '' },
        { id: 'saba_grad_studies', text: 'Graduate Studies', image: '' },
        { id: 'saba_management', text: 'Management Studies', image: '' },
        { id: 'saba_medicine', text: 'Medicine', image: '' },
        { id: 'saba_social_sciences', text: 'Social Sciences and Languages', image: '' },
        { id: 'saba_technology', text: 'Technology', image: '' }
    ],
    ruhuna_uni_bach_faculties: [
        { id: 'ruhuna_agriculture', text: 'Agriculture', image: '' },
        { id: 'ruhuna_allied_health', text: 'Allied Health Sciences', image: '' },
        { id: 'ruhuna_engineering', text: 'Engineering', image: '' },
        { id: 'ruhuna_grad_studies', text: 'Graduate Studies', image: '' },
        { id: 'ruhuna_humanities', text: 'Humanities and Social Sciences', image: '' },
        { id: 'ruhuna_management', text: 'Management and Finance', image: '' },
        { id: 'ruhuna_fisheries', text: 'Fisheries and Marine Sciences & Technology', image: '' }
    ],
    wayaba_uni_bach_faculties: [
        { id: 'wayamba_agri_plant', text: 'Faculty of Agriculture & Plantation Management', image: '' },
        { id: 'wayamba_applied_sciences', text: 'Faculty of Applied Sciences', image: '' },
        { id: 'wayamba_business_finance', text: 'Faculty of Business Studies & Finance', image: '' },
        { id: 'wayamba_livestock', text: 'Faculty of Livestock, Fisheries & Nutrition', image: '' },
        { id: 'wayamba_technology', text: 'Faculty of Technology', image: '' },
        { id: 'wayamba_medicine', text: 'Faculty of Medicine', image: '' }
    ],
    rajarata_uni_bach_faculties: [
        { id: 'rajarata_agriculture', text: 'Faculty of Agriculture', image: '' },
        { id: 'rajarata_applied_sciences', text: 'Faculty of Applied Sciences', image: '' },
        { id: 'rajarata_management', text: 'Faculty of Management Studies', image: '' },
        { id: 'rajarata_medicine', text: 'Faculty of Medicine and Allied Sciences', image: '' },
        { id: 'rajarata_social_sciences', text: 'Faculty of Social Sciences and Humanities', image: '' },
        { id: 'rajarata_technology', text: 'Faculty of Technology', image: '' }
    ],
    jaffana_uni_bach_faculties: [
        { id: 'jaffna_agriculture', text: 'Agriculture', image: '' },
        { id: 'jaffna_alied_health', text: 'Alied Health Science', image: '' },
        { id: 'jaffna_applied_science', text: 'Applied Science', image: '' },
        { id: 'jaffna_arts', text: 'Arts', image: '' },
        { id: 'jaffna_business', text: 'Business Studies', image: '' },
        { id: 'jaffna_engineering', text: 'Engineering', image: '' },
        { id: 'jaffna_grad_studies', text: 'Graduate Studies', image: '' },
        { id: 'jaffna_hindu', text: 'Hindu Studies', image: '' },
        { id: 'jaffna_management', text: 'Management Studies and Commerce', image: '' },
        { id: 'jaffna_medicine', text: 'Medicine', image: '' },
        { id: 'jaffna_science', text: 'Science', image: '' },
        { id: 'jaffna_technology', text: 'Technology', image: '' },
        { id: 'jaffna_technological', text: 'Technological Studies', image: '' }
    ],
    estan_uni_bach_faculties: [
        { id: 'eastern_agriculture', text: 'Faculty of Agriculture', image: '' },
        { id: 'eastern_science', text: 'Faculty of Science', image: '' },
        { id: 'eastern_commerce', text: 'Faculty of Commerce and Management', image: '' },
        { id: 'eastern_arts', text: 'Faculty of Arts and Culture', image: '' },
        { id: 'eastern_health', text: 'Faculty of Health-Care Sciences', image: '' },
        { id: 'eastern_technology', text: 'Faculty of Technology', image: '' }
    ],
    vauniya_uni_bach_faculties: [
        { id: 'vavuniya_applied_science', text: 'Faculty of Applied Science', image: '' },
        { id: 'vavuniya_business', text: 'Faculty of Business Studies', image: '' },
        { id: 'vavuniya_technological', text: 'Faculty of Technological Studies', image: '' }
    ],
    uvap_uni_bach_faculties: [
        { id: 'uvap_music', text: 'Faculty of Music', image: '' },
        { id: 'uvap_visual_arts', text: 'Faculty of Visual Arts', image: '' },
        { id: 'uvap_dance_drama', text: 'Faculty of Dance and Drama', image: '' }
    ],
    se_uni_bach_faculties: [
        { id: 'se_management', text: 'Management & commerce', image: '' },
        { id: 'se_arts', text: 'Arts & Culture', image: '' },
        { id: 'se_applied_sciences', text: 'Applied Sciences', image: '' },
        { id: 'se_islamic', text: 'Islamic Studies & Arabic Languages', image: '' },
        { id: 'se_engineering', text: 'Engineering and Technology', image: '' }
    ],
    open_uni_bach_faculties: [
        { id: 'open_education', text: 'Faculty of Education', image: '' },
        { id: 'open_engineering', text: 'Faculty of Engineering Technology', image: '' },
        { id: 'open_humanities', text: 'Faculty of Humanities and Social Sciences', image: '' }
    ],
    gampaha_uni_bach_faculties: [
        { id: 'gampaha_ind_med', text: 'Faculty of Indigenous Medicine', image: '' },
        { id: 'gampaha_health_sciences', text: 'Faculty of Indigenous Health Sciences and Technology', image: '' },
        { id: 'gampaha_social_mgmt', text: 'Faculty of Indigenous Social Sciences and Management Studies', image: '' },
        { id: 'gampaha_grad_studies', text: 'Faculty of Graduate Studies', image: '' }
    ],
    hnd_etc_al_passed: [
        { id: 'hnd_alp', text: 'HND', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/SLIATE_LOGO2.png/250px-SLIATE_LOGO2.png' },
        { id: 'kdu_alp', text: 'KDU', image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'open_uni_alp', text: 'Open University', image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Logo_ousl.jpg' },
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
        { id: 'hnd_nu', text: 'HND', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/SLIATE_LOGO2.png/250px-SLIATE_LOGO2.png' },
        { id: 'kdu_nu', text: 'KDU', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HXGcKwX9W3EjsQ1Fg1zVJwKEbn175ue6gg&s' },
        { id: 'open_uni_nu', text: 'Open University', image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Logo_ousl.jpg' },
        { id: 'law_co_nu', text: 'Law College', image: 'https://upload.wikimedia.org/wikipedia/en/7/71/SL_Law_College_logo.png' },
        { id: 'ocean_nu', text: 'Ocean University', image: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    state_uni: [
        { id: 'uni_list_su', text: 'University List', image: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'faculties_su', text: 'Faculties', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    uni_list_su: [
        { id: 'colombo_uni', text: 'University of Colombo', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0GBULN5RoVaOiewrmVLknLkR-gNo_1dEqGg&s' },
        { id: 'peradeniya_uni', text: 'University of Peradeniya', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2XsX00Umptg_nU31mh5MeMnJaWm4S9-SDug&s' },
        { id: 'jpura_uni', text: "University of Sri J'pura", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStBrDhpxvFrsPg2BIH7NVfeOdnEFKriTOnIw&s' },
        { id: 'kelaniya_uni', text: 'University of Kelaniya', image: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Kelaniya.png' },
        { id: 'moratu_uni', text: 'University of Moratuwa', image: 'https://upload.wikimedia.org/wikipedia/en/6/60/University_of_Moratuwa_logo.png' },
        { id: 'abara_uni', text: 'Sabaragamuwa University', image: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Logo-SUSL.png' },
        { id: 'ruhuna_uni', text: 'University of Ruhuna', image: 'https://upload.wikimedia.org/wikipedia/en/2/2e/University_of_Ruhuna_logo.png' },
        { id: 'wayaba_uni', text: 'Wayamba University', image: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Wayabauniversity.png' },
        { id: 'rajarata_uni', text: 'Rajarata University', image: 'https://upload.wikimedia.org/wikipedia/en/a/a5/Rajarata_logo.png' },
        { id: 'jaffana_uni', text: 'University of Jaffna', image: 'https://upload.wikimedia.org/wikipedia/en/b/b9/UoJ_logo.png' },
        { id: 'estan_uni', text: 'Eastern University', image: 'https://upload.wikimedia.org/wikipedia/en/a/a0/EUSL_logo2.png' },
        { id: 'vauniya_uni', text: 'University of Vavuniya', image: 'https://vau.ac.lk/wp-content/uploads/2021/08/University-of-Vavuniya-Logo-1024x1024.png' },
        { id: 'uva_uni', text: 'Uva Wellassa University', image: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Logo_uwu.jpg' },
        { id: 'uvap_uni', text: 'University of Visual and Performing Arts', image: 'https://upload.wikimedia.org/wikipedia/en/d/dd/University_of_the_Visual_and_Performing_Arts.gif' },
        { id: 'se_uni', text: 'South Eastern University', image: 'https://upload.wikimedia.org/wikipedia/en/6/6c/South_Eastern_University_of_Sri_Lanka_logo.png' },
        { id: 'open_uni', text: 'Open University', image: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Logo_ousl.jpg' },
        { id: 'hnd_uni', text: 'HND', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/SLIATE_LOGO2.png/250px-SLIATE_LOGO2.png' }
    ],
    colombo_uni: [
        { id: 'postgraduate_diplomas_colombo', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_colombo: [
        { id: 'pgde_colombo', text: 'Postgraduate Diploma in Education (PGDE)', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pghr_colombo', text: 'Postgraduate Diploma in Human Rights', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgas_colombo', text: 'Postgraduate Diploma in Applied Sociology', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgsinhala_colombo', text: 'Postgraduate Diploma in Sinhala', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    jpura_uni: [
        { id: 'postgraduate_diplomas_jpura', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_jpura: [
        { id: 'pgba_jpura', text: 'Postgraduate Diploma in Business Administration', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgccj_jpura', text: 'Postgraduate Diploma in Criminology and Criminal Justice', image: 'https://images.pexels.com/photos/1023953/pexels-photo-1023953.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgbs_jpura', text: 'Postgraduate Diploma in Buddhist Studies', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgpm_jpura', text: 'Postgraduate Diploma in Public Management', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    kelaniya_uni: [
        { id: 'postgraduate_diplomas_kelaniya', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_kelaniya: [
        { id: 'pgmc_kelaniya', text: 'Postgraduate Diploma in Mass Communication', image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgts_kelaniya', text: 'Postgraduate Diploma in Translation Studies', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgsll_kelaniya', text: 'Postgraduate Diploma in Sinhala Language and Literature', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pga_kelaniya', text: 'Postgraduate Diploma in Archeology', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    peradeniya_uni: [
        { id: 'postgraduate_diplomas_peradeniya', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_peradeniya: [
        { id: 'pgde_peradeniya', text: 'Postgraduate Diploma in Education', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgpp_peradeniya', text: 'Postgraduate Diploma in Plant Protection', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgcd_peradeniya', text: 'Postgraduate Diploma in Community Dentistry', image: 'https://images.pexels.com/photos/3845626/pexels-photo-3845626.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pglis_peradeniya', text: 'Postgraduate Diploma in Library and Information Science', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    ruhuna_uni: [
        { id: 'postgraduate_diplomas_ruhuna', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_ruhuna: [
        { id: 'pgde_ruhuna', text: 'Postgraduate Diploma in Education', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgem_ruhuna', text: 'Postgraduate Diploma in Environmental Management', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pga_ruhuna', text: 'Postgraduate Diploma in Agriculture', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    abara_uni: [
        { id: 'postgraduate_diplomas_abara', text: 'Postgraduate Diplomas', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    postgraduate_diplomas_abara: [
        { id: 'pgtm_abara', text: 'Postgraduate Diploma in Tourism Management', image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pget_abara', text: 'Postgraduate Diploma in English Language and Teaching', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'pgbm_abara', text: 'Postgraduate Diploma in Business Management', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    faculties_su: [
        { id: 'art_faculty', text: 'Art Faculty', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'management_faculty', text: 'Management Faculty', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'science_faculty', text: 'Science Faculty', image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'medical_faculty', text: 'Medical Faculty', image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'technology_faculty', text: 'Technology Faculty', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'agriculture_faculty', text: 'Agriculture Faculty', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'engineering_faculty', text: 'Engineering Faculty', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    art_faculty: [
        { id: 'teaching_af', text: 'Teaching', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'gov_services_af', text: 'Government Services', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'media_com_af', text: 'Media & Communication Field', image: 'https://images.pexels.com/photos/97077/pexels-photo-97077.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'doc_trans_af', text: 'Documentation and Translation Field', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'cultural_af', text: 'Cultural and Creative Sector', image: 'https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'private_af', text: 'Private Sector/NGO/INGO Jobs', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'business_af', text: 'Business Field', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'psychology_af', text: 'Psychology and Counselling Field', image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    management_faculty: [
        { id: 'hr_mf', text: 'Human Resource Development Sector', image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'marketing_mf', text: 'Marketing Sector', image: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'finance_mf', text: 'Finance Sector', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'banking_mf', text: 'Banking Sector', image: 'https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'entrepreneur_mf', text: 'Entrepreneurs', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'education_mf', text: 'Education Field', image: 'https://images.pexels.com/photos/65175/pexels-photo-65175.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    science_faculty: [
        { id: 'bio_sf', text: 'Biological Science Field (Doctor, Medical Lab Scientist, Biotechnologist)', image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'physical_sf', text: 'Physical Sciences Field (Engineer, Researcher, Mathematician)', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'csit_sf', text: 'Computer Science & IT (Software Engineer, Data Analyst, Cybersecurity Analyst)', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'applied_sf', text: 'Applied Sciences (Industrial/Production Specialist, Technical Consultant)', image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'env_sf', text: 'Environmental & Earth Sciences (Environmental Specialist, Conservation Officers)', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    technology_faculty: [
        { id: 'software_tf', text: 'Software Developer', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'asst_software_tf', text: 'Assistant Software Engineer', image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'elec_design_tf', text: 'Electronic Designing Engineer', image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'electrical_tf', text: 'Electrical Engineer', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'mechanical_tf', text: 'Mechanical Engineer', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    agriculture_faculty: [
        { id: 'agri_officer_af', text: 'Agricultural Officer', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'dev_officer_af', text: 'Development Officer (DO)', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'vet_officer_af', text: 'Veterinary Officer (if specialized in animal sciences)', image: 'https://images.pexels.com/photos/4164773/pexels-photo-4164773.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'env_officer_af', text: 'Environmental Officer', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'lecturer_af', text: 'University Lecturer / Academic Researcher', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'food_tech_af', text: 'Food Technologist', image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'agribusiness_af', text: 'Agribusiness Manager', image: 'https://images.pexels.com/photos/3771089/pexels-photo-3771089.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    medical_faculty: [
        { id: 'clinician_mf', text: 'Clinical Practitioner (Medical Officer, General Practitioner)', image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'dentist_mf', text: 'Dentist', image: 'https://images.pexels.com/photos/3845626/pexels-photo-3845626.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'vet_surgeon_mf', text: 'Veterinary Surgeon', image: 'https://images.pexels.com/photos/4164773/pexels-photo-4164773.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'lecturer_mf', text: 'University Lecturer', image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'researcher_mf', text: 'Medical Researcher', image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'admin_mf', text: 'Medical Administrator', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    engineering_faculty: [
        { id: 'elec_eng_ef', text: 'Electrical Engineer', image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'civil_eng_ef', text: 'Civil Engineer', image: 'https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'software_eng_ef', text: 'Software Engineer', image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'mech_eng_ef', text: 'Mechanical Engineer', image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'marine_eng_ef', text: 'Marine Engineer', image: 'https://images.pexels.com/photos/1007427/pexels-photo-1007427.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    vta_ol: [], technical_college_ol: [], jerman_tech_ol: [], korean_tech_ol: [], naita_ol: [], hotel_school_ol: [],
    vta_olf: [], technical_college_olf: [], jerman_tech_olf: [], korean_tech_olf: [], naita_olf: [], hotel_school_olf: [],
    retry_al_failed: [], abroad_al_failed: [], private_uni_foundation_al_failed: [],
    vta_alf: [], technical_college_alf: [],
    nsbm_uni: [], nibm_uni: [], cinec_uni: [], sliit_uni: [],
    job_abroad_al_passed: [],
    hnd_alp: [], kdu_alp: [], open_uni_alp: [], law_alp: [], ocean_alp: [],
    prof_qual_no_uni: [], abroad_no_uni: [], business_no_uni: [], teaching_college_no_uni: [],
    hnd_nu: [], kdu_nu: [], open_uni_nu: [], law_co_nu: [], ocean_nu: [],
    moratu_uni: [], wayaba_uni: [], rajarata_uni: [],
    jaffana_uni: [], estan_uni: [], vauniya_uni: [], uva_uni: [], uvap_uni: [], se_uni: [], open_uni: [], hnd_uni: [],
    pgde_colombo: [], pghr_colombo: [], pgas_colombo: [], pgsinhala_colombo: [],
    pgba_jpura: [], pgccj_jpura: [], pgbs_jpura: [], pgpm_jpura: [],
    pgmc_kelaniya: [], pgts_kelaniya: [], pgsll_kelaniya: [], pga_kelaniya: [],
    pgde_peradeniya: [], pgpp_peradeniya: [], pgcd_peradeniya: [], pglis_peradeniya: [],
    pgde_ruhuna: [], pgem_ruhuna: [], pga_ruhuna: [],
    pgtm_abara: [], pget_abara: [], pgbm_abara: []
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
        
        if (parentDiv) {
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