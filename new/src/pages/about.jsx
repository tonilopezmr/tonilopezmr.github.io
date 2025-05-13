import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-[#FEDE00]/90"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-[#FEDE00]/90" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Toni López</title>
        <meta
          name="description"
          content="I’m Toni López. I live in Valencia City, where I build the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              👋 I’m Toni López
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember. 
                I built many different projects since I was an 8-year-old kid, 
                from selling flowers to making my own firecrackers. 
                I've learned the ropes to make things happen. 
                When I was 13 years old, my parents gifted me my first PC.
              </p>
              <p>
                Growing up, basketball was my biggest passion besides computers. At 14, I discovered Counter-Strike Source and eventually became a professional player. But everything changed when I found programming. Attending the DroidCon Android Community Meetup in Madrid opened my eyes - I met incredible developers and learned invaluable lessons about software development that would shape my career.
              </p>
              <p>
                After attending DroidCon, I noticed two main things: everyone spoke English and used MacBooks. I sold everything and bought my first MacBook Pro 15". No more Android Studio getting stuck when having more than 6 projects open at the same time.
              </p>
              <p>
                After more than 10 years, I've created <Link href="/projects" className="text-teal-500 dark:text-[#FEDE00]/100">many personal projects</Link> and worked for many different companies. I've grown to a level I wouldn't have expected, being able to code in almost any language and use any platform from web to mobile, and any service.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/tonilopezmr" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>              
              <SocialLink href="https://github.com/tonilopezmr" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://linkedin.com/in/tonilopezmr" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>              
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
