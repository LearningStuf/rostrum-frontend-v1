import React from 'react';
import Image from 'next/image';
import HeaderBanner from '@/components/common/HeaderBanner';
import CallToAction from '@/components/common/CallToAction';

const MedicalSchool = () => {
  return (
    <main className='relative w-full h-auto'>
      <HeaderBanner
        align='left'
        title={'How To Apply for the Best UK Medical Schools'}
        image={'/assets/header-banner/medical.png'}
      />
      <div className='w-ful h-full relative mt-10 mb-10'>
        <div className='max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto'>
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-4'>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left '>
            Are you considering a career in medicine? UK medical education provides unique learning opportunities and career paths. The application process is competitive, as thousands of students apply yearly for limited slots. All medical schools have unique application processes, and it's up to the students to research how to apply to each one. Here is where Rostrum Education helps you prepare for entry exams, write personal statements, and ace interview rounds. 
            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left'>
            It doesn't matter how you want to serve the community in healthcare. You can choose to become a nurse, researcher, caregiver, surgeon, or any other career! Studying medicine in the UK can lead you to a promising and rewarding career.

            </p>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
            <section>
              <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-4'>
              Why Study Medicine In The UK?
              </h3>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-auto md:mt-4'>
              The UK is considered one of the best countries for medical education. They have top-notch universities that provide performance and research. Universities such as Oxford and Cambridge are always ranked among the best in the world in terms of quality education and knowledge.

              </p>
              <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              The UK is a top choice for international students seeking higher education. It offers high-quality teaching and research opportunities. It boasts 43 universities in the top 650 for medical education worldwide. Doctors in the UK earn significantly more than other health professionals, with salaries rising steadily from £245,000 in 2016 to £318,000 in 2021. Indian MBBS graduates from UK universities are exempt from the Foreign Medical Graduate Examination too. Compared to the US, studying MBBS in the UK takes 5 to 6 years, making it a faster path to a medical degree.

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
              {/* <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
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
              </p> */}
            </section>
          </div>
          {/* SECTION END */}
          {/* SECTION START */}
          {/* <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
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
          </div> */}
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
            Fee Structure in UK Universities

            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            The UK stands out for its international education system and renowned medical training. Many students worldwide, especially from India, are drawn to its MBBS programs. The main reason is the comparatively affordable cost.

            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            For Indian aspirants, the expenses for an MBBS in the UK typically range from $130,000 to $340,000, covering tuition and other fees. Candidates should thoroughly research the cost structures of various institutions before applying. This ensures they make an informed decision about their education abroad.

            </p>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
            TOEFL
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Non-native English speakers may need to take the TOEFL. Meanwhile, gaining relevant work experience in healthcare or service roles boosts your application.            </p>
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
            Work Experience
            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Your work experience and personal statement matter most when applying to medical school. "Work Experience" includes any paid or voluntary roles you've had two years before applying. This could be in hospitals, the community, or elsewhere. Healthcare-related and general service roles count too!

            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            There are two types of work experience medical schools looks for:
            </p>
            <ul className='list-disc' >
              <li className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4' >
              Caring or Service Role: This involves working directly with people. Preference is given to those who work with ill, disabled, or disadvantaged people. It shows your compassion and teamwork skills.
              </li>
              <li className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Healthcare Observation: This means watching healthcare professionals at work to understand the field better.
              </li>
            </ul>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'></h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Even if your job isn't in healthcare, roles like customer service are still relevant. They demonstrate skills like teamwork and empathy, which are crucial in medicine. Reviewers want to see how you've helped others and developed key interpersonal skills essential for a medical career.

            </p>
            {/* <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            </p> */}
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
            Stand Out With Your Personal Statements

            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Your personal statement and academic achievements are the most important part of the application. Customize your application to highlight your passion for medicine and tell them exactly why you’re the best choice for their program.
            </p>
          </section>
          <section>
            <h4 className='text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight'>
            Medical School Admissions: Interview Process

            </h4>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Prepare for multiple mini-interviews (MMI), a common format many medical schools use. Rostrum Education offers comprehensive support to ensure preparation for these important interviews.

            </p>
            {/* <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
              Rostrum has a robust system and experienced staff in place to
              completely prepare you for these nerve-wracking interviews. We
              make sure you enter each interview as confident as ever.
            </p> */}
          </section>
        </div>
        {/* SECTION END */}
        {/* SECTION START */}

        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14'>
          <section className='order-2 md:order-1' >
            <h3 className='text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-none mt-2 mb-8 md:mb-4'>
            How Does Rostrum Education Help With Applications? 
            </h3>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            At Rostrum Education, students are provided with a step-by-step roadmap and support in preparation for medical school. Our expert tutors and mentors offer tailored approaches to enhance your chances of admission into the best medical schools in the UK.

            </p>
            <p className='text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4'>
            Ready to pursue UK medical education? Schedule your free consultation with Rostrum Education today and take the first step towards your future in medicine.

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
