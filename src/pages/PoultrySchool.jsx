import SchoolHero from '@/components/school/SchoolHero'
import AboutSchool from '@/components/school/AboutSchool'
import WhyPoultrySchool from '@/components/school/WhyPoultrySchool'
import Courses from '@/components/school/Courses'
import Bulletin from '@/components/school/Bulletin'
import FooterCTA from '@/components/FooterCTA'

const PoultrySchool = () => {
  return (
    <div>
      <SchoolHero />
     
      <WhyPoultrySchool />
      <Courses />
      <Bulletin />
      <FooterCTA />
    </div>
  )
}

export default PoultrySchool
