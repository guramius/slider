import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination, Navigation} from 'swiper/modules'
import Image from 'next/image';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const index = () => {
  return (
    
    <div className='mx-[165px]'>
      <Swiper
       spaceBetween={30}
       slidesPerView={3}
       navigation={true}
      //  pagination={{clickable:true}}
      //  scrollbar ={{draggable: true}}
       className='w-full'
       loop={false}
       modules={[Navigation, Pagination]}
      >
        <SwiperSlide>
          <Image src = '/tiket.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/age.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/tb.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/age.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/tiket.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/age.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src = '/tb.png' width='350' height='270'/>
        </SwiperSlide>
        <SwiperSlide>
          <Image src='/violino.png' width='350' height='270'/>
        </SwiperSlide>
      </Swiper> 
    </div>    
  )
}

export default index