import Header from '../../components/header/Header';
import React, { useRef, useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { Newaccesoriessliders } from '../../constants';

const Accessory = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [phone, setPhone] = useState('');

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  return (
    <>
      <div>
        <Header />
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
          }}
          modules={[Navigation, Autoplay]}
          loop={true}
          className='mySwiper lg:mt-16 w-full'
        >
          {Newaccesoriessliders.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.img} alt='offers' className='w-full' />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='text-center'>
          <h1 className='text-xl md:text-2xl lg:text-3xl pt-2 font-semibold'>
            ACCESSORIES
          </h1>
          <p className='text-xl md:text-xl lg:text-xl p-2'>
            Explore a World of Stylish Accessories for Every Occasion
          </p>
        </div>
        <CustomTabs tabsData={tabsData} />;
      </div>
    </>
  );
};

export function CardDefault({ cardData }) {
  const { imageUrl, title, price, description } = cardData;
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState('');

  const pattern = /^[6-9][0-9]{6,9}$/;
  if (phone !== '' && phone.length === 10) {
    if (!pattern.test(phone)) {
      toast.error('Enter valid phone number', {
        theme: 'colored',
      });
    }
  }

  const cancelButtonRef = useRef(null);

  return (
    <>
      {/* <Card className='flex flex-col mt-6 lg:w-72 md:w-1/4 w-full h-auto rounded m-4 transform transition duration-500 hover:scale-110'>
        <CardHeader
          shadow={false}
          floated={false}
          className='relative h-64 flex-shrink-0'
        >
          <img
            src={imageUrl}
            alt='card'
            className='h-full w-full object-contain max-h-full max-w-full'
          />
        </CardHeader>
        <CardBody>
          <div className='mb-2 flex items-center justify-between'>
            <Typography color='blue-gray' className='font-medium'>
              {title}
            </Typography>
            <Typography color='blue-gray' className='font-medium'>
              ₹ {price}
            </Typography>
          </div>
          <Typography
            variant='small'
            color='gray'
            className='font-normal opacity-75'
          >
            {description}
          </Typography>
        </CardBody>
        <CardFooter className='pt-0'>
          <Button
            onClick={() => setOpen(true)}
            ripple={false}
            fullWidth={true}
            className='bg-blue-900 text-white shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 gradient'
          >
            Buy it
          </Button>
        </CardFooter>
      </Card> */}

      <div className='flex flex-col mt-6 lg:w-72 md:w-1/4 w-full h-auto rounded-lg m-4 transform transition duration-500 hover:scale-105 shadow-lg bg-white'>
        <div className='relative h-64 flex-shrink-0'>
          <img
            src={imageUrl}
            alt='card'
            className='h-full w-full object-contain rounded-t-lg'
          />
        </div>
        <div className='p-4'>
          <div className='mb-2'>
            <h2 className='text-lg font-semibold text-gray-900'>{title}</h2>
          </div>
          <p className='text-gray-600 font-normal'>{description}</p>
          <div className='mt-4 flex items-center justify-between'>
            <div className='text-blue-700 font-medium text-lg'>
              ₹ {price}
              <span className=''>*</span>
            </div>
            <button
              onClick={() => setOpen(true)}
              className='bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-900 active:bg-blue-700 transition duration-300'
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed z-10 inset-0 overflow-y-auto'>
            <div className='flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <form
                  action='https://crm.zoho.in/crm/WebToLeadForm'
                  name='WebToLeads54158000000752015'
                  method='POST'
                  acceptCharset='UTF-8'
                >
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='xnQsjsdp'
                    value='5b07d0b8ffc394794f6ba099ffd2ccc4accb79c8063e25060b4c64de95d0347b'
                  />
                  <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='xmIwtLD'
                    value='3e4c511e1bfac462fb9ac158b261b0d3cf3883ed222bfea597b99f9e00397c92'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='actionType'
                    value='TGVhZHM='
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    name='returnURL'
                    value='https://www.saboomaruti.in/thank-you-for-contact-us'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='ldeskuid'
                    name='ldeskuid'
                  />
                  <input
                    type='text'
                    style={{ display: 'none' }}
                    id='LDTuvid'
                    name='LDTuvid'
                  />
                  <Dialog.Panel className='relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full'>
                    <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                      <div className='mt-3'>
                        <Dialog.Title
                          as='h3'
                          className='text-lg leading-6 font-medium text-gray-900 text-center'
                        >
                          Explore our accessory options for an upgrade!
                        </Dialog.Title>
                        <div className='mt-2 space-y-3'>
                          <div className='mt-2 py-8 space-y-3'>
                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Name
                              </label>
                              <input
                                type='text'
                                id='Last_Name'
                                name='Last Name'
                                required
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Email
                              </label>
                              <input
                                type='email'
                                ftype='email'
                                id='Email'
                                name='Email'
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                              />
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Phone
                              </label>
                              <input
                                className='mt-1 px-2 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border border-gray-600 rounded-md h-10'
                                type='text'
                                maxLength='10'
                                minLength='10'
                                required
                                id='Phone'
                                name='Phone'
                                value={phone}
                                onChange={(e) =>
                                  setPhone(
                                    e.target.value.replace(/[^1-9 ]/g, '') &&
                                      e.target.value.replace(/ /g, '')
                                  )
                                }
                              />
                              {!pattern.test(phone) && phone.length === 10 ? (
                                <small className='text-red-500'>
                                  phone number is invalid
                                </small>
                              ) : (
                                ''
                              )}
                            </div>

                            <div>
                              <label className='block text-sm font-medium text-gray-700'>
                                Model
                              </label>
                              <select
                                id='LEADCF6'
                                name='LEADCF6'
                                required
                                className='block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                              >
                                <option>Select Category</option>
                                <optgroup label='Accessories'>
                                  <option value='Accessories'>Exterior</option>
                                  <option value='Accessories'>Interior</option>
                                  <option value='Accessories'>Car Care</option>
                                  <option value='Accessories'>
                                    Life Style
                                  </option>
                                  <option value='Accessories'>
                                    Infotainment
                                  </option>
                                  <option value='Accessories'>
                                    Safety and Security
                                  </option>
                                </optgroup>
                              </select>
                            </div>
                          </div>

                          <div className='flex items-center space-x-2 mb-5'>
                            <p className='text-gray-900 mb-2 mt-1'>
                              <span className='font-semibold'>
                                Disclaimer :
                              </span>{' '}
                              I agree that by clicking the ‘Submit’ button
                              below, I am explicitly soliciting a call / Message
                              from Saboo Maruti (RKS Motor Pvt. Ltd) or its
                              Representatives on my ‘Mobile.’
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
                      <button
                        type='submit'
                        className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm'
                      >
                        Submit
                      </button>
                      <button
                        type='button'
                        className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none  sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button>
                    </div>
                  </Dialog.Panel>
                </form>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}

const Tab = ({ title, isActive, onClick }) => (
  <button
    className={`p-2 font-bold ${
      isActive ? 'text-blue-500' : 'text-gray-500'
    } font-bold text-xl focus:outline-none`}
    onClick={onClick}
  >
    {title}
  </button>
);

const TabsBody = ({ children, animate }) => {
  return (
    <div className={`mt-4 ${animate ? 'transition-all duration-300' : ''}`}>
      {children}
    </div>
  );
};

const CustomTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className='min-h-screen p-4 flex flex-col items-center bg-gray-100'>
      <div className='w-full flex flex-wrap space-x-4 justify-center bg-white p-2 rounded'>
        {tabsData.map((tab, index) => (
          <Tab
            key={index}
            title={tab.title}
            isActive={activeTab === index}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>

      <TabsBody className='mt-2 w-full p-2'>
        {/* Center align the cards */}
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center'>
            {/* Render content based on active tab */}
            {tabsData[activeTab].content.map((cardData, index) => (
              <div key={index} className='flex justify-center'>
                <CardDefault cardData={cardData} />
              </div>
            ))}
          </div>
        </div>
      </TabsBody>
    </div>
  );
};

const tabsData = [
  {
    title: 'Exterior',
    content: [
      {
        imageUrl:
          'https://images-saboomaruti-in.s3.ap-south-1.amazonaws.com/Arena/accessory-page/exterior-webp/83716M53M00-U3J_1.webp',
        title: 'Graphic Speaker | Alto',
        price: '49',
        description: '83716M53M00-U3J',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q6/77862m78l00-0pg_1.jpg',
        title: 'Car Emblem - Eeco Logo',
        price: '107',
        description: '77862M78L00-0PG',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg',
        title: 'Mud Flap Set - Front',
        price: '150',
        description: '990J0M55R00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-020_1.jpg',
        title: 'Mud Flap Set - Back',
        price: '199',
        description: '990J0M53M00-020',
      },
      // Line 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m62s00-020_1-jpg.jpg',
        title: 'Mud Flop Set - Front',
        price: '200',
        description: '990J0M62S00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-010_1.jpg',
        title: 'Mud Flap Set - Front',
        price: '249',
        description: '990J0M53M00-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m62s00-030_1.jpg',
        title: 'Mud Flap Set - Rear',
        price: '250',
        description: '990J0M62S00-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m55r00-010_3.jpg',
        title: 'Mud Flap Set - Rear',
        price: '2500',
        description: '990J0M55R00-010',
      },
      // Line 3
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/990j0m52m00-010_1.jpg',
        title: 'Mud Flap Set',
        price: '300',
        description: '990J0M52M00-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/04/celerio/990j0m81r17-010_0-jpg.jpg',
        title: 'Bumper Corner Protector',
        price: '330',
        description: '990J0M81R17-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg',
        title: 'Wheel Cover Grey',
        price: '349',
        description: '43250M69R00-27N',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q7/99000m99110_1.jpg',
        title: 'Mud Flap Set - Front & Rear',
        price: '359',
        description: '99000M99110',
      },
      //Line 4
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q10/990j0m53m00-050_1.jpg',
        title: 'Mud Flap Set - Front and Rear',
        price: '360',
        description: '990J0M53M00-050',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q22/990j0m69r00-090_1.jpg',
        title: 'Mud Flap Set - Rear | Eeco',
        price: '375',
        description: '990J0M69R00-090',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/24/990j0m62s00-010_1.jpg',
        title: 'Mud Flap Set - Front and Rear',
        price: '390',
        description: '990J0M62S00-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t00-010_0.jpg',
        title: 'Mud Flap Set | Alto K10',
        price: '390',
        description: '990J0M53T00-010',
      },
    ],
  },

  //Interior
  {
    title: 'Interior',
    content: [
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m56rc1-060_1.jpg',
        title: 'Steering Wheel Cover',
        price: '250',
        description: '77862M78L00-0PG',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m56rc1-080_1.jpg',
        title: 'Steering Wheel Cover',
        price: '250',
        description: '990J0M55R00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q25/990j0m72ra3-010_1.jpg',
        title: 'PVC Mat',
        price: '350',
        description: '990J0M53M00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q14/990j0m55ra3-010_1.jpg',
        title: 'Boot Mat',
        price: '400',
        description: '990J0M53M00-020',
      },
      // Line 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q6/77862m78l00-0pg_1.jpg',
        title: 'Door Still Gaurd',
        price: '107',
        description: '990J0M69RP6-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/05/990j0m55r00-020_1.jpg',
        title: 'Door Still Guard',
        price: '150',
        description: '990J0M55R00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-020_1.jpg',
        title: 'Door Still Gaurd',
        price: '150',
        description: '990J0M53M00-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53m00-020_1.jpg',
        title: 'Real Parcel Tray',
        price: '150',
        description: '990J0M53M00-020',
      },
      //line 3
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m69rp6-030_1.jpg',
        title: 'Door Still Guard',
        price: '490',
        description: '990J0M69RP6-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q17/990j0m62sp6-020_1.jpg',
        title: 'Door Still Gaurd',
        price: '510',
        description: '990J0M62SP6-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q17/990j0m62sp6-010_1.jpg',
        title: 'Door Still Guard',
        price: '619',
        description: '990J0M62SP6-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/88910m53t00-r3f_1.jpg',
        title: 'Door Still Guard',
        price: '619',
        description: '88910M53T00-R3F',
      },
      // line 4
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q27/990j0m75lc1-050_1.jpg',
        title: 'Steering Wheel Cover',
        price: '890',
        description: '990J0M75LC1-050',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/11/18/75901m78tg0_1.jpg',
        title: 'Black Mat - Eeco',
        price: '920',
        description: '75901M78TG0',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q26/990j0m74lc1-170_1.jpg',
        title: 'Steering Wheel Cover',
        price: '960',
        description: '990J0M74LC1-170',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m53ma0-080_1.jpg',
        title: 'Transparent Mat - Alto',
        price: '987',
        description: '990J0M53MA0-080',
      },
      //line 5
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/75901m53t00_0.jpg',
        title: 'Carpet Matt - Alto K10',
        price: '990',
        description: '75901M53T00',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q3/75901m62s00_1.jpg',
        title: 'Carpet Mat - Spresso',
        price: '990',
        description: '75901M62S00',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q4/75901m69rb0_1.jpg',
        title: 'PVC Mat - WagonR',
        price: '1040',
        description: 'R75901M69RB0',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/27/75901m66t00_1.jpg',
        title: 'Deluxe Carpet Matt - Brezza',
        price: '1090',
        description: '75901M66T00',
      },
    ],
  },
  {
    title: 'Car Care',
    content: [
      //line1
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/10/95850m69rb0_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '210',
        description: '95850M69RB0',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/95862m62s20_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '325',
        description: '95862M62S20',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m53ms0-010_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '330',
        description: '990J0M53MS0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/r4/990j0m79gs0-010_1.jpg',
        title: 'Cabin Air Filter - PM10',
        price: '335',
        description: '990J0M79GS0-010',
      },
      //line 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/12/990j0m69rs0-010_1.jpg',
        title: 'PM 2.5 AC Filter',
        price: '550',
        description: '990J0M69RS0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m56rs0-010_1.jpg',
        title: 'Cabin Air Filter',
        price: '599',
        description: '990J0M56RS0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q11/990j0m53mte-240_1.jpg',
        title: 'PM10 Cabin Air Filter',
        price: '600',
        description: '990J0M53MTE-240',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/12/990j0m82ps0-020_1.jpg',
        title: 'Activated Carbon Filter',
        price: '790',
        description: '990J0M82PS0-020',
      },

      // line 3

      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1390',
        description: '990J0M53M02-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1390',
        description: '990J0M62S02-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1410',
        description: '990J0M55R02-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m55r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1410',
        description: '990J0M55R02-020',
      },

      //line 4

      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r02-010_1.jpg',
        title: 'Car Body Cover | Celerio',
        price: '1430',
        description: '990J0M81R02-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m69r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1450',
        description: '990J0M69R02-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m69r02-020_1.jpg',
        title: 'Car Body Cover',
        price: '1450',
        description: '990J0M69R02-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised1/99000m99123_1.jpg',
        title: 'Car Body Cover | Eeco',
        price: '1450',
        description: '99000M99123',
      },

      // line 5

      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t02-030_0.jpg',
        title: 'Body Cover | Alto K10',
        price: '1490',
        description: '990J0M53T02-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t02-030_0.jpg',
        title: 'Body Cover | Alto K10',
        price: '1490',
        description: '990J0M53T02-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/09/990j0m55r02-050_1.jpg',
        title: 'Car Smart Body Cover',
        price: '1499',
        description: '990J0M55R02-050',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/03/0203/990j0m55r02-030_1.jpg',
        title: 'Car Body Cover (Matte)',
        price: '1630',
        description: '990J0M55R02-030',
      },
    ],
  },
  {
    title: 'Life style',
    content: [
      //line 1
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62sp0-010_1.jpg',
        title: 'Speaker Grille - Rear',
        price: '220',
        description: '990J0M62SP0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04/990j0m52m13-030_1.jpg',
        title: 'Turn Signal Indicator',
        price: '260',
        description: '990J0M52M13-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66t13-030_0.jpg',
        title: 'Front Grille Garnish',
        price: '290',
        description: '990J0M66T13-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/27/990j0m66t13-040_1.jpg',
        title: 'Front Grille Garnish',
        price: '290',
        description: '990J0M66T13-040',
      },
      // line 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r13-110_1.jpg',
        title: 'Fog Lamp Garnish',
        price: '300',
        description: '990J0M81R13-110',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q14/990j0m55r13-260_1.jpg',
        title: 'C-Pillar Garnish',
        price: '360',
        description: '990J0M55R13-260',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/10/ync/990j0m81r13-050_1.jpg',
        title: 'Fog Lamp Garnish',
        price: '390',
        description: '990J0M81R13-050',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/03/0203/990j0m52m13-040_1.jpg',
        title: 'Fuel Lid Garnish',
        price: '400',
        description: '990J0M52M13-040',
      },
      //line 3
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m81r13-100_0.jpg',
        title: 'Fog Lamp Garnish',
        price: '410',
        description: '990J0M81R13-100',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m81r13-040_0.jpg',
        title: 'Fog Lamp Garnish',
        price: '410',
        description: '990J0M81R13-040',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/05/990j0m53t13-030_1.jpg',
        title: 'Rear Bumper Garnish',
        price: '430',
        description: '990J0M53T13-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/18/990j0m53t13-020_0.jpg',
        title: 'Rear Bumper Garnish',
        price: '430',
        description: '990J0M53T13-020',
      },
    ],
  },
  {
    title: 'Infotainment',
    content: [
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/oldimages/jan/39354m55kb0_1.jpg',
        title: 'Speaker Bracket',
        price: '107',
        description: '39354M55KB0',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/12/990j0m74lm5-010_1.jpg',
        title: 'Antenna Pig Tail Assembly',
        price: '128',
        description: '990J0M74LM5-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/07/990j0m83km5-010_1.jpg',
        title: 'Speaker Spacer',
        price: '183',
        description: '990J0M83KM5-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m999m5-050_1.jpg',
        title: 'Spacer Ring',
        price: '195',
        description: '990J0M999M5-050',
      },
      // LINE 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/10/990j0m999m5-030_1.jpg',
        title: 'Speaker Spacer Set',
        price: '537',
        description: '990J0M999M5-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-010_1.jpg',
        title: 'Speaker - 10.16 cm',
        price: '690',
        description: '990J0M66LE1-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m60me3-010_1-jpg.jpg',
        title: 'Speaker 15.24 cm',
        price: '1210',
        description: '990J0M60ME3-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-070_1.jpg',
        title: 'Speaker - Dual Cone',
        price: '1650',
        description: '990J0M66LE1-070',
      },
      //line 3
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/04-revised/990j0m53me3-030_1.jpg',
        title: 'Speaker 15.24 cm',
        price: '1970',
        description: '990J0M53ME3-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-090_1.jpg',
        title: 'Speaker - Dual Cone',
        price: '2090',
        description: '990J0M66LE1-090',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q18/990j0m66le1-080_1.jpg',
        title: 'Speaker - 10.16 cm',
        price: '2190',
        description: '990J0M66LE1-080',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/r7/990j0m99919-150_1.jpg',
        title: 'Bluetooth Kit',
        price: '2490',
        description: '990J0M99919-150',
      },
      //line 4
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q19/990j0m66le1-100_1.jpg',
        title: 'Speaker - 15.24 cm',
        price: '2590',
        description: '990J0M66LE1-100',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q33/990j0m999ee-030_1.jpg',
        title: 'Tweeter 80W',
        price: '2690',
        description: '990J0M999EE-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q19/990j0m66le3-030_1.jpg',
        title: 'Speakers -  260W 2 - way',
        price: '2690',
        description: '990J0M66LE3-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m66le3-070_1.jpg',
        title: 'Speakers - 16 cm',
        price: '2690',
        description: '990J0M66LE3-070',
      },
    ],
  },
  {
    title: 'Safety and security',
    content: [
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/36550m64m50_1.jpg',
        title: 'Plug and Play Footwell Light',
        price: '270',
        description: '36550M64M50',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66te0-010_1.jpg',
        title: 'T Lead - Brezza',
        price: '365',
        description: '990J0M66TE0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m52mm5-010_1.jpg',
        title: 'Audio Systen Hardware Kit',
        price: '460',
        description: '990J0M52MM5-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m53te0-020_1-jpg.jpg',
        title: 'Rear Door Speaker Harness',
        price: '510',
        description: '990J0M53TE0-020',
      },
      //line 2
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62se0-020_1.jpg',
        title: 'Speaker Wiring Harness Kit',
        price: '520',
        description: '990J0M62SE0-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2023/02/990j0m53te0-010_1-jpg.jpg',
        title: 'Front Door Speaker Harness',
        price: '990',
        description: '990J0M53TE0-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/84702m53m10-5pk_1.jpg',
        title: 'Outside Rear View Mirror',
        price: '1053',
        description: '84702M53M10-5PK',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/11/990j0m62s21-020_1.jpg',
        title: 'Rear Parking Assistance',
        price: '2030',
        description: '990J0M62S21-020',
      },
      //line 3
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/06/29/990j0m66tpj-030_0.jpg',
        title: 'OVRM and ORVM Auto Cover',
        price: '3590',
        description: '990J0M66TPJ-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2021/1602/990j0m72r11-010_1.jpg',
        title: 'OVRM Turn Indicator',
        price: '3590',
        description: '990J0M72R11-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2022/01/990j0m66tpj-040_0-jpg.jpg',
        title: 'OVRM and IVRM Cover',
        price: '3590',
        description: '990J0M66TPJ-040',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/11/18/990j0m52m11-030_1.jpg',
        title: 'Fog Lamp - Eeco',
        price: '3750',
        description: '990J0M52M11-030',
      },
      //line 4
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/05/990j0m53tf0-030_1.jpg',
        title: 'Security Vxi+',
        price: '3790',
        description: '990J0M53TF0-030',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/2020/07/990j0m62sf0-020_1.jpg',
        title: 'Secuirty System',
        price: '3950',
        description: '990J0M62SF0-020',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/partsimages/2022/08/24/990j0m69r11-010_1.jpg',
        title: 'Fog Lamp Kit',
        price: '4150',
        description: '990J0M69R11-010',
      },
      {
        imageUrl:
          'https://marutisuzukiarenaprodcdn.azureedge.net/-/media/marutigeniuneaccessories_27112019/old_20210309/q12/990j0m55r11-010_1.jpg',
        title: 'Fog Lamp Kit',
        price: '4260',
        description: '990J0M55R11-010',
      },
    ],
  },
  // Add more tabs and their card data as needed
];

export default Accessory;
