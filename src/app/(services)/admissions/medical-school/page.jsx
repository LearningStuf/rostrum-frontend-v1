import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';

const MedicalSchool = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'PURSUING MEDICINE FROM THE UK- HOW TO GO ABOUT IT?'}
        image={'/assets/header-banner/medical.png'}
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
              The importance of public health and the medical profession has
              come to the forefront during the COVID-19 pandemic, as primary
              healthcare workers came out as warriors on the frontline, fighting
              the deadly disease out at large. As many sought out to add to the
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
              existing medical workforce, university applications to medical
              programme saw a huge surge world over. But where do you start,
              especially if you want to apply to some of the top medical schools
              in the UK? We have you covered!
            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-4'>
                Why study in the UK?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-auto md:mt-4'>
                The UK is a top destination for higher education, especially for
                international students, owing to the high quality of education
                and research opportunities.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                According to QS News Ranking 2022, 43 of the top UK universities
                are in the top 650 medical universities in the world.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The average income of a Doctor/ Physician in the UK is 67
                percent more than that of other health and medical jobs.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                For the past six years, the pay grade of doctors/physicians has
                been steadily rising. The average annual salary has risen from
                245,000 GBP in 2016 to 318,000 GBP in 2021.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Academic institutions and universities in the UK are leaders in
                medical research, with The University of Oxford and The
                University of Cambridge consistently ranking as the best
                universities to pursue medicine.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Studying in the UK will open you up to experiences and
                opportunities that are unparalleled, as you’ll get to work with
                not only the best medical professional (often led by NHS
                education providers), but also highly increase your
                employability.
              </p>
            </section>
            <section>
              <Image
                src='/assets/medical-school/banner-1.png'
                width={586}
                height={586}
                alt='Why study in the UK?'
                // objectFit='containe'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                To practise medicine in India, MBBS graduates from UK
                universities are not required to take the Foreign Medical
                Graduate Examination.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Moreover, in the United States, MBBS takes 7 to 9 years to
                finish, however in the United Kingdom, it takes 5 to 6 years.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Apart from Oxbridge, universities like Imperial College London,
                Queen Mary University, University of Glasgow, University College
                London, among others, are some universities that are globally
                recognised as one of the best.
              </p>
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
                Where do I start?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The first step would be to look at the med-schools and the kind
                of courses that they offer. The most important thing while
                applying to the UK are the admissions tests, of which there are
                two - University Clinical Aptitude Test (UCAT) and BioMedical
                Admissions Test (BMAT).
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                Depending on the medical school you wish to apply to, you’ll
                have to take the tests. The Universities of Oxford, Cambridge,
                Imperial, UCL require the BMAT, while the Universities of
                Glasgow, Edinburgh, St. Andrew’s, Warwick, King College will
                require you to give the UCAT.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The Universal Clinical Aptitude Test, or UCAT, is an aptitude
                test used by medical program to assess innate abilities of
                applicants. It is a prerequisite for admission to a variety of
                medical and dental programmes. Universities in the United
                Kingdom who have partnered with the UCAT exam require
                undergraduate and postgraduate medical students to complete this
                2-hour computer-based aptitude test in order to shortlist the
                top prospects for their university.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The UCAT does not have a specific curriculum with subjects that
                you must study in order to pass the exam. It’s an aptitude test
                to find out what kind of behavioural, practical, logical, and
                problem-solving skills students possess.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                It assesses your ability to apply scientific and mathematical
                knowledge, as well as problem-solving, critical thinking, and
                writing communication abilities, all of which are required for
                university studies.
              </p>
            </section>
            <section>
              <Image
                src='/assets/medical-school/banner-2.png'
                width={486}
                height={486}
                alt='Where do I start?'
                // objectFit='containe'
              />
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                If you’re applying to schools that need it, you’ll need to
                register for the BMAT before completing your application, but
                the test isn’t given until after the application is filed, which
                is normally around the beginning of November. It is important to
                note that registration must be completed at least one month
                prior to the exam date.
              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
                The BioMedical Admissions Test, or BMAT, is another common
                admissions test used by multiple medical schools in the UK. This
                test is required by certain UK medical schools (as well as many
                in Europe and Asia), make sure you’re aware of the specific
                requirements for the institutions your’re applying to.
                Universities all over the world utilise the BioMedical
                Admissions Test (BMAT) to assist select applicants for medical,
                dentistry, biomedical, and veterinary degree programmes.
              </p>
            </section>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction 
              image={'/assets/call-action/home.png'}
      />
      <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
        {/* SECTION START */}
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
              Fee structure in UK Universities
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The key motive for applying is the low cost of MBBS in the United
              Kingdom for Indian aspirants.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The cost of an MBBS in the United Kingdom for an Indian student
              ranges from $130,000 to $340,000 depending on the school to which
              you apply, including tuition fees and other expenditures. Before
              applying, candidates can review the precise cost structures of the
              country’s most popular institutions and colleges.
            </p>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
              TOEFL Entrance Exam
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The Test of English as a Foreign Language (TOEFL) is a
              standardised test used to assess non-native English speakers’
              abilities for enrollment in English-speaking universities. More
              than 11,000 universities and other organisations in over 190
              countries and territories accept the test.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              For BMAT, UCAT, IELTS/TOEFL, or any other test preparation, we are
              here to help you! Please feel free to contact our Tutoring Team.
              We provide tutoring for students all over the world including
              India and UAE.
            </p>
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
              What about work experience (UCAS)?
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              There are two key sections of this application: Work Experience
              and the personal statement essay.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              For the purposes of applying to medical school, “Work Experience”
              refers to any work done, volunteer or paid, in the 2 years prior
              to applying to medical school. This experience can be gained
              through a hospital or in the community, and both
              healthcare-related service and general service positions are
              relevant to your application.
            </p>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'></h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              There are 2 categories of work experience in the UCAS: Working
              with people in a caring or service role Direct observation of
              healthcare
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              If at all possible, applicants should take part in a caring or
              service job, particularly with persons who are ill, disabled, or
              underprivileged. While such encounters can occur in a healthcare
              setting, it is not required. Reviewers want to see you putting
              yourself in the service of others, and they want to know about
              your collegiality, teamwork skills, and general interpersonal
              skills. In that sense, a customer service career would be
              appropriate, as all of these skills are essential to success in
              this industry.
            </p>
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
              Other important factors
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The rest of the process, apart from the medical tests, essentially
              remains the same as any other UK application. Oxbridge would still
              require you to take the test and submit the application before 15
              October. Your personal statement and school grades are imperative
              and can make or break your application.
            </p>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
              MED School Admissions
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              As for interviews, most medical schools follow the ‘Multiple
              Mini-Interviews’ (MMI), which are multiple 10-minute interviews.
              Before each interview, you’re given a scenario and given time to
              prepare for each. These may then entail an interviewer asking you
              questions, or you might have to engage in a role-playing scenario.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Rostrum has a robust system and experienced staff in place to
              completely prepare you for these nerve-wracking interviews. We
              make sure you enter each interview as confident as ever.
            </p>
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section className='order-2 md:order-1' >
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
              How can Rostrum Education help?
            </h3>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              We at Rostrum Education help students with their med-school
              preparation to get into some of the top universities in the world.
              Our network consists of specialised tutors and medical
              professionals from some of the best universities in the world, and
              our mentors have been helping students with Oxbridge prep and UK
              admissions for years. Our process is highly personalised and
              bespoke and catered to your strengths and needs. We follow a
              highly specialised 8-step process that focuses on each aspect of
              your application - from the course and university shortlisting,
              test preparation, personal statement, and interview preparation,
              to finally accepting your admissions offer.
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Interested in pursuing medicine from the top universities in the
              UK? Find out more about our process. Book your free consultation
              with us today.
            </p>
          </section>
          <section className='order-1 md:order-2' >
            <Image
              src='/assets/medical-school/banner-3.png'
              width={873}
              height={873}
              alt='Where do I start?'
              // objectFit='containe'
            />
          </section>
        </div>
        {/* SECTION END */}
      </div>
	  <br/>
	  <br/>
	  <br/>
    </main>
  );
};

export default MedicalSchool;
