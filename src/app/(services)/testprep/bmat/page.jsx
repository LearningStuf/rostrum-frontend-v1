import React from "react";
import Image from "next/image";
import HeaderBanner from "@/components/common/HeaderBanner";
import CallToAction from "@/components/common/CallToAction";
import AnimationProvider from "@/components/common/AnimationProvider";

const BMAT = () => {
  return (
    <main className="relative w-full h-auto">
      <HeaderBanner align="left" title={"BMAT"} />
      <div className="w-ful h-full relative mt-10 mb-10">
        <div className="max-w-full md:max-w-screen-xl h-full mx-2 p-3 md:p-6 md:mx-auto">
          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                BMAT PREP
              </h3>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                If you want to study medicine, you may have to take the
                BioMedical Admissions Test (BMAT). Applicants to various
                medicine programmes at certain universities take this
                subject-specific entrance test. You’ll find important
                information regarding the test in the sections below.
              </p>
              <br />
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                What exactly is the BMAT?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The BMAT is a two-hour admissions test that measures aptitude
                and knowledge. The BMAT assesses a wide range of abilities in
                three sections:
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The first section assesses your problem-solving, argument
                comprehension, and data analysis and inference abilities. In 60
                minutes, you’ll have to complete 32 multiple-choice questions.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The following section assesses your ability to apply scientific
                knowledge learned in school to science and mathematics by the
                age of sixteen. In 30 minutes, you’ll have to complete 27
                multiple-choice questions.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-1.png"
                width={471}
                height={471}
                alt="BMAT PREP"
                className="mx-auto"
              />
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The capacity to select, develop, and organise ideas, as well as
                present them simply and effectively in writing, is assessed in
                Section 3. You’ll write an essay on one of three questions you
                select, and you’ll have 30 minutes to complete it.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The BMAT is a difficult exam to pass because you can’t use a
                calculator or dictionary, there’s a lot of time pressure, and it
                assesses a wide variety of abilities. Many scientifically
                oriented students are particularly concerned about the
                essay-writing portion.
              </p>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              What is the BMAT test’s scoring system?
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                In Sections 1 and 2, each question is worth one mark. Each
                section’s total raw marks are transformed to the BMAT scale,
                which ranges from 1 (poor) to 9 (high) (high). Scores are
                recorded to the nearest tenth of a decimal place. Typical BMAT
                candidates will receive a score of around 5.0, which is almost
                half a mark. The best candidates will receive a score of
                approximately 6.0, with a few exceptional individuals receiving
                a score of above 7.0.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                The topic of Section 3 essays is graded, as well as the quality
                of the written English. Each essay is graded twice. The average
                of the two marks is stated if the two marks are the same or are
                separated by no more than one mark. If there is a significant
                disparity in the grades, the essays are remarked a third time,
                and the final grade granted is double-checked by a senior member
                of the Cambridge Assessment team.
              </p>
            </div>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                Who Should Take The BMAT?
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                This exam is required if you wish to apply to a BMAT university.
                If you do not take the BMAT, you will only be able to apply to
                UCAT universities and will not be considered by this limited
                group of medical schools.
              </p>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                Some students avoid applying to BMAT universities because they
                wish to focus solely on the UCAT, but others recognise that
                taking the BMAT allows you to apply to a wider range of medical
                schools, allowing you to be more selective with your UCAS
                choices.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-2.png"
                width={471}
                height={471}
                alt="Who Should Take The BMAT?"
                className="mx-auto"
              />
            </section>
          </div>

          {/* SECTION END */}

          {/* SECTION START */}

          <div className="w-full h-auto mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Which Universities Require The BMAT?
            </h4>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  University of Cambridge
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  University of Leeds
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  University of Oxford
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Universidad de Navarra
                </p>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Lancaster University
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Nazarbayev University School of Medicine
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  University College London
                </p>
              </section>
              <section>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Brighton and Sussex Medical School
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Imperial College London
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-bold text-center md:text-left mt-4">
                  Keele University
                </p>
              </section>
            </div>
            <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Why is the BMAT used by some universities?
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Some colleges use the BMAT to create an additional level of
                  difference amongst applicants. The importance of BMAT results
                  will be weighted differently by each university.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  When will you be able to take the BMAT?
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  The BMAT exam is given many times a year. In each application
                  cycle, you can only take the test once. You must take the BMAT
                  test in November if you are applying to a UK university.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
            <section className="mt-10">
              <h3 className="text-center md:text-left text-[40px] md:text-[55px] text-primary font-bold leading-tight uppercase mt-2 mb-8 md:mb-4">
                Here are a few tips to help you as you start your prep:
              </h3>
            </section>
            <section>
              <Image
                src="/assets/bmat/banner-3.png"
                width={441}
                height={441}
                alt="Here are a few tips to help you as you start your prep:"
                className="mx-auto"
              />
            </section>
          </div>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
            <section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  1. Prioritise
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Take a look at a few questions from each section to see what
                  kind of thinking is required. Before you begin, make sure you
                  have a thorough idea of what each section entails.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  By doing so, you’ll likely discover that Section 1 is the most
                  like the UCAT; Section 2 is the one you’ll be most familiar
                  with (and thus the easiest to revise for), and Section 3 is
                  potentially more dependent on communication and wider reading.
                  <br />
                  You’ll be able to see which ones need the most attention and
                  devote more effort to them. Don’t waste time on portions that
                  you’re already familiar with.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  2. Previous years’ papers
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  One of the best things about the BMAT is that it is (in
                  general) easier to prepare for than the UCAT. It’s only a pen
                  and paper test, which is more like the usual test we’re all
                  used to, so your nerves should be a little less stressed!
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Take advantage of the BMAT website’s archive of former papers,
                  which are all available for free. They will undoubtedly assist
                  you in identifying your skills and shortcomings, as well as
                  familiarising you with the test’s structure.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  3. Complex problems vs. Time
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  One difference between the BMAT and the UCAT is that the BMAT
                  is not designed to be as time-pressured, which means that the
                  questions you’ll be asked will frequently be multi-step. The
                  UCAT tests your ability to work fast, and those of you who
                  have taken it before will be aware of the limited time you
                  have to complete each question.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  However, don’t use the informed guessing strategy that’s
                  typically advocated for the UCAT while answering BMAT
                  questions; instead, be prepared to meticulously work your way
                  through it in a logical manner.
                </p>
              </section>
            </section>
            <section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  4. Treat Section 1 as if it were the UCAT
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  In terms of section-specific advice, try not to get too worked
                  up in this one. Those of you who have taken the UCAT will
                  recognize the similarities with Verbal Reasoning and will
                  benefit from following a similar but more cautious approach.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Read the question, consider the answer alternatives, and then
                  eliminate it with zeal. Look for small trick words that can be
                  used to entirely invert the meaning of some statements. You’ll
                  do well if you don’t make any assumptions or draw any
                  inferences that aren’t explicitly stated in the passage.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  5. Maintain your confidence in Section 2
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Section 2 is labelled as GCSE level Science, but due to the
                  many criteria, it actually ends up being significantly higher
                  than GCSE level. Examine the official guide on the BMAT
                  website to ensure that you have all of the necessary
                  information.
                </p>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Use this guide as a checklist for reviewing all of the topics
                  included on the BMAT. Don’t be discouraged if the questions
                  you tackle appear to be much more difficult than the guide’s
                  level of knowledge – keep in mind that the subject will be
                  used in a variety of ways. Prepare yourself so that you can
                  step up and meet the challenge!
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  6. Section 3 requires a great deal of clarity
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Rambling is a big no-no for your essay — the BMAT wants short,
                  well-presented, and well-argued topics. Your grade will be
                  determined not just by your writing style, but also by the
                  points you make. Make an effort to avoid creating flimsy
                  arguments. If a comparable scenario arises, a broader
                  understanding of current ethical dilemmas will aid you.
                </p>
              </section>
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <section className="">
              <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
                THE ROSTRUM EDGE
              </h4>
              <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                We are professionals at increasing your BMAT score and
                increasing your chances of getting into medical school. How?
                Through One-On-One Tuition, Intensive BMAT Courses, and Mock
                Papers and Practice Questions, our BMAT Tutors help you enhance
                your BMAT Score quickly. Our tutors are themselves graduates
                from top med schools in the UK. their first hand experience aids
                in an all round preparation. Based on the time until your test,
                your BMAT results, and your weak areas, your instructor will
                create a personalised BMAT lesson plan for you.
              </p>
            </section>
            <section className="">
              <Image
                src="/assets/bmat/banner-4.png"
                width={471}
                height={471}
                alt="THE ROSTRUM EDGE"
                className="mx-auto"
              />
            </section>
          </div>
          {/* SECTION END */}

          {/* SECTION START */}
          <div className="w-full h-auto relative mt-14">
            <h4 className="text-center md:text-left text-[28px] md:text-[40px] text-primary font-bold leading-tight uppercase">
              Our BMAT Program will provide you with the following valuable
              resources:
            </h4>
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Intensive Courses:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Highly effective, comprehensive courses are a great way to
                  learn a lot in a brief period of time.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Tried and tested strategies:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  You could be answering 1000s of questions but not becoming any
                  better. Our instructors will help you improve your BMAT
                  technique.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Comprehensive materials:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  We provide fine-tuned tools in a variety of formats to assist
                  you in practising and learning.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Supervision for Enrichment:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  We engage with students to help them learn beyond the
                  curriculum to gain a better understanding of the subject.
                </p>
              </section>

              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Personalised Programmes:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  Personalised Programmes: Every student can get the most out of
                  what they learn with Rostrum thanks to the customizable
                  programme.
                </p>
              </section>
              <section>
                <h6 className="text-[22px] md:text-[28px] text-primary  text-center md:text-left font-bold leading-tight ">
                  Regular Progress Reports:
                </h6>
                <p className="text-[16px] md:text-[20px] text-primary font-normal text-center md:text-left mt-4">
                  With regular progress updates, BMAT revision recommendations,
                  and homework plans, we keep parents and students informed.
                </p>
              </section>
            </div>
          </div>
          {/* SECTION END */}
        </div>
      </div>
      <CallToAction/>
    </main>
  );
};

export default BMAT;
