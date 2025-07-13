const data = {
    start: [
        { id: 'ol', text: 'O/L', image: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'al', text: 'A/L', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcl1v1fU74GIfNWzAGYuNdItJs3bc4TbM9hQ&s' },
        { id: 'university', text: 'University', image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=400' }
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
    university: [
        { id: 'state_uni', text: 'State Universities', image: 'https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=400' },
        { id: 'private_uni', text: 'Private Universities', image: 'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=400' }
    ],
    private_uni: [
        { id: 'nsbm_uni', text: 'NSBM University', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfVnx3iBftwmBBX1C7Qo2BHq90dgix7M4n2Q&s' },
        { id: 'nibm_uni', text: 'NIBM University', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3AhyEATU3RYtWWPWFk3knpoDaOO5LiGohEg&s' },
        { id: 'cinec_uni', text: 'CINEC Campus', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwfIgwQDaSd-lHzE7Oa3IktFWq__D1Tui6Q&s' },
        { id: 'sliit_uni', text: 'SLIIT', image: 'https://upload.wikimedia.org/wikipedia/en/a/a6/SLIIT_Logo_Crest.png' }
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