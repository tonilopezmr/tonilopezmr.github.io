import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import chirinex from '@/images/logos/chirinex.png'
import gradescalculator from '@/images/logos/grades_calculator.png'
import smartexam from '@/images/logos/smartexam.jpg'
import bacota from '@/images/logos/bacota.png'
import videomemes from '@/images/logos/videomemes.png'
import artificialprofile from '@/images/logos/artificialprofile.jpg'
import instantclip from '@/images/logos/1024.png'
import bodia from '@/images/logos/logo_bodia.png'
import facemash from '@/images/logos/facemash.png'

const projects = [  
  {
    name: 'Bodia',
    description:
      'I wanted to bring all AI Avatar knowledge with Stable Diffusion into an API easy to use with different Use Cases oriented. Build AI Products with Stable Diffusion.',
    link: { href: 'https://bodia.ai/', label: 'bodia.ai' },
    logo: { l: bodia, shape: "rounded-full"},
  },
  {
    name: 'Artificial Profile',
    description:
      'The first iOS AI Avatar app in the App Store, with more than 4000 customers and 500k avatar generations.',
    link: { href: 'http://artificialprofile.com/', label: 'artificialprofile.com' },
    logo: { l: artificialprofile, shape: "square"},
  },
  {
    name: 'Bacota',
    description:
      'I was making small hardware devices using IOT and creating Web and Mobile applications, pivoted many times during 3 years until I created the Open Garage device. I really enjoyed and loved Hardware and Software convination <3.',
    link: { href: 'https://bacota.es/', label: 'bacota.es' },    
    logo: { l: bacota, shape: "rounded-full"},
  },
  {
    name: 'InstantClip',
    description:
      'The sucessor of VideoMemes, an iOS application for creating video trends without editing using teamplates. I created it before Instagram added this feature.',
    link: { href: 'https://instantclip.app/', label: 'instantclip.app' },
    logo: { l: instantclip, shape: "square"},    
  },
  {
    name: 'VideoMemes',
    description:
      'Android Application that automatically generates Video memes using templates of most common video memes.',
    link: { href: 'https://tonilopezmr.github.io/videomemes/', label: 'videomemes.xyz' },    
    logo: { l: videomemes, shape: "rounded-full"},
  },
  {
    name: 'Grades Calculator',
    description:
      'User-friendly Android app for calculating average university grades and the next minimum required grade, utilizing Clean Architecture.',
    link: { href: 'https://tonilopezmr.github.io/calculanotas/', label: 'gradescalculator.com' },    
    logo: { l: gradescalculator, shape: "rounded-full"},
  },
  {
    name: 'FACEMASH UPV',
    description:
      'I created the FACEMASH website for UPV University, I collected all images of the Uni. I created it to promote Grades Calculator. More than 10000 unique visitors in 3 days, 5m avg screen.',
    link: { href: '/articles/facemash-upv', label: 'facemash.com' },        
    image: facemash
  },
  {
    name: 'Cheat SmartExam',
    description:
      'It was a Sony SmartWatch 2 app for cheating in exams, It generated $350 rev.',
    link: { href: 'https://play.google.com/store/apps/details?id=com.tonilopezmr.sonymobile.smartextension.smartexam', label: '' },
    logo: { l: smartexam, shape: "square"},    
  },
  {
    name: 'ChirinEx',
    description:
      'Parcel service and logistics management system that optimizes deliveries and enhances customer experience with real-time updates.',
    link: { href: 'https://tonilopezmr.github.io/chirinex/', label: 'chirinex.com' },
    image: chirinex,
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Toni López</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>
              {project.logo  && (<div className={"relative z-10 flex h-12 w-12 items-center justify-center bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 " + project.logo.shape}>
                <Image
                  src={project.logo.l}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>)}
              {project.image && (<div className="relative z-10 flex h-12">
                <Image
                  src={project.image}                             
                  unoptimized
                />
              </div>)}
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href}>{project.name}</Card.Link>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:group-hover:text-[#FEDE00]/100 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
    </>
  )
}
