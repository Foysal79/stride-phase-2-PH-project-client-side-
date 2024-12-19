
import Accordion from '../components/Home/Accordion'
import Banner from '../components/Home/Banner'
import FeaturedProducts from '../components/Home/FeaturedProducts'
import UserReview from '../components/Home/UserReview'

const Home = () => {
  return (
    <div>
        <Banner />
       <div className='w-11/12 mx-auto'>
        
       <div className='my-24 '>
            <h1 className='mb-16 text-2xl font-semibold text-center'>Featured Product</h1>
        <FeaturedProducts />
        </div>
        <div className='my-24 '>
            <h1 className='mb-16 text-2xl font-semibold text-center'>User Review</h1>
        <UserReview />
        </div>
        
        <div className='my-24 '>
            <h1 className='mb-16 text-2xl font-semibold text-center'>
              Frequently Asked Questions
              </h1>
        <Accordion />
        </div>

       </div>
        
    </div>
  )
}

export default Home